import {
  Home as HomeIcon,
  Search,
  Library,
  Plus,
  Heart,
  Radio,
  ArrowDown,
} from "lucide-react";

export default function Aside() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <nav className="space-y-5 font-bold mt-10">
        <a href="#" className="flex text-sm items-center gap-3">
          <HomeIcon />
          Home
        </a>
        <a href="#" className="flex text-sm items-center gap-3">
          <Search />
          Search
        </a>
        <a href="#" className="flex text-sm items-center gap-3">
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-10 space-y-5">
        <a href="" className="flex items-center gap-3 font-bold">
          <div className="bg-red-900 border-2 border-red-900 p-1">
            <Plus />
          </div>
          Create Playlist
        </a>
        <a href="" className="flex items-center gap-3 font-bold">
          <div className="bg-indigo-700 border-2 border-indigo-700 p-1">
            <Heart />
          </div>
          Liked Songs
        </a>

        <a href="" className="flex items-center gap-3 font-bold">
          <div className="bg-green-900 border-2 border-green-900 p-1">
            <Radio />
          </div>
          Your Episodes
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-700 space-y-5">
        <a href="" className="flex text-sm text-zinc-400 hover:text-zinc-100 font-bold items-center gap-2">
          FAV
        </a>
        <a href="" className="flex text-sm text-zinc-400 hover:text-zinc-100 font-bold items-center gap-2">
          Daily mix 1
        </a>

        <a href="" className="flex text-sm text-zinc-400 hover:text-zinc-100 font-bold items-center gap-2">
          Discover Weekly
        </a>

        <a href="" className="flex text-sm text-zinc-400 hover:text-zinc-100 font-bold items-center gap-2">
          Malayalam
        </a>

        <a href="" className="flex text-sm text-zinc-400 hover:text-zinc-100 font-bold items-center gap-2">
          Dance Eletronic/Music
        </a>
      </nav>

      <a href="" className="mt-7 flex items-center gap-3 font-bold">
        <div className="border-2 rounded-3xl">
          <ArrowDown />
        </div>
        Install App
      </a>
    </aside>
  );
}
