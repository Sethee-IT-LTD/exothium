"use client"

import { useEffect, useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [mounted])
  return (
    <html lang="en">
      <body className={inter.className}>{mounted && children}</body>
    </html>
  )
}
