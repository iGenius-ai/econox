'use client'

import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navbar";
import { AppKitWrapper } from "@/context/AppKitWrapper";

const space = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${space.className} bg-gradient-to-br from-[#0A0A1F] via-[#111132] to-[#0A0A1F]`}>
        <AppKitWrapper>
          <Navigation />
          {children}
        </AppKitWrapper>
      </body>
    </html>
  );
}
