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
  const menulist: MenuList = await getMenuList('primary-menu')

  return (
    <html lang="en">
      <body className='min-h-screen bg-slate-50 dark:bg-gray-900 dark:text-white'>
        <GoogleAnalytics GTM_ID={siteInfo.gtagId}/>
        <NavBar menuList={menulist.menuItems}/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
