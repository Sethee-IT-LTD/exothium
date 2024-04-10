"use client"

import Image from "next/image";
import { cn } from "../lib/utils";
import { Badge } from "./badge";

export default function History() {

    const histories = [
        {
            id: 1,
            players: [
                {
                    id: 1,
                    name: "GrowleR",
                    chances: 21.00,
                    image: "/avatar-1.png",
                    power: 0.01,
                    status: "Lost",
                    date: "20th March 2024, 10:00am",
                },
                {
                    id: 2,
                    name: "Mecurolia",
                    chances: 21.00,
                    image: "/avatar-2.png",
                    power: 0.03,
                    status: "Won",
                    date: "20th March 2024, 10:00am",
                }
            ],
        },
        {
            id: 2,
            players: [
                {
                    id: 1,
                    name: "GrowleR",
                    chances: 79.00,
                    image: "/avatar-2.png",
                    power: 0.03,
                    status: "Won",
                    date: "20th March 2024, 10:00am",
                },
                {
                    id: 2,
                    name: "Mecurolia",
                    chances: 21.00,
                    image: "/avatar-1.png",
                    power: 0.01,
                    status: "Lost",
                    date: "20th March 2024, 10:00am",
                }
            ],
        },
        {
            id: 3,
            players: [
                {
                    id: 1,
                    name: "GrowleR",
                    chances: 21.00,
                    image: "/avatar-1.png",
                    power: 0.01,
                    status: "Lost",
                    date: "20th March 2024, 10:00am",
                },
                {
                    id: 2,
                    name: "Mecurolia",
                    chances: 21.00,
                    image: "/avatar-2.png",
                    power: 0.03,
                    status: "Won",
                    date: "20th March 2024, 10:00am",
                }
            ],
        },
    ]

    return (
        <div className="w-full flex justify-center mt-5">
            <div className="max-w-3xl w-full h-fit border-[3px] border-[#031C3A] rounded-lg">
                <div className="w-full h-full p-5 space-y-5">
                    <div className="flex items-center justify-center w-full space-x-1 bg-[#031C3A] py-2.5 rounded-md">
                        <Image src="/blade.png" width={20} height={20} alt="blade" />
                        <h3 className="text-xl text-[#CAD4E0] font-normal">My Fights</h3>
                    </div>
                    <div className="space-y-5">
                        {
                            histories.map(history => (
                                <div className="space-y-5" key={history.id}>
                                    <div className="from-transparent via-[#031C3A] to-transparent bg-gradient-to-r h-[3px]" />
                                    <div className="flex items-center justify-between space-x-5">
                                        <div className="flex-1 flex space-x-3.5">
                                            <div>
                                                <Image src={history.players[0].image} width={150} height={150} alt="avatar" />
                                            </div>
                                            <div className="w-full">
                                                <div className="flex justify-between items-center w-full">
                                                    <p className="text-xl text-white font-normal">{history.players[0].name}</p>
                                                    <p className={cn("text-xl font-medium", history.players[0].status == "Lost" ? "text-[#DB2626]" : "text-[#16A24A]")}>{history.players[0].power}</p>
                                                </div>
                                                <p className="text-[#93A2B7]">{history.players[0].chances}% chance of winning</p>
                                                <p className="text-[#ED5527]">{history.players[0].date}</p>
                                                <Badge className={cn("text-white p-2.5 rounded-md py-1.5 mt-1", history.players[0].status == "Lost" ?
                                                    "bg-[#B81C1C] hover:bg-[#B81C1C]" : "bg-[#16A24A] hover:bg-[#16A24A]")}>{history.players[0].status}</Badge>
                                            </div>
                                        </div>
                                        <div className="from-[#F15A24] via-[#F15A24]/90 to-[#9E005D] w-[3px] h-32 bg-gradient-to-br" />
                                        <div className="flex-1 flex space-x-3.5">
                                            <div>
                                                <Image src={history.players[1].image} width={150} height={150} alt="avatar" />
                                            </div>
                                            <div className="w-full">
                                                <div className="flex justify-between items-center w-full">
                                                    <p className="text-xl text-white font-normal">{history.players[1].name}</p>
                                                    <p className={cn("text-xl font-medium", history.players[1].status == "Lost" ? "text-[#DB2626]" : "text-[#16A24A]")}>{history.players[1].power}</p>
                                                </div>
                                                <p className="text-[#93A2B7]">{history.players[1].chances}% chance of winning</p>
                                                <p className="text-[#ED5527]">{history.players[1].date}</p>
                                                <Badge className={cn("text-white p-2.5 rounded-md py-1.5 mt-1", history.players[1].status == "Lost" ?
                                                    "bg-[#B81C1C] hover:bg-[#B81C1C]" : "bg-[#16A24A] hover:bg-[#16A24A]")}>{history.players[1].status}</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="from-transparent via-[#031C3A] to-transparent bg-gradient-to-r h-[3px]" />
                    </div>
                    <button className="bg-gradient-to-r from-[#F15A24] via-[#F15A24]/90 to-[#9E005D] px-20 py-3.5 rounded-lg text-white w-full"
                        onClick={() => window.location.replace("/play")}>Enter arena</button>
                </div>
            </div>
        </div>
    )
}