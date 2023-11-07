import { ItemSidebarType } from './Item.sidebar'

export function isActiveItemSidebar({ href }: ItemSidebarType) {
  return window.location.pathname.includes(href)
}
