'use client'

import React from 'react'
import { modal } from '@/config/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

// Setup queryClient
const queryClient = new QueryClient()

export default function AppKitProvider({ children, initialState }) {
  return (
    <WagmiProvider initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {/* Render the AppKit modal */}
        {modal.renderModal()}
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
