import { AsideLayout } from './Aside'
import { ContentLayout } from './Content.layout'
import { HeaderLayout } from './Header.layout'
import { DefaultLayout } from './layout.root'
import { MainLayout } from './Main'
import { SidebarLayout } from './Sidebar'

const Layout = Object.assign(DefaultLayout, {
  Aside: AsideLayout,
  Sidebar: SidebarLayout,
  Main: MainLayout,
  Content: ContentLayout,
  Header: HeaderLayout,
})

export default Layout
