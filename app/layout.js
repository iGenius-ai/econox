import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cookieToInitialState } from 'wagmi'
import { headers } from "next/headers";
import { config } from "@/config/config";
import Navigation from "@/components/Navbar";
import Web3ModalProvider from "@/context/WagmiContext";

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Econox Coin - Home",
  description: "Home website of the Econox platform",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))

  return (
    <html lang="en">
      <body className={`${space.className} px-2.5`}>
        <Web3ModalProvider initialState={initialState}>
          <Navigation />
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}
