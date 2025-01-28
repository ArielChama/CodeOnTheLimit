import Image from "next/image";
import Publish from "./components/Publish";
import Menu from "./components/Menu";
import Post from "./components/Post";
import imageProfile from '@/app/images/image_profile.png'
import ElipsMenu from "./components/icons/ElipsMenu";

export default function Home() {
  return (
    <main className="mt-2">
      <div className="flex justify-between w-2/3 mx-auto">
        <div className="">
          <Menu />
        </div>

        <div className="w-3/6 border-l border-r border-line">
          <div className="w-full">
            <div className="border-line border-b pt-4 px-4 flex justify-around">
              <div className="border-b-2 border-primary">
                <h4>Para você</h4>
              </div>
              
              <div>
                <h4>Seguindo</h4>
              </div>
            </div>

            <Publish />
          </div>

          <div className="p-2 text-center text-primary border-line border-t border-b">
            <a href="" className="">Mostrar 342 posts</a>
          </div>

          <div className="p-4">
            <Post />
          </div>
        </div>

        <div className="w-1/3">
          <div className="mb-3">
            <input type="search" placeholder="Buscar" className="border-line border w-full rounded-3xl py-2 pl-3 bg-transparent" />
          </div>

          <div className="p-3 border rounded-lg border-line">
            <h3 className="text-lg font-semibold">Assine o premium</h3>
            <p>Assine para desbloquear novos recursos e, se elegível, receba uma parte da receita.</p>

            <button className="text-white text-sm rounded-3xl bg-primary px-3 py-2 mt-2 font-semibold">
              Inscrever-se
            </button>
          </div>

          <div className="border-line border mt-4 rounded-lg">
            <h3 className="text-lg font-semibold mt-3 ml-3">Quem seguir</h3>

            <div className="flex gap-2 justify-between px-3 py-4 hover:bg-focus hover:cursor-pointer">
              <div>
                <Image src={imageProfile} width="40" height="40" alt="" className="rounded-full" />
              </div>

              <div className="w-8/12">
                <p className="font-semibold text-sm">
                  UK in Angola
                </p>
                <span className="ml-2 text-sm">@SHGames</span>
              </div>

              <div>
                <button className="text-black text-sm bg-white rounded-3xl px-4 py-2 font-semibold">
                  Seguir
                </button>
              </div>
            </div>

            <div className="flex gap-2 justify-between px-3 py-4 hover:bg-focus hover:cursor-pointer">
              <div>
                <Image src={imageProfile} width="40" height="40" alt="" className="rounded-full" />
              </div>

              <div className="w-8/12">
                <p className="font-semibold text-sm">
                  UK in Angola
                </p>
                <span className="ml-2 text-sm">@SHGames</span>
              </div>

              <div>
                <button className="text-black text-sm bg-white rounded-3xl px-4 py-2 font-semibold">
                  Seguir
                </button>
              </div>
            </div>
          </div>

          <div className="border-line border mt-4 rounded-lg">
            <h3 className="text-lg font-semibold mt-3 ml-3">O que está acontecendo</h3>

            <div className="flex justify-between mt-2 p-3 hover:bg-focus hover:cursor-pointer">
              <div className="">
                <p className="text-xs mb-1 text-gray-400">Assunto do Momento em Portugal</p>
                <p className="text-sm font-semibold">
                  DeepSeek
                </p>
                <p className="text-xs mt-1 text-gray-400">1,04 mil posts</p>
              </div>

              <div>
                <ElipsMenu />
              </div>
            </div>

            <div className="flex justify-between mt-2 p-3 hover:bg-focus hover:cursor-pointer">
              <div className="">
                <p className="text-xs mb-1 text-gray-400">Assunto do Momento em Portugal</p>
                <p className="text-sm font-semibold">
                  DeepSeek
                </p>
                <p className="text-xs mt-1 text-gray-400">1,04 mil posts</p>
              </div>

              <div>
                <ElipsMenu />
              </div>
            </div>

            <div className="flex justify-between mt-2 p-3 hover:bg-focus hover:cursor-pointer">
              <a href="" className="text-primary text-sm">Mostrar mais</a>
            </div>
          </div>  
        </div>
      </div>
    </main>
  );
}
