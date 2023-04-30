import '../globals.css'
import { siteInfo } from '@/settings'

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
      <body>{children}</body>
    </html>
  )
}
