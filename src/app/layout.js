import localFont from "next/font/local";
import "./globals.css";
import Leniscomp from "./components/Lenis";
import Mouse from "./components/Mouse";


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

export const metadata = {
  title: "DESIGN ON DEMAND",
  description: "Digital services provider",
  icons: "/D.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={novaSemiBold.className}>
        <Leniscomp />
        <Mouse />
        {children}

      </body>
    </html>
  );
}
