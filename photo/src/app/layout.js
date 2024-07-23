import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Nav from "@/Component/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Kennys Studios",
    template : "%s - Kennys Studios"
  },
  description: "Welcome to Kenny Studios photography  – Where Moments Come Alive! Discover the art of storytelling through our captivating photography . From Studio to  events, i am here to bring  your vision to life. Explore our portfolio and start creating unforgettable memories today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <GoogleAnalytics gaId="G-03THE101RW" />
      <body className={inter.className}>
        <Nav/>
        {children}
        <SpeedInsights/>
        <Analytics/>
        </body>
          
    </html>
        
  );
}
