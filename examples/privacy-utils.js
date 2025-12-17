/**
 * Privacy Utility Functions
 * Helper functions for managing privacy and data protection
 */

/**
 * Check if user has given consent for a specific cookie category
 * @param {string} category - Cookie category (performance, functionality, marketing)
 * @returns {boolean}
 */
export function hasConsent(category) {
  if (typeof window === 'undefined') return false;
  
  const consent = localStorage.getItem('cookie_consent');
  if (!consent) return false;
  
  const preferences = JSON.parse(consent);
  return preferences[category] === true;
}

/**
 * Get all cookie preferences
 * @returns {object}
 */
export function getCookiePreferences() {
  if (typeof window === 'undefined') {
    return {
      necessary: true,
      performance: false,
      functionality: false,
      marketing: false
    };
  }
  
  const consent = localStorage.getItem('cookie_consent');
  return consent ? JSON.parse(consent) : null;
}

/**
 * Update cookie preferences
 * @param {object} preferences - New preferences object
 */
export function updateCookiePreferences(preferences) {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('cookie_consent', JSON.stringify(preferences));
  localStorage.setItem('cookie_consent_date', new Date().toISOString());
  
  // Trigger consent update event
  window.dispatchEvent(new CustomEvent('cookieConsentUpdated', {
    detail: preferences
  }));
}

/**
 * Check if consent needs to be requested again (e.g., after 1 year)
 * @returns {boolean}
 */
export function needsConsentUpdate() {
  if (typeof window === 'undefined') return false;
  
  const consentDate = localStorage.getItem('cookie_consent_date');
  if (!consentDate) return true;
  
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  
  return new Date(consentDate) < oneYearAgo;
}

/**
 * Anonymize IP address for GDPR compliance
 * @param {string} ip - IP address
 * @returns {string}
 */
export function anonymizeIP(ip) {
  if (!ip) return '';
  
  const parts = ip.split('.');
  if (parts.length === 4) {
    // IPv4: Replace last octet with 0
    parts[3] = '0';
    return parts.join('.');
  }
  
  // IPv6: Keep only first 6 segments
  const ipv6Parts = ip.split(':');
  if (ipv6Parts.length > 6) {
    return ipv6Parts.slice(0, 6).join(':') + '::';
  }
  
  return ip;
}

/**
 * Generate privacy-compliant user identifier
 * @returns {string}
 */
export function generatePrivacyID() {
  if (typeof window === 'undefined') return '';
  
  // Check if user already has an ID
  let privacyID = localStorage.getItem('privacy_user_id');
  
  if (!privacyID) {
    // Generate new UUID v4
    privacyID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    
    localStorage.setItem('privacy_user_id', privacyID);
  }
  
  return privacyID;
}

/**
 * Export user data (GDPR right to data portability)
 * @param {object} userData - User data to export
 * @returns {string} - JSON string
 */
export function exportUserData(userData) {
  const exportData = {
    exportDate: new Date().toISOString(),
    userData: userData,
    cookiePreferences: getCookiePreferences(),
    privacyID: generatePrivacyID()
  };
  
  return JSON.stringify(exportData, null, 2);
}

/**
 * Download user data as JSON file
 * @param {object} userData - User data
 * @param {string} filename - Filename for download
 */
export function downloadUserData(userData, filename = 'my-data.json') {
  const data = exportUserData(userData);
  const blob = new Blob([data], { type: 'application/json' });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

/**
 * Clear all user data (GDPR right to erasure)
 */
export function clearAllUserData() {
  if (typeof window === 'undefined') return;
  
  // Clear localStorage
  const keysToKeep = ['cookie_consent']; // Keep consent preference
  const allKeys = Object.keys(localStorage);
  
  allKeys.forEach(key => {
    if (!keysToKeep.includes(key)) {
      localStorage.removeItem(key);
    }
  });
  
  // Clear sessionStorage
  sessionStorage.clear();
  
  // Clear cookies (except necessary ones)
  const cookies = document.cookie.split(';');
  cookies.forEach(cookie => {
    const name = cookie.split('=')[0].trim();
    // Don't delete necessary cookies
    if (!['session_id', 'csrf_token', 'cookie_consent'].includes(name)) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  });
}

/**
 * Track event with consent check
 * @param {string} eventName - Event name
 * @param {object} eventData - Event data
 */
export function trackEventWithConsent(eventName, eventData = {}) {
  // Only track if user has given consent
  if (!hasConsent('performance')) return;
  
  // Example: Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
  
  // Example: Mixpanel
  if (typeof window !== 'undefined' && window.mixpanel) {
    window.mixpanel.track(eventName, eventData);
  }
}

/**
 * Get privacy-compliant user agent
 * @returns {string}
 */
export function getPrivacyUserAgent() {
  if (typeof navigator === 'undefined') return '';
  
  // Return simplified user agent without specific version numbers
  const ua = navigator.userAgent;
  return ua.replace(/\/[\d.]+/g, ''); // Remove version numbers
}

/**
 * Check if Do Not Track is enabled
 * @returns {boolean}
 */
export function isDoNotTrackEnabled() {
  if (typeof navigator === 'undefined') return false;
  
  return navigator.doNotTrack === '1' || 
         window.doNotTrack === '1' ||
         navigator.msDoNotTrack === '1';
}

/**
 * Respect Do Not Track setting
 */
export function respectDoNotTrack() {
  if (isDoNotTrackEnabled()) {
    // Update preferences to disable all tracking
    updateCookiePreferences({
      necessary: true,
      performance: false,
      functionality: false,
      marketing: false
    });
  }
}
