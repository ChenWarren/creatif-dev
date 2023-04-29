"use client"

import Script from "next/script"

export const ReCAPTCHA = ({sitekey}: {sitekey: string}) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.google.com/recaptcha/api.js`}
      />
      <div className="g-recaptcha" data-sitekey={`${sitekey}`}></div>
    </>
  )
}