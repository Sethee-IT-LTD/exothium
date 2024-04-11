"use client";

import { useEffect, useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

import useSound from "use-sound";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false)

  const [play] = useSound("/music/audio_1.mp3");

  useEffect(() => {
    setMounted(true)
  }, [mounted]);

  play();

  return (
    <html lang="en">
      <body className={inter.className}>
        {mounted && children}
      </body>
    </html>
  )
}
