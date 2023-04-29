type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer

export const GTM_ID = process.env.GOOGLE_TAG_ID || 'G-6XH4SQQ5PW'

export const pageview = (url: string) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}

// https://github.com/vercel/next.js/discussions/20784
// https://github.com/vercel/next.js/tree/canary/examples/with-google-tag-manager
// https://dev.to/valse/how-to-setup-google-tag-manager-in-a-next-13-app-router-website-248p