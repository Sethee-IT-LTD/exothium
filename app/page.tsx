import Header from "./components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/tabs";
import { Player } from "./components/Player";
import Image from "next/image";
import avatar_1 from "./assets/avatar-1.png";
import avatar_2 from "./assets/avatar-2.png";
import battle from "./assets/battle.png";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[url('./assets/spider-bg.png')] bg-no-repeat bg-cover bg-center bg-[#050C14]/95 bg-blend-darken">
      <Header />
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center justify-center mt-5 px-16 h-full w-full max-w-[1560px]">
          <Tabs defaultValue="arena" className="w-full flex flex-col items-center justify-center h-full">
            <TabsList className="bg-[#031C3A]">
              <TabsTrigger value="arena" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white px-12 text-lg">Account</TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-[#0A1017] data-[state=active]:text-white px-12 text-lg">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="arena" className="w-full h-full mt-10">
              <div className="w-full flex space-x-10 h-full">
                <div className="w-3/4 h-[450px] bg-black bg-[url('./assets/players-bg.png')] bg-no-repeat bg-cover bg-center border-y-4 border-[#031C3A] rounded-2xl
                flex flex-col items-center justify-center">
                  <div className="w-3/4 flex justify-between items-center -mt-6">
                    <Player image={avatar_1} name="GrowleR" power="110.6" />
                    <Image src={battle} width={175} height={175} alt="battle" />
                    <Player image={avatar_2} name="Mecurolia" power="50.3" />
                  </div>
                </div>
                <div className="w-1/4 h-96 bg-orange-500"></div>
              </div>
            </TabsContent>
            <TabsContent value="history">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
