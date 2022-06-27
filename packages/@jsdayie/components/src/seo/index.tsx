import React from "react";
import Head from "next/head";
import Script from "next/script";

export interface SeoProps {
  mainColorHex: string;
  title: string;
  description: string;
  author: string;
  keywords: string[];
  url: string;
  facebookThumbnailUrl: string;
  twitterThumbnailUrl: string;
  twitterUserName: string;
  GA_MEASUREMENT_ID: string;
}

export const Seo: React.FC<SeoProps> = (props) => {
  const {
    title,
    mainColorHex,
    description,
    author,
    keywords,
    url,
    facebookThumbnailUrl,
    twitterUserName,
    twitterThumbnailUrl,
    GA_MEASUREMENT_ID,
  } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content={mainColorHex} />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={facebookThumbnailUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={twitterThumbnailUrl} />
        <meta name="twitter:site" content={twitterUserName} />
        <meta name="twitter:creator" content={twitterUserName} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
};
