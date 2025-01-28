import Image from "next/image";
import { CiSearch, CiMail } from "react-icons/ci";
import { GoBell, GoHomeFill } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi";
import { IoEllipsisHorizontal, IoFlashOutline, IoPeopleOutline } from "react-icons/io5";

import { Menu, Post, Publish } from "./../components";
import ImageProfile from './../assets/images/image_profile.png';

function Home() {
  return (
    <main className="mt-2">
      <div className="flex flex-col lg:flex-row mx-auto w-full max-w-7xl">
        
        <aside className="hidden lg:flex w-1/4 px-4">
          <Menu />
        </aside>

    
        <section className="w-full lg:w-1/2 border-l border-r border-line">
          <div className="border-b border-line flex justify-around">
            <div className="w-1/2 text-center hover:bg-line cursor-pointer py-2">
              <h4 className="font-semibold border-b-4 pb-2 w-1/3 border-primary">Para você</h4>
            </div>
            <div className="w-1/2 text-center hover:bg-line cursor-pointer py-2">
              <h4>Seguindo</h4>
            </div>
          </div>

          <Publish />

          <div className="p-2 text-center text-primary border-line border-t border-b">
            <a href="#" className="">Mostrar 342 posts</a>
          </div>

          <div className="p-4">
            <Post />
          </div>
        </section>

        <aside className="hidden lg:block w-1/4 px-4">
          
          <div className="mb-3 flex">
            <div className="border-l border-t border-b rounded-l-3xl p-2 border-line">
              <CiSearch className="size-5" />
            </div>
            <input 
              type="search" 
              placeholder="Buscar" 
              className="border-line border-r border-t border-b w-full rounded-r-3xl py-2 pl-3 bg-transparent"
            />
          </div>

    
          <div className="p-3 border rounded-2xl border-line">
            <h3 className="text-lg font-semibold">Assine o premium</h3>
            <p>Assine para desbloquear novos recursos.</p>
            <button className="text-white text-sm rounded-3xl bg-primary px-3 py-2 mt-2 font-semibold">
              Inscrever-se
            </button>
          </div>

          <div className="border-line border mt-4 rounded-2xl">
            <h3 className="text-lg font-semibold mt-3 ml-3">Quem seguir</h3>

            {[1, 2].map((_, i) => (
              <div key={i} className="flex gap-2 justify-between px-3 py-4 hover:bg-focus cursor-pointer">
                <Image src={ImageProfile} width="40" height="40" alt="" className="rounded-full" />
                <div className="w-8/12">
                  <p className="font-semibold text-sm">Mauro Romão {i + 1}</p>
                  <span className="ml-2 text-sm">@user{i + 1}</span>
                </div>
                <button className="text-black text-sm bg-white rounded-3xl px-4 py-2 font-semibold">
                  Seguir
                </button>
              </div>
            ))}

            <div className="p-3 hover:bg-focus cursor-pointer rounded-b-2xl">
              <a href="#" className="text-primary text-sm font-medium">Mostrar mais</a>
            </div>
          </div>
        </aside>
      </div>

      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-line flex justify-around py-2">
        <GoHomeFill className="size-6" />
        <CiSearch className="size-6" />
        <IoFlashOutline className="size-6" />
        <GoBell className="size-6" />
        <HiOutlineUser className="size-6" />
      </nav>
    </main>
  );
}

export default Home;
