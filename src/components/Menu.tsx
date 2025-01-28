import Image from 'next/image';
import Link from 'next/link';

import { CiMail, CiSearch } from 'react-icons/ci';
import { FaRegBookmark } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from 'react-icons/go';
import { GrNotification } from "react-icons/gr";
import { HiOutlineUser } from 'react-icons/hi';
import { IoEllipsisHorizontal, IoEllipsisHorizontalCircle, IoFlashOutline, IoPeopleOutline } from 'react-icons/io5';

import ImageProfile from './../assets/images/image_profile.png';

function Menu() {
  return (
    <div className="mb-4">
      <Link href='/' className='w-max hover:bg-focus p-3 rounded-full flex'>
        <Image src="/logo.png" alt="X logo" width={40} height={40} />
      </Link>

      <a href="#" className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1 font-bold">
        <GoHomeFill className="size-8" />
        <p className="ml-4 text-xl">Página inicial</p>
      </a>

      <a href="#" className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <CiSearch className="size-8" />
        <p className="ml-4 text-xl">Explorar</p>
      </a>

      <a href="#" className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <GrNotification className="size-8" />
        <p className="ml-4 text-xl">Notificações</p>
      </a>

      <a href="#" className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <CiMail className="size-8" />
        <p className="ml-4 text-xl">Mensagens</p>
      </a>

      <a href="#" className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <FaXTwitter className="size-8" />
        <p className="ml-4 text-xl">Grok</p>
      </a>

      <a href="#" className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <FaRegBookmark className="size-8" />
        <p className="ml-4 text-xl">Itens Salvos</p>
      </a>

      <a href="#" className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <IoPeopleOutline className="size-8" />
        <p className="ml-4 text-xl">Comunidades</p>
      </a>

      <a href="#" className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <FaXTwitter className="size-8" />
        <p className="ml-4 text-xl">Premium</p>
      </a>

      <a href="#" className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <IoFlashOutline className="size-8" />
        <p className="ml-4 text-xl">Empresas</p>
      </a>

      <a href="#" className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-1">
        <HiOutlineUser className="size-8" />
        <p className="ml-4 text-xl">Perfil</p>
      </a>

      <a href="#" className="hover:bg-focus px-4 py-2 rounded-3xl flex items-center mb-2">
        <IoEllipsisHorizontalCircle className="size-8" />
        <p className="ml-4 text-xl">Mais</p>
      </a>

      <button className="text-black bg-white py-3 w-full rounded-3xl font-semibold mb-1" type='button'>
        Postar
      </button>

      <div className="flex justify-between mt-2 items-center">
        <div  className="gap-4 flex justify-between mt-2">
          <Image src={ImageProfile} width="35" height="35" alt="" className="rounded-full" />

          <div>
            <p className="font-semibold text-xs">Ariel Chama</p>
            <p className="text-xs">@chama_ariel</p>
          </div>
        </div>

        <div className='hover:bg-focus p-3 rounded-3xl flex items-center cursor-pointer'>
          <IoEllipsisHorizontal />
        </div>
      </div>
    </div>
  )
}

export default Menu
