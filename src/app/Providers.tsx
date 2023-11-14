'use client'

import { theme } from '@/constants/theme.constants'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { ConfigProvider } from 'antd'
import { DefaultSession } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React, { useState } from 'react'

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode
  session: DefaultSession | null
}): React.ReactNode {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      }),
  )
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration>
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </ReactQueryStreamedHydration>
        {<ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </SessionProvider>
  )
}
