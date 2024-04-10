import Image from "next/image";
import { Badge } from "./badge";

export default function WinnerCard({ image, name, power, chance }: { image: string, name: string, power: string, chance: string }) {
    return (
        <div className="bg-[#031C3A] w-full p-2 rounded-xl flex items-center space-x-3.5">
            <Image src={image} width={100} height={100} alt="winner" className="rounded-xl" />
            <div className="w-full">
                <div className="w-full flex justify-between items-center text-lg text-white">
                    <h3>{name}</h3>
                    <h3 className="text-[#16A24A] font-semibold">Ξ{power}</h3>
                </div>
                <p className="text-[#93A2B7] text-base">{chance}% chance of winning</p>
            </div>
            <Badge className="text-lg rounded-md px-3.5 font-medium bg-[#16A24A] hover:bg-[#16A24A]">won</Badge>
        </div>
    )
}