import axios from "axios"
import * as next from "next"
import { parseCookies } from "nookies"

import { AUTH_TOKEN_NAME } from "../constants/auth.constants"
export function getAPIClient(
  ctx?: Pick<next.NextPageContext, "req"> | null | undefined,
) {
  const { [AUTH_TOKEN_NAME]: token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  })

  api.interceptors.request.use((config) => {
    return config
  })

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  return api
}
