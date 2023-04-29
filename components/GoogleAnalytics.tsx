"use client"

import Script from "next/script"

export const GoogleAnalytics = ({GTM_ID}: {GTM_ID:string}) => {

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
      />
      <Script
        id="google-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GTM_ID}');
          `,
        }}
      />
    </>
  )
}

// https://gaudion.dev/blog/setup-google-analytics-with-gdpr-compliant-cookie-consent-in-nextjs13