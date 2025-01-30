export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

if (!GA_TRACKING_ID) {
  console.warn('Google Analytics ID is not defined in environment variables')
}

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
}

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}