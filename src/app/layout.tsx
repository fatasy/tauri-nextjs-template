import '@styles/globals.css'

import { auth } from '@auth'

import StyledComponentsRegistry from '@/components/AntdRegistry'

import Providers from './Providers'

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const session = await auth()
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <Providers session={session}>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
