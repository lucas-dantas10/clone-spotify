import {
  Home as HomeIcon,
  Search,
  Library,
  Plus,
  Heart,
  Radio,
  ArrowDown
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-4 font-bold">
            <a href="#" className="flex items-center gap-3">
              <HomeIcon />
              Home
            </a>
            <a href="#" className="flex items-center gap-3">
              <Search />
              Search
            </a>
            <a href="#" className="flex items-center gap-3">
              <Library />
              Your Library
            </a>
          </nav>

          <ul className="mt-7 space-y-4">
            <a href="" className="flex items-center gap-3 font-bold">
              <div className="bg-red-900 border-2 border-red-900 p-1">
                <Plus/>
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
          </ul>

          <ul className="mt-7 space-y-4">
            <a href="" className="flex items-center gap-2 font-bold">            
              FAV
            </a>
            <a href="" className="flex items-center gap-2 font-bold">
              Daily mix 1
            </a>

            <a href="" className="flex items-center gap-2 font-bold">
              Discover Weekly
            </a>

            <a href="" className="flex items-center gap-2 font-bold">
              Malayalam
            </a>

            <a href="" className="flex items-center gap-2 font-bold">
              Dance Eletronic/Music
            </a>
            
          </ul>

          <a href="" className="mt-7 flex items-center gap-3 font-bold">
              <div className="border-2 rounded-3xl">
                <ArrowDown />
              </div>
            Install App
          </a>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
