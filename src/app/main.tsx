import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import Image from 'next/image';
import Lucas from './assets/lucas.png';

export default function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">
          <button className="rounded-full bg-black/20 p-2">
            <ChevronLeft />
          </button>
          <button className="rounded-full bg-black/20 p-2">
            <ChevronRight />
          </button>
        </div>      

        <div className="flex flex-row items-center rounded-full gap-4 bg-zinc-950 py-1">
          {/* <img src="./assets/lucas.png" alt="Imagem do Lucas" /> */}
          <Image
            src={Lucas}
            alt="Image Lucas"
            className="w-7"          
          />
          <h3 className="font-semibold">Lucas</h3>
          <ChevronDown className="pr-1 mr-2"/>
        </div>
          
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-10 mt-6">
        <div className="bg-zinc-800 w-full p-10 rounded-md">oi</div>
        <div className="bg-zinc-800 w-full p-10 rounded-md">oi</div>
        <div className="bg-zinc-800 w-full p-10 rounded-md">oi</div>
      </div>
    </main>
  );
}
