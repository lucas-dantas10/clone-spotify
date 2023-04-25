import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/20 p-2">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/20 p-2">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-zinc-800 w-full p-10 rounded-md">oi</div>
        <div className="bg-zinc-800 w-full p-10 rounded-md">oi</div>
        <div className="bg-zinc-800 w-full p-10 rounded-md">oi</div>
      </div>
    </main>
  );
}
