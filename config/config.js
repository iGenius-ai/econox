import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Your Reown Cloud project ID
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// Create a metadata object
const metadata = {
  name: 'EXCoin',
  description: 'ExCoin Website',
  url: 'https://econox.vercel.app', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// Create wagmiConfig
const chains = [mainnet, sepolia]
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  auth: {
    socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook'],
  },
  storage: createStorage({
    storage: cookieStorage
  }),
})