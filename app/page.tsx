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
import WinnerCard from "./components/winner-card";
import Countdown from "./components/countdown";

export default function Home() {

  const winners = [1, 2, 3, 4];

  return (
    <main className="w-full min-h-screen bg-[url('./assets/spider-bg.png')] bg-no-repeat bg-cover bg-center bg-[#050C14]/95 bg-blend-darken">
      <Header />
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center justify-center mt-5 px-16 h-full w-full max-w-[1560px]">
          <Tabs defaultValue="arena" className="w-full flex flex-col items-center justify-center h-full">
            <TabsList className="bg-[#031C3A]">
              <TabsTrigger value="arena" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white px-12 text-lg">Arena</TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white px-12 text-lg">History</TabsTrigger>
            </TabsList>
            <TabsContent value="arena" className="w-full h-full mt-10">
              <div className="w-full flex space-x-10 h-full">
                <div className="w-3/4 h-[450px] bg-black bg-[url('./assets/players-bg.png')] bg-no-repeat bg-cover bg-center border-y-4 border-[#031C3A] rounded-2xl
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
        </div>
      </div>
    </main>
  )
}
