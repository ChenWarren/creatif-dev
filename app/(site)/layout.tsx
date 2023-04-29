import '../globals.css'
import siteInfo from '@/settings/site-confit'
import { NavBar, Footer } from '@/blocks'
import { GoogleAnalytics } from '@/components'

export const metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-slate-50 dark:bg-gray-900 dark:text-white'>
        <GoogleAnalytics/>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
