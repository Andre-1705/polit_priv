// Example implementation for _app.js or layout
// File: pages/_app.js

import Head from 'next/head';
import CookieConsent from '../components/CookieConsent';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google Analytics - Consent Mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'wait_for_update': 500
              });
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Meta tags for privacy */}
        <meta name="privacy-policy" content="/privacy" />
        <meta name="terms-of-service" content="/terms" />
      </Head>

      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}

export default MyApp;
