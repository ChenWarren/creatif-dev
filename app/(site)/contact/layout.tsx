import { ReCaptchaV3Provider } from '@/components'

export const metadata = {
  title: '',
  description: '',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReCaptchaV3Provider>
      {children}
    </ReCaptchaV3Provider>
  )
}
