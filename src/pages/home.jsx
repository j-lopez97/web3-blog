import { logs } from "./log.jsx";
import LogPreview from "../components/LogPreview.jsx";

const latestLog = logs[0];

export default function Home() {
    return (

      <div className="flex justify-center min-h-screen bg-noFace-500 text-spiritGold-100">

        <main className="w-full">

            <div className="flex flex-col items-center h-3/4 p-5 border-b-2 bg-no-repeat bg-cover bg-[url('src/assets/hero.jpeg')] border-b-fog-500">
                <div className="items-start mt-10">
                    <h2 className="font-sans text-4xl text-fog-500 m-auto">Your source for digital sovereignty</h2>
                </div>
            </div>
            
            <div className="px-6 py-10 space-y-6">
                <LogPreview
                    title={latestLog.title}
                    snippet={latestLog.snippet}
                />
            </div>
            

        </main>

      </div>
    );
  }
  