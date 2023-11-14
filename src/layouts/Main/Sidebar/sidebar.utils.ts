import { ItemSidebarType } from './Item.sidebar'

export function checkSidebarItemActive(
  { href }: ItemSidebarType,
  pathname: string,
) {
  if (pathname === href) return true
  return href !== '/' && pathname.startsWith(href as string)
}
