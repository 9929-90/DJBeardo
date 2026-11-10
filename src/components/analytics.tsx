import Script from "next/script";
import { SITE } from "@/lib/site";

/**
 * Google Analytics 4 — loads only when NEXT_PUBLIC_GA_ID is configured.
 * Uses afterInteractive strategy to stay out of the critical path.
 */
export function Analytics() {
  const gaId = SITE.analytics.gaMeasurementId;
  if (!gaId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
