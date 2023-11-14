import { usePathname, useRouter } from 'next/navigation'

import { MAIN_SIDEBAR_ITEMS } from '@/constants/sidebar.constants'

import { ItemSidebar, ItemSidebarType } from './Item.sidebar'
import LogoSidebar from './Logo.sidebar'
import { SidebarBackButton } from './components/SidebarBackButton'
import { checkSidebarItemActive } from './sidebar.utils'

type SidebarLayoutProps = {
  items?: ItemSidebarType[]
  back?: boolean
}

export function SidebarLayout({
  items = MAIN_SIDEBAR_ITEMS,
  back = false,
}: SidebarLayoutProps) {
  const pathname = usePathname()
  const { back: goBack } = useRouter()
  return (
    <nav className="flex flex-col items-center h-screen overflow-hidden w-[150px] ml-4 border-r">
      {back && <SidebarBackButton onClick={goBack} />}
      <LogoSidebar src="/logo.png" />
      <div className="flex flex-col mt-3">
        {items.map((item) => (
          <ItemSidebar
            item={item}
            key={item.index}
            active={checkSidebarItemActive(item, pathname)}
          />
        ))}
      </div>
    </nav>
  )
}
