"use client";

import Image from "next/image";
import Connect from "./connect/connect";
import Link from "next/link";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState, useRef } from "react";

export default function Header() {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(new Audio("/music/audio_1.mp3"));
    useEffect(() => {
        audioRef.current.loop = true;
    }, []);

    return (
        <div className="flex justify-center w-full">
            <div className="px-16 py-12 w-full flex justify-between items-center max-w-[1560px]">
                <div>
                    <Link href={"/"}>
                        <Image src="/exothium_banner.png" width={250} height={250} alt="logo" />
                    </Link>
                </div>
                <div className="flex items-center space-x-2.5">
                    {
                        playing ? <SpeakerWaveIcon className="w-10 h-10 text-white" onClick={() => {
                            audioRef.current.pause();
                            setPlaying(false);
                        }} /> : <SpeakerXMarkIcon className="w-10 h-10 text-white" onClick={() => {
                            audioRef.current.play().catch(error => console.error("Error playing the audio", error)); // Handle promise rejection
                            setPlaying(true);
                        }} />
                    }
                    <Connect />
                </div>
            </div>
        </div>
    );
}