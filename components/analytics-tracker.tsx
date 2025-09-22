"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: pathname,
      })
    }
  }, [pathname])

  return null
}

// Analytics utility functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters)
  }
}

export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "GA_MEASUREMENT_ID", {
      page_path: url,
      page_title: title,
    })
  }
}

export const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
  trackEvent("form_submit", {
    event_category: "engagement",
    event_label: formName,
    form_name: formName,
    ...formData,
  })
}

export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent("button_click", {
    event_category: "engagement",
    event_label: buttonName,
    button_name: buttonName,
    button_location: location,
  })
}

export const trackBlogRead = (articleTitle: string, readTime?: number) => {
  trackEvent("blog_read", {
    event_category: "content",
    event_label: articleTitle,
    article_title: articleTitle,
    read_time: readTime,
  })
}
