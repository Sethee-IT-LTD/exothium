"use client";

import Image from "next/image";
import Connect from "./connect/connect";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-center w-full">
            <div className="px-16 py-12 w-full flex justify-between items-center max-w-[1560px]">
                <div>
                    <Link href={"/"}>
                        <Image src="/exothium_banner.png" width={250} height={250} alt="logo" />
                    </Link>
                </div>
                <div>
                    <Connect />
                </div>
            </div>
        </div>
    );
}