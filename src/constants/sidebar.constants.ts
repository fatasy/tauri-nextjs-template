import { IoDiscOutline, IoStorefront } from 'react-icons/io5'

import { ItemSidebarType } from '@/layouts/Main/Sidebar/Item.sidebar'

export const MAIN_SIDEBAR_ITEMS: ItemSidebarType[] = [
  {
    label: 'Nova Venda',
    index: '1',
    icon: IoDiscOutline,
    href: '/',
  },
  {
    label: 'Caixa',
    index: '2',
    icon: IoStorefront,
    href: '/cash-register',
  },
]
