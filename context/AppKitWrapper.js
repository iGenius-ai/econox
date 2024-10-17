import { mainnet, sepolia, solana, solanaTestnet } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {  solanaDevnet } from "@reown/appkit/networks";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import React from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";

// General setup

// 1. Get projectId from https://cloud.reown.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID; // Enter projectId here

// Ensure your networks array includes the necessary chains
export const networks = [solanaDevnet, sepolia, solana, solanaTestnet, mainnet]; // Add other chains as needed

// 0. Setup queryClient
const queryClient = new QueryClient();

// 3. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  networks: networks, // Ensure this includes the correct networks
  projectId,
});

// Solana wallet setup

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

// 2. Create a metadata object - optional
const metadata = {
  name: 'Econox Coin',
  description: 'Econox Coin Platform',
  url: 'https://www.econoxcoin.com', // Replace with your actual domain
  icons: ['https://www.econoxcoin.com/favicon.ico'] // Replace with your actual icon URL
}

// 4. Create modal
createAppKit({
  adapters: [wagmiAdapter, solanaWeb3JsAdapter],
  networks: networks,
  metadata: metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    allWallets: true
  },
});

export function AppKitWrapper({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
