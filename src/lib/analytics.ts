// Google Analytics 4 utilities

declare global {
  interface Window {
    gtag: (command: 'config' | 'event', targetId: string, config?: Record<string, unknown>) => void;
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_location: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters: Record<string, string | number | boolean> = {}
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track button clicks
export const trackButtonClick = (
  buttonName: string,
  parameters: Record<string, string | number | boolean> = {}
) => {
  trackEvent('button_click', {
    button_name: buttonName,
    ...parameters,
  });
};

// Track form submissions
export const trackFormSubmission = (
  formName: string,
  parameters: Record<string, string | number | boolean> = {}
) => {
  trackEvent('form_submit', {
    form_name: formName,
    ...parameters,
  });
};

// Track section views
export const trackSectionView = (
  sectionName: string,
  parameters: Record<string, string | number | boolean> = {}
) => {
  trackEvent('section_view', {
    section_name: sectionName,
    ...parameters,
  });
};

// Track file downloads
export const trackFileDownload = (
  fileName: string,
  fileType: string,
  parameters: Record<string, string | number | boolean> = {}
) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    ...parameters,
  });
};

// Track external link clicks
export const trackExternalLink = (
  linkUrl: string,
  linkText: string,
  parameters: Record<string, string | number | boolean> = {}
) => {
  trackEvent('external_link_click', {
    link_url: linkUrl,
    link_text: linkText,
    ...parameters,
  });
}; 