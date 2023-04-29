"use client"

import { GTM_ID, pageview } from "@/lib"
import Script from "next/script"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"


export const GoogleAnalytics = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if(pathname) {
      pageview(pathname)
    }
  }, [pathname, searchParams])

  return (
    <>
      <noscript>
        <iframe 
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
          height={0}
          width={0}
          style={{display: 'none', visibility: 'hidden'}}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-6XH4SQQ5PW"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-6XH4SQQ5PW');
      </script> */}
    </>
  )
}
