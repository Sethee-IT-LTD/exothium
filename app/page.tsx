import Header from "./components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/tabs";
import { Player } from "./components/player";
import Image from "next/image";
import avatar_1 from "./assets/avatar-1.png";
import avatar_2 from "./assets/avatar-2.png";
import battle from "./assets/battle.png";
import blade from "./assets/blade.png";
import trophy from "./assets/trophy.png";
import winner from "./assets/winner.png";
import starknetLogo from "./assets/strk.png"
import WinnerCard from "./components/winner-card";
import Countdown from "./components/countdown";
import { Table, TableHead, TableHeader, TableRow } from "./components/table";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { cn } from "./lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/dialog"

export default function Home() {

  const winners = [1, 2, 3, 4];

  const active_players = [
    {
      id: 1,
      icon: avatar_1,
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 2,
      icon: avatar_1,
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 3,
      icon: avatar_1,
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 4,
      icon: avatar_1,
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 5,
      icon: avatar_1,
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
    {
      id: 6,
      icon: avatar_1,
      username: "GrowleR",
      chances: 99.96,
      power: 110.6
    },
  ]

  return (
    <main className="w-full min-h-screen bg-[url('./assets/spider-bg.png')] bg-no-repeat bg-cover bg-center bg-[#050C14]/95 bg-blend-darken">
      <Header />
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center justify-center mt-5 px-16 h-full w-full max-w-[1560px] pb-8">
          <Tabs defaultValue="arena" className="w-full flex flex-col items-center justify-center h-full">
            <TabsList className="bg-[#031C3A]">
              <TabsTrigger value="arena" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white px-12 text-lg">Arena</TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white px-12 text-lg">History</TabsTrigger>
            </TabsList>
            <TabsContent value="arena" className="w-full h-full mt-10">
              <div className="w-full flex space-x-10 h-full">
                <div className="w-3/4 h-full space-y-10">
                  <div className="w-full h-[450px] bg-black bg-[url('./assets/players-bg.png')] bg-no-repeat bg-cover bg-center border-y-4 border-[#031C3A] rounded-2xl
                flex flex-col items-center justify-center">
                    <div className="w-[65%] flex justify-between items-center -mt-6 relative">
                      <div className="absolute -right-[150px] -top-14">
                        <Countdown seconds={7200} />
                      </div>
                      <Player image={avatar_1} name="GrowleR" power="110.6" />
                      <Image src={battle} width={175} height={175} alt="battle" />
                      <Player image={avatar_2} name="Mecurolia" power="50.3" />
                    </div>
                  </div>
                  <div className="w-full p-8 border-4 border-[#031C3A] rounded-xl bg-[#0E1824] flex justify-between items-center">
                    <div className="space-y-1.5">
                      <p className="text-lg text-[#D9DCDD]">Power</p>
                      <div className="w-80 flex items-center border-2 border-[#031C3A] p-2.5 rounded-md">
                        <input className="w-full border-0 outline-0 bg-transparent text-white mr-1.5" type="number" />
                        <div className="bg-transparent border-2 border-[#031C3A] rounded-md p-1.5 w-fit">
                          <Image src={starknetLogo} width={25} height={25} alt="strk" />
                        </div>
                      </div>
                    </div>
                    <div className="space-x-3.5 mt-10">
                      <button className="bg-white px-20 py-3.5 rounded-lg text-black">Flee</button>
                      <Dialog>
                        <DialogTrigger>
                          <button className="bg-gradient-to-r from-[#F15A24] via-[#F15A24]/90 to-[#9E005D] px-20 py-3.5 rounded-lg text-white">Fight</button>
                        </DialogTrigger>
                        <DialogContent className="flex flex-col items-center justify-center bg-[#0A1017]">
                          <DialogHeader className="flex flex-col items-center justify-center">
                            <DialogTitle className="text-3xl text-white">Awaiting Result</DialogTitle>
                            <DialogDescription>
                              The result will display in a moment
                            </DialogDescription>
                          </DialogHeader>
                          <Image src={battle} width={175} height={175} alt="battle" />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  {/* Table */}
                  <div className="w-full">
                    <div className="bg-[#031C3A] w-full px-5 py-2.5 rounded-t-xl flex space-x-0.5 items-center border-b-[#334155] border-b-2">
                      <h4 className="text-lg text-[#CAD4E0] font-normal">Active Players</h4>
                      <QuestionMarkCircleIcon className="w-5 h-5 text-[#CAD4E0]" />
                    </div>
                    <Table className="w-full px-5 border-r-2 border-transparent">
                      <TableHeader className="w-full">
                        <TableRow className="bg-[#031C3A] hover:bg-[#031C3A] border-b-[#334155] !border-b-2">
                          <TableHead className="text-lg text-[#CAD4E0] font-normal py-2.5">Gladiether</TableHead>
                          <TableHead className="text-lg text-[#CAD4E0] font-normal py-2.5">Username</TableHead>
                          <TableHead className="text-lg text-[#CAD4E0] font-normal py-2.5">Chances</TableHead>
                          <TableHead className="text-lg text-[#CAD4E0] font-normal py-2.5">Power</TableHead>
                        </TableRow>
                        {
                          active_players.map((player, i) => (
                            <TableRow className={cn(`bg-gradient-to-r !border-r-0 w-full`,
                              (i % 3) == 0 && `from-[#C1272D]/90 via-[#C1272D]/50 to-transparent border-l-3.5 border-l-[#C1272D]`,
                              (i % 3) == 1 && `from-[#006837]/90 via-[#006837]/50 to-transparent border-l-3.5 border-l-[#006837]`,
                              (i % 3) == 2 && `from-[#8A5CF5]/90 via-[#8A5CF5]/50 to-transparent border-l-3.5 border-l-[#8A5CF5]`,
                              i + 1 != active_players.length ? `border-b-[#334155] !border-b-2` : `!border-b-0`
                            )} key={player.id}>
                              <TableHead className="text-lg text-[#CAD4E0] font-normal py-3.5">
                                <Image src={avatar_1} width={65} height={65} alt="gladiether" />
                              </TableHead>
                              <TableHead className="text-lg text-[#CAD4E0] font-normal py-3.5">GrowleR</TableHead>
                              <TableHead className="text-lg font-normal py-3.5 text-[#F15A24]">99.96%</TableHead>
                              <TableHead className="text-lg text-[#CAD4E0] font-normal py-3.5">110.6</TableHead>
                            </TableRow>
                          ))
                        }
                      </TableHeader>
                    </Table>
                  </div>
                </div>
                <div className="w-[35%] h-fit border-4 border-[#031C3A] rounded-xl bg-[#0A1017] p-2.5">
                  <Tabs defaultValue="wins" className="w-full flex flex-col items-center justify-start h-full">
                    <TabsList className="bg-[#031C3A] w-full">
                      <TabsTrigger value="wins" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white w-full text-lg">
                        <div className="flex items-center space-x-1">
                          <Image src={blade} width={20} height={20} alt="blade" />
                          <h3>Live win</h3>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger value="top" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white w-full text-lg">
                        <div className="flex items-center space-x-1">
                          <Image src={trophy} width={20} height={20} alt="trophy" />
                          <h3>Top Players</h3>
                        </div>
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="wins" className="w-full h-full mt-2.5 space-y-2.5">
                      {
                        winners.map(i => <WinnerCard key={i} image={winner} name="Mecurolia" power="0.03" chance="71.00" />)
                      }
                    </TabsContent>
                    <TabsContent value="top">Change your password here.</TabsContent>
                  </Tabs>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="history">Change your password here.</TabsContent>
          </Tabs>
        </div >
      </div>
    </main >
  )
}
