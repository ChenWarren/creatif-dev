'use client'

import { ReCaptchaProvider } from "next-recaptcha-v3"
import { ReactNode } from "react"
import { siteInfo } from "@/settings"

export function ReCaptchaV3Provider({children}: {children: ReactNode}) {
  return (
    <ReCaptchaProvider reCaptchaKey={siteInfo.siteKey}>
      {children}
    </ReCaptchaProvider>
  )
}