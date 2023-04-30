import { ReCaptchaV3Provider } from '@/components'

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
