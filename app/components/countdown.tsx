"use client"

import { useState, useEffect } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function Countdown({ seconds }: { seconds: number }) {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
    const secondsLeft = (timeLeft % 60).toString().padStart(2, '0');

    useEffect(() => {
        if (timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    return (
        <div className="space-y-1 flex flex-col items-center">
            <div className="flex items-center space-x-1">
                <p className="text-white text-sm">TIME REMAINING</p>
                <QuestionMarkCircleIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center space-x-2.5 justify-center">
                <div className="flex flex-col items-center space-y-0.5">
                    <div className="px-3.5 py-2 bg-white rounded-xl">
                        <h3 className="text-xl text-black font-semibold">{hours}</h3>
                    </div>
                    <p className="text-xs text-white">HOURS</p>
                </div>
                <div className="flex flex-col items-center space-y-0.5">
                    <div className="px-3.5 py-2 bg-white rounded-xl">
                        <h3 className="text-xl text-black font-semibold">{minutes}</h3>
                    </div>
                    <p className="text-xs text-white">MINUTES</p>
                </div>
                <div className="flex flex-col items-center space-y-0.5">
                    <div className="px-3.5 py-2 bg-white rounded-xl">
                        <h3 className="text-xl text-black font-semibold">{secondsLeft}</h3>
                    </div>
                    <p className="text-xs text-white">SECONDS</p>
                </div>
            </div>
        </div>
    );
}