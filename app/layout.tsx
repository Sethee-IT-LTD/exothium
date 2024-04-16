"use client";

import { useEffect, useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import StarknetProvider from '../provider/starknet-provider';
import { Provider as JotaiProvider } from "jotai";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <StarknetProvider>
          <JotaiProvider>
            {mounted && children}
          </JotaiProvider>
        </StarknetProvider>
      </body>
    </html >
  )
}