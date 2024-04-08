import Image, { StaticImageData } from "next/image";

export function Player({ image, name, power }: { image: string | StaticImageData, name: string, power: string }) {
    return (
        <div className="flex flex-col items-center justify-center w-fit">
            <Image src={image} width={250} height={250} alt="player 1" />
            <h4 className="text-lg text-white">{name}</h4>
            <h3 className="text-2xl text-[#ED5527]">{power}</h3>
        </div>
    )
}