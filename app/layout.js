'use client'

import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navbar";
import { AppKitWrapper } from "@/context/AppKitWrapper";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${space.className} px-2.5`}>
        <AppKitWrapper>
          <Navigation />
          {children}
        </AppKitWrapper>
      </body>
    </html>
  );
}
