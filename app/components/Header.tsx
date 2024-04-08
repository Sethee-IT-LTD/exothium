import Image from "next/image";
import logo from "../assets/exothium_banner.png";
import Connect from "./connect/Connect";

export default function Header() {
    return (
        <div className="flex justify-center w-full">
            <div className="px-16 py-12 w-full flex justify-between items-center max-w-[1560px]">
                <div>
                    <Image src={logo} width={250} height={250} alt="logo" />
                </div>
                <div>
                    <Connect />
                </div>
            </div>
        </div>
    )
}