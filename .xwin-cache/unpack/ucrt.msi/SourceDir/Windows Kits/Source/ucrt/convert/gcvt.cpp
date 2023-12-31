//
// gcvt.cpp
//
//      Copyright (c) Microsoft Corporation. All rights reserved.
//
// Defines the _gcvt functions, which convert a floating point value to a narrow
// character string.  It attempts to produce 'precision' significant digits in
// the Fortran F format if possible, otherwise the E format.  Trailing zeroes may
// be suppressed.  The _s-suffixed function returns zero on success; an error
// code on failure.  If the buffer is too small, that is an error.
//
#include <corecrt_internal.h>
#include <corecrt_internal_fltintrn.h>
#include <corecrt_internal_securecrt.h>
#include <locale.h>
#include <stdlib.h>



extern "C" errno_t __cdecl _gcvt_s(
    char*  const buffer,
    size_t const buffer_count,
    double const value,
    int    const precision
    )
{
    _VALIDATE_RETURN_ERRCODE(buffer != nullptr, EINVAL);
    _VALIDATE_RETURN_ERRCODE(buffer_count > 0,  EINVAL);
    _RESET_STRING(buffer, buffer_count);
    _VALIDATE_RETURN_ERRCODE(static_cast<size_t>(precision) < buffer_count, ERANGE);
    // Additional validation will be performed in the fp_format functions.
    
    _LocaleUpdate locale_update(nullptr);
    char const decimal_point = *locale_update.GetLocaleT()->locinfo->lconv->decimal_point;
    
    char result_string[_CVTBUFSIZE + 1];

    _strflt strflt{};
    __acrt_fltout(
        reinterpret_cast<_CRT_DOUBLE const&>(value),
        _countof(result_string),
        &strflt,
        result_string,
        _countof(result_string));

    int const magnitude = strflt.decpt - 1;

    // Output the result according to the Fortran G format as outlined in the
    // Fortran language specification.
    if (magnitude < -1 || magnitude > precision - 1)
    {
        // Ew.d where d = precision
        char scratch_buffer[_CVTBUFSIZE + 1];
        errno_t const e = __acrt_fp_format(&value, buffer, buffer_count, scratch_buffer, _countof(scratch_buffer), 'e', precision - 1, 3, nullptr);
        if (e != 0)
            return errno = e;
    }
    else
    {
        // Fw.d where d = precision-string->decpt
        char scratch_buffer[_CVTBUFSIZE + 1];
        errno_t const e = __acrt_fp_format(&value, buffer, buffer_count, scratch_buffer, _countof(scratch_buffer), 'f', precision -strflt.decpt, 3, nullptr);
        if (e != 0)
            return errno = e;
    }

    // Remove the trailing zeroes before the exponent; we don't need to check
    // for buffer_count:
    char* p = buffer;
    while (*p && *p != decimal_point)
        ++p;

    if (*p == '\0')
        return 0;

    ++p;

    while (*p && *p != 'e')
        ++p;

    char* stop = p;
    --p;

    while (*p == '0')
        --p;

    while ((*++p = *stop++) != '\0') { }

    return 0;
}

extern "C" char* __cdecl _gcvt(
    double const value,
    int    const precision,
    char*  const buffer
    )
{
    errno_t const e = _gcvt_s(buffer, SIZE_MAX, value, precision);
    if (e != 0)
        return nullptr;

    return buffer;
}
