"use client"

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("config", "GA_MEASUREMENT_ID", {
      page_path: url,
      page_title: title,
    })
  }
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formName: string, formData?: any) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "form_submit", {
      event_category: "engagement",
      event_label: formName,
      form_data: formData,
      value: 1,
    })
  }
}

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "button_click", {
      event_category: "engagement",
      event_label: buttonName,
      button_location: location,
    })
  }
}

// Track blog post reads
export const trackBlogRead = (postTitle: string, postSlug: string, readTime: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "blog_read", {
      event_category: "content",
      event_label: postTitle,
      post_slug: postSlug,
      read_time: readTime,
    })
  }
}
