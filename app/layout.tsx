"use client";

import { useEffect, useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false)

  const audio = new Audio("/music/audio_1.mp3");

  audio.addEventListener('ended', () => {
    audio.play();
  });

  useEffect(() => {
    setMounted(true)
  }, [mounted]);

  return (
    <html lang="en">
      <body className={inter.className} onClick={() => audio.play()}>
        {mounted && children}
      </body>
    </html >
  )
}
