import '../globals.css'
import siteInfo from '@/settings/site-confit'
import NavBar from '../components/NavBar'

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
      <NavBar/>
      <body>{children}</body>
    </html>
  )
}
