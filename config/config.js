import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'

import { createAppKit } from "@reown/appkit"

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error('Project Id is not defined.')
}

export const networks = [solana, solanaTestnet, solanaDevnet]

export const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})
export const metadata = {
  name: "appkit-example",
  description: "AppKit Example - Solana",
  url: "https://exampleapp.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"]
}

export const modal = createAppKit({
  adapters: [solanaWeb3JsAdapter],
  projectId,
  networks: [solana, solanaTestnet, solanaDevnet],
  features: {
      analytics: true,
      email: true, 
      socials: ['google', 'x', 'github', 'discord', 'farcaster'],
      emailShowWallets: true
  },
  themeMode: 'light'
})