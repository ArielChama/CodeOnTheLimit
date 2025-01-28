import Image from 'next/image'

import { CiMail, CiSearch } from 'react-icons/ci'
import { GoBell, GoHomeFill } from 'react-icons/go'
import { HiOutlineUser } from 'react-icons/hi'
import { IoEllipsisHorizontal, IoEllipsisHorizontalCircle, IoFlashOutline, IoPeopleOutline } from 'react-icons/io5'

import ImageProfile from './../assets/images/image_profile.png'

const Menu = () => {
  return (
    <div className="mb-4">
      <div className="pb-4">
        <h2>LOGO</h2>
      </div>

      <div className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1 font-bold">
        <GoHomeFill className="size-8" />
        <a href="" className="ml-4 text-xl">Página inicial</a>
      </div>

      <div className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <CiSearch className="size-8" />
        <a href="" className="ml-4 text-xl">Explorar</a>
      </div>

      <div className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <GoBell className="size-8" />
        <a href="" className="ml-4 text-xl">Notificações</a>
      </div>

      <div className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <CiMail className="size-8" />
        <a href="" className="ml-4 text-xl">Mensagens</a>
      </div>

      <div className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <IoEllipsisHorizontalCircle className="size-8" />
        <a href="" className="ml-4 text-xl">Grok</a>
      </div>

      <div className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <IoPeopleOutline className="size-8" />
        <a href="" className="ml-4 text-xl">Comunidades</a>
      </div>

      <div className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <IoEllipsisHorizontalCircle className="size-8" />
        <a href="" className="ml-4 text-xl">Premium</a>
      </div>

      <div className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <IoFlashOutline className="size-8" />
        <a href="" className="ml-4 text-xl">Empresas</a>
      </div>

      <div className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <HiOutlineUser className="size-8" />
        <a href="" className="ml-4 text-xl">Perfil</a>
      </div>

      <div className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <IoEllipsisHorizontalCircle className="size-8" />
        <a href="" className="ml-4 text-xl">Mais</a>
      </div>

      <button className="text-black bg-white py-3 w-full rounded-3xl font-semibold mb-1">
        Postar
      </button>

      <div className="flex justify-between mt-2">
        <div>
          <Image src={ImageProfile} width="30" height="30" alt="" className="rounded-full" />
        </div>

        <div>
          <p className="font-semibold text-xs">Ariel Chama</p>
          <p className="text-xs">@chama_ariel</p>
        </div>

        <div>
          <IoEllipsisHorizontal />
        </div>
      </div>
    </div>
  )
}

export default Menu
