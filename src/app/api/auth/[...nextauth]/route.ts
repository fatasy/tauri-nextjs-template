import { handlers } from '@auth'
const { GET: AuthGET, POST } = handlers
export { POST }

import type { NextRequest } from 'next/server'

// Showcasing advanced initialization in Route Handlers
export async function GET(request: NextRequest) {
  // Do something with request
  const response = await AuthGET(request)
  // Do something with response
  return response
}

// export const runtime = "edge"
