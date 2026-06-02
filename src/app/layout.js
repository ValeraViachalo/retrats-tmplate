import localFont from "next/font/local";

import "@/styles/global.scss";

import { LocomotiveScrollProvider } from "@/lib/providers/LocomotiveScroll/LocomotiveScroll";
import { ScrollBar } from "@/utils/ScrollBar/ScrollBar";
import Header from "@/utils/Header/Header";
import Footer from "@/utils/Footer/Footer";
import { defaultMetadata } from "@/lib/helpers/defaultMetadata";

const neueHaasDisplay = localFont({
  src: [
    {
      path: "./fonts/NeueHaasDisplay/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasDisplay/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas-display",
  display: "swap",
});

export const metadata = defaultMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="html">
      <body className={`${neueHaasDisplay.variable} body`}>
        <LocomotiveScrollProvider>
          <ScrollBar />
          <Header />
          {children}
          <Footer />
        </LocomotiveScrollProvider>
      </body>
    </html>
  );
}
