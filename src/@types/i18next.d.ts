import { defaultNS, fallbackNS } from "../i18n"
import resources from "./resources"

declare module "i18next" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    fallbackNS: typeof fallbackNS
    resources: typeof resources
  }
}
