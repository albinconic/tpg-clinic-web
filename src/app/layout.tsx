import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { metaDataHelper } from "@/constants/init";
import "@/styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPageId, getPathname } from "@/utils/helpers";
import MixpanelTracker from "@/components/analytics/MixpanelTracker";
import { siteConfig } from "@/constants/site";
import WebFontLoader from "@/components/utility/WebFontLoader";
import GTM from "@/components/analytics/GTM";
import FacebookPixel from "@/components/analytics/FacebookPixel";
import WebflowInit from "@/components/webflow/WebflowInit";

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
}

export const metadata: Metadata = {
	title: metaDataHelper.title,
	description: metaDataHelper.description,
	robots: "index, follow",
	openGraph: {
		title: metaDataHelper.title,
		description: metaDataHelper.description,
		url: `${siteConfig.baseUrl}/our-services`,
		siteName: metaDataHelper.title,
		type: metaDataHelper.type,
	}
};


export default async function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const pageId = await getPageId();
	const pathname = await getPathname();

  return (
	<html lang="en" data-wf-site="646fb007f9c7c087e53f00d8" data-wf-page={pageId}>
		<head>
			{/* Meta SEO */}
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={metaDataHelper.description} />
			<meta name="keywords" content="Physical Therapy, ACL Rehab, Post-Op, Sports Injury, Prehab" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={metaDataHelper.title} />
			<meta property="og:description" content={metaDataHelper.description} />
			<meta property="og:url" content="https://clinic.theprehabguys.com" />
			<meta property="og:site_name" content="Prehab Physical Therapy" />
			<meta property="og:image" content="/images/og-default.jpg" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={metaDataHelper.title} />
			<meta name="twitter:description" content={metaDataHelper.description} />
			<meta name="robots" content="index, follow" />

			{/* Fonts */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

			<Script
				src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
				strategy="afterInteractive"
			/>

			<WebFontLoader />

			{/* Favicon */}
			<link rel="shortcut icon" href="/images/favicon.jpg" type="image/x-icon" />
			<link rel="apple-touch-icon" href="/images/webclip.jpg" />

			{/* PageSense */}
			<Script
				src="https://cdn.pagesense.io/js/theprehabguys/3b9ec14a21c34def822fa9b316faf214.js"
				strategy="afterInteractive"
			/>


			{/* Google Tag Manager */}
			<GTM />

			{/* Facebook Pixel */}
			<FacebookPixel />

			{/* Mixpanel Tracker */}
			<MixpanelTracker />

			{/* Webflow CSS */}
			<link rel="stylesheet" href="/webflow-assets/css/normalize.css" />
			<link rel="stylesheet" href="/webflow-assets/css/webflow.css" />
			<link rel="stylesheet" href="/webflow-assets/css/prehabpt-clinic.webflow.css" />
			<link rel="stylesheet" href="/webflow-assets/css/custom-style.css" />
			<link rel="stylesheet" href="/webflow-assets/css/new-template.css" />
		</head>

		<body>
			<Header />

			{children}

			<Script
				src="/webflow-assets/js/jquery-3.7.1.min.js"
				strategy="beforeInteractive"
			/>
			<Script
				src="/webflow-assets/js/webflow.js"
				strategy="afterInteractive"
			/>
			{pathname === '/book-now' && (
				<Script
					src="/webflow-assets/js/dev-book-now.js"
					strategy="afterInteractive"
				/>
			)}
			<Script
				src="/webflow-assets/js/custom-script.js"
				strategy="afterInteractive"
			/>

			<Footer />
		</body>

    </html>
  );
}
