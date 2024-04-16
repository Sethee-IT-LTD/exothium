import Header from "../../components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/tabs";
import { Player } from "../../components/player";
import Image from "next/image";
import WinnerCard from "../../components/winner-card";
import Countdown from "../../components/countdown";
import { Table, TableHead, TableHeader, TableRow } from "../../components/table";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { cn } from "../../lib/utils";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/dialog"
import History from "../../components/history";

export default function Play() {

    const winners = [1, 2, 3, 4];

    const active_players = [
        {
            id: 1,
            icon: "/avatar-1.png",
            username: "GrowleR",
            chances: 99.96,
            power: 110.6
        },
        {
            id: 2,
            icon: "/avatar-1.png",
            username: "GrowleR",
            chances: 99.96,
            power: 110.6
        },
        {
            id: 3,
            icon: "/avatar-1.png",
            username: "GrowleR",
            chances: 99.96,
            power: 110.6
        },
        {
            id: 4,
            icon: "/avatar-1.png",
            username: "GrowleR",
            chances: 99.96,
            power: 110.6
        },
        {
            id: 5,
            icon: "/avatar-1.png",
            username: "GrowleR",
            chances: 99.96,
            power: 110.6
        },
        {
            id: 6,
            icon: "/avatar-1.png",
            username: "GrowleR",
            chances: 99.96,
            power: 110.6
        }
    ]

    return (
        <main className="w-full min-h-screen bg-[url('/spider-bg.png')] bg-no-repeat bg-cover bg-center bg-[#050C14]/95 bg-blend-darken">
            <Header />
            <div className="flex justify-center w-full">
                <div className="flex flex-col items-center justify-center mt-5 px-4 sm:px-14 2xl:px-16 h-full w-full max-w-[1560px] pb-8">
                    <Tabs defaultValue="arena" className="w-full flex flex-col items-center justify-center h-full">
                        <TabsList className="bg-[#031C3A]">
                            <TabsTrigger value="arena" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white px-12 text-lg">Arena</TabsTrigger>
                            <TabsTrigger value="history" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white px-12 text-lg">History</TabsTrigger>
                        </TabsList>
                        <TabsContent value="arena" className="w-full h-full mt-10">
                            <div className="w-full flex flex-col xl:flex-row xl:space-x-5 2xl:space-x-10 h-full space-y-10 xl:space-y-0">
                                <div className="xl:w-3/4 h-full space-y-10">
                                    <div className="w-full h-[350px] sm:h-[375px] md:h-[450px] lg:h-[450px] bg-black bg-[url('/players-bg.png')] bg-no-repeat bg-cover bg-center 
                                        border-x-4 border-y-2 lg:border-x-0 lg:border-y-4 xl:border-y-0 xl:border-x-4 2xl:border-y-4 2xl:border-x-0 border-[#031C3A] 
                                        rounded-2xl flex flex-col items-center justify-center">
                                        <div className="w-[90%] lg:w-[75%] 2xl:w-[65%] -mt-6 sm:-mt-12 md:-mt-16 lg:-mt-14 relative">
                                            <div className="xl:absolute xl:-right-[80px] 2xl:-right-[150px] xl:-top-14 mt-16">
                                                <Countdown seconds={7200} />
                                            </div>
                                            <div className="flex justify-between items-center space-x-0.5 -mt-2 xl:mt-20">
                                                <Player image="/avatar-1.png" name="GrowleR" power="110.6" />
                                                <div className="relative mt-[250px] xl:mt-0">
                                                    <Image src="/blade-1.png" width={175} height={175} alt="battle" className="animate-blade-1-cut 
                                                absolute bottom-[82px] sm:bottom-10 md:bottom-[10px] xl:bottom-1.5 lg:-bottom-0.5 xl:relative 2xl:bottom-0" />
                                                    <Image src="/blade-2.png" width={175} height={175} alt="battle" className="-mt-[175px] animate-blade-2-cut" />
                                                </div>
                                                <Player image="/avatar-2.png" name="Mecurolia" power="50.3" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full p-4 md:p-8 border-4 border-[#031C3A] rounded-xl bg-[#0E1824] flex flex-col md:flex-row 
                                    md:justify-between md:items-center space-y-3.5 md:space-y-0 md:space-x-3.5 h-full relative">
                                        <div className="space-y-1.5 w-full">
                                            <p className="text-lg text-[#D9DCDD]">Power</p>
                                            <div className="w-full flex items-center justify-between space-x-3.5">
                                                <div className="w-full lg:w-80 flex items-center border-2 border-[#031C3A] p-2.5 rounded-md">
                                                    <input className="w-full border-0 outline-0 bg-transparent text-white mr-1.5" type="number" min={0} />
                                                    <div className="bg-transparent border-2 border-[#031C3A] rounded-md p-1.5 w-fit">
                                                        <Image src="/strk.png" width={25} height={25} alt="strk" />
                                                    </div>
                                                </div>
                                                <div className="space-y-3.5 md:space-y-0 md:space-x-3.5 w-full md:w-fit md:flex md:flex-row md:items-center hidden 
                                                lg:flex lg:flex-row lg:justify-between">
                                                    <button className="bg-white px-20 py-3.5 rounded-lg text-black w-full md:w-fit">Flee</button>
                                                    <Dialog className="w-fit md:w-full">
                                                        <DialogTrigger className="w-fit md:w-full">
                                                            <button className="bg-gradient-to-r from-[#F15A24] via-[#F15A24]/90 to-[#9E005D] 
                                                    px-20 py-3.5 w-full md:w-fit rounded-lg text-white">Fight</button>
                                                        </DialogTrigger>
                                                        <DialogContent className="flex flex-col items-center justify-center bg-[#0A1017]">
                                                            <DialogHeader className="flex flex-col items-center justify-center">
                                                                <DialogTitle className="text-3xl text-white">Awaiting Result</DialogTitle>
                                                                <DialogDescription>
                                                                    The result will display in a moment
                                                                </DialogDescription>
                                                            </DialogHeader>
                                                            <div className="relative">
                                                                <Image src="/blade-1.png" width={175} height={175} alt="battle" className="animate-blade-1-cut" />
                                                                <Image src="/blade-2.png" width={175} height={175} alt="battle" className="-mt-[195px] animate-blade-2-cut" />
                                                            </div>
                                                        </DialogContent>
                                                    </Dialog>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3.5 md:space-y-0 md:space-x-3.5 w-full md:w-fit flex flex-col lg:flex-row lg:items-center md:hidden">
                                            <button className="bg-white px-20 py-3.5 rounded-lg text-black w-full lg:w-fit">Flee</button>
                                            <Dialog className="w-full lg:w-fit">
                                                <DialogTrigger className="w-full lg:w-fit">
                                                    <button className="bg-gradient-to-r from-[#F15A24] via-[#F15A24]/90 to-[#9E005D] 
                                                    px-20 py-3.5 w-full lg:w-fit rounded-lg text-white">Fight</button>
                                                </DialogTrigger>
                                                <DialogContent className="flex flex-col items-center justify-center bg-[#0A1017]">
                                                    <DialogHeader className="flex flex-col items-center justify-center">
                                                        <DialogTitle className="text-3xl text-white">Awaiting Result</DialogTitle>
                                                        <DialogDescription>
                                                            The result will display in a moment
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="relative">
                                                        <Image src="/blade-1.png" width={175} height={175} alt="battle" className="animate-blade-1-cut" />
                                                        <Image src="/blade-2.png" width={175} height={175} alt="battle" className="-mt-[195px] animate-blade-2-cut" />
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </div>
                                    {/* Table */}
                                    <div className="w-full">
                                        <div className="bg-[#031C3A] w-full px-5 py-2.5 rounded-t-xl flex space-x-0.5 items-center border-[#334155] border-[3px]">
                                            <h4 className="text-lg text-[#CAD4E0] font-normal">Active Players</h4>
                                            <QuestionMarkCircleIcon className="w-5 h-5 text-[#CAD4E0]" />
                                        </div>
                                        <Table className="w-full px-5 border-r-2">
                                            <TableHeader className="w-full !border-[#334155]">
                                                <TableRow className="bg-transparent border-[#334155] !border-b-[3px] !border-x-[3px]">
                                                    <TableHead className="text-lg text-[#CAD4E0] font-normal py-2.5">Gladiether</TableHead>
                                                    <TableHead className="text-lg text-[#CAD4E0] font-normal py-2.5">
                                                        <p className="hidden md:block">Username</p>
                                                    </TableHead>
                                                    <TableHead className="text-lg text-[#CAD4E0] font-normal py-2.5">
                                                        <p className="hidden md:block">Chances</p>
                                                    </TableHead>
                                                    <TableHead className="text-lg text-[#CAD4E0] font-normal py-2.5">Power</TableHead>
                                                </TableRow>
                                                {
                                                    active_players.map((player, i) => (
                                                        <TableRow className={cn(`bg-gradient-to-r !border-r-0 w-full !border-x-[3px] border-x-[#334155] border-b-[#334155] !border-b-[3px]`)} key={player.id}>
                                                            <TableHead className="h-[75px]">
                                                                <Image src={player.icon} width={65} height={65} alt="gladiether" />
                                                            </TableHead>
                                                            <TableHead className="text-lg text-[#CAD4E0] font-normal py-3.5"><p className="hidden md:block">{player.username}</p></TableHead>
                                                            <TableHead className="text-lg font-normal py-3.5 text-[#F15A24]"><p className="hidden md:block">{player.chances}%</p></TableHead>
                                                            <TableHead className="text-lg text-[#CAD4E0] font-normal py-3.5">{player.power}</TableHead>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableHeader>
                                        </Table>
                                    </div>
                                </div>
                                <div className="xl:w-[35%] h-fit border-4 border-[#031C3A] rounded-xl bg-[#0A1017] p-2.5">
                                    <Tabs defaultValue="wins" className="w-full flex flex-col items-center justify-start h-full">
                                        <TabsList className="bg-[#031C3A] w-full">
                                            <TabsTrigger value="wins" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white w-full text-lg">
                                                <div className="flex items-center space-x-1">
                                                    <Image src="/blade.png" width={20} height={20} alt="blade" />
                                                    <h3>Live win</h3>
                                                </div>
                                            </TabsTrigger>
                                            <TabsTrigger value="top" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white w-full text-lg">
                                                <div className="flex items-center space-x-1">
                                                    <Image src="/trophy.png" width={20} height={20} alt="trophy" />
                                                    <h3>Top Players</h3>
                                                </div>
                                            </TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="wins" className="w-full h-full mt-2.5 space-y-2.5">
                                            {
                                                winners.map(i => <WinnerCard key={i} image="/winner.png" name="Mecurolia" power="0.03" chance="71.00" />)
                                            }
                                        </TabsContent>
                                        <TabsContent value="top">Change your password here.</TabsContent>
                                    </Tabs>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="history">
                            <History />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </main>
    )
}
