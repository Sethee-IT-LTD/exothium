"use client";

import { useEffect, useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className} onClick={() => {
        if (typeof Audio !== "undefined" && playing == false) {
          const audio = new Audio("/music/audio_1.mp3");
          audio.play();
          setPlaying(true);
        }
      }}>
        {mounted && children}
      </body>
    </html >
  )
}