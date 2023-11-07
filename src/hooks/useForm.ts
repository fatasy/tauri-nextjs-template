import {
  FieldValues,
  useForm as UseReactHookForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form'

export function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
>(
  props?: UseFormProps<TFieldValues, TContext>,
): UseFormReturn<TFieldValues, TContext, TTransformedValues> {
  const form = UseReactHookForm<TFieldValues, TContext, TTransformedValues>(
    props,
  )

  // useEffect(() => {
  //   if (defaultValues) {
  //     form.reset(defaultValues);
  //   }
  // }, [defaultValues, form])

  return form
}
