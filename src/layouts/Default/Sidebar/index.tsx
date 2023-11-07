import { BiHomeAlt2 } from 'react-icons/bi'
import { IoIosIceCream } from 'react-icons/io'
import { IoDiscOutline } from 'react-icons/io5'

import { ItemSidebar, ItemSidebarType } from './Item.sidebar'
import LogoSidebar from './Logo.sidebar'
import { isActiveItemSidebar } from './sidebar.utils'

const MAIN_ITEMS_SIDEBAR: ItemSidebarType[] = [
  {
    label: 'Nova Venda',
    index: '1',
    icon: <IoDiscOutline size={34} />,
    href: '/',
  },
  {
    label: 'Option 2',
    index: '2',
    icon: <IoIosIceCream size={34} />,
    href: '/cash-register',
  },
  {
    label: 'Option 3',
    index: '4',
    icon: <BiHomeAlt2 size={34} />,
    href: '/settings',
  },
]

type SidebarLayoutProps = {
  items?: ItemSidebarType[]
}

export function SidebarLayout({
  items = MAIN_ITEMS_SIDEBAR,
}: SidebarLayoutProps) {
  return (
    <nav className="flex flex-col items-center h-screen overflow-hidden w-[165px]">
      <LogoSidebar src="/logo.png" />
      <div className="flex flex-col mt-3">
        {items.map((item) => (
          <ItemSidebar
            key={item.index}
            {...item}
            active={isActiveItemSidebar(item)}
          />
        ))}
      </div>
    </nav>
  )
}
