import '../globals.css'
import { siteInfo } from '@/settings'
import { NavBar, Footer } from '@/blocks'
import { GoogleAnalytics } from '@/components'
import { getMenuList } from '@/sanity/util/menulist'
import { MenuList } from '@/types'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const primaryMenuData: MenuList = await getMenuList('primary-menu')
  const footerListCenterData: MenuList = await getMenuList('footer-menu-center')
  const footerListRightData: MenuList = await getMenuList('footer-menu-right')
  const [menulist, footerListCenter, footerListRight ] = await Promise.all([primaryMenuData, footerListCenterData, footerListRightData])

  return (
    <html lang="en">
      <body className='min-h-screen bg-slate-50 dark:bg-gray-900 dark:text-white'>
        <GoogleAnalytics GTM_ID={siteInfo.gtagId}/>
        <NavBar menuList={menulist.menuItems}/>
          {children}
        <Footer linkListCenter={footerListCenter.menuItems} linkListRight={footerListRight.menuItems}/>
      </body>
    </html>
  )
}
