import localFont from "next/font/local";
import "./globals.css";
import Leniscomp from "./components/Lenis";
import Mouse from "./components/Mouse";
import { Analytics } from '@vercel/analytics/next';


export const metadata = {
  title: {
    default: "Design on Demand",
    template: "%s | Design on Demand",
  },
  description: "Full-service digital agency specializing in web development, design, branding, illustration & video editing. Transform your brand with our creative solutions.",
  keywords: [
    "digital agency",
    "web development",
    "web design",
    "branding agency",
    "illustration services",
    "video editing",
    "digital marketing",
    "UI/UX design",
    "creative agency",
    "brand strategy"
  ],
  openGraph: {
    title: "Design on Demand",
    description: "Transform your brand with our expert web development, design, branding, illustration & video editing services.",
    type: "website",
    locale: "en_US",
    url: "https://www.designondemand.solutions/",
    siteName: "Design on Demand",
    
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://www.designondemand.solutions/"
  }
};

const novaSemiBold = localFont({
  src: [
    {
      path: "./fonts/Thunder-BoldLC.ttf",
      weight: "700",
    },
    {
      path: "./fonts/Thunder-SemiBoldLC.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Thunder-LC.ttf",
      weight: "300",
    },
  ],
  variable: "--font-nova",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={novaSemiBold.className}>
        <Leniscomp />
        <Mouse />
        {children}
        <Analytics/>
      </body>
    </html>
  );
}