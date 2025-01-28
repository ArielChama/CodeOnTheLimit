import React from 'react'
import imageProfile from '@/app/images/image_profile.png'
import Image from 'next/image'
import Home from './icons/Home'
import Search from './icons/Search'
import Bel from './icons/Bel'
import Message from './icons/Message'
import Save from './icons/Save'
import Work from './icons/Work'
import Users from './icons/Users'
import ElipseMenuCircle from './icons/ElipseMenuCircle'
import XMark from './icons/XMark'
import Flash from './icons/Flash'
import User from './icons/User'
import ElipsMenu from './icons/ElipsMenu'

const Menu = () => {
  return (
    <div>
      <div className="hover:bg-focus px-3 py-2 rounded-3xl flex mb-2">
        <Home />
        <a href="" className="ml-2">Página inicial</a>
      </div>
      
      <div className="hover:bg-focus px-3 py-2 rounded-3xl flex mb-2">
        <Search />
        <a href="" className="ml-2">Explorar</a>
      </div>

      <div className="hover:bg-focus px-3 py-2 rounded-3xl flex mb-2">
        <Bel />
        <a href="" className="ml-2">Notificações</a>
      </div>

      <div className="hover:bg-focus px-3 py-2 rounded-3xl flex mb-2">
        <Message />
        <a href="" className="ml-2">Mensagens</a>
      </div>

      <div className="hover:bg-focus px-3 py-2 rounded-3xl flex mb-2">
        <a href="" className="ml-2">Grok</a>
      </div>

      <div className="hover:bg-focus px-3 py-2 rounded-3xl flex mb-2">
        <Save />
        <a href="" className="ml-2">Itens salvos</a>
      </div>

      <div className="hover:bg-focus px-3 py-2 rounded-3xl flex mb-2">
        <Work />
        <a href="" className="ml-2">Empregos</a>
      </div>

      <div className="hover:bg-focus px-3 py-2 rounded-3xl flex mb-2">
        <Users />
        <a href="" className="ml-2">Comunidades</a>
      </div>

      <div className="hover:bg-focus px-3 py-2 rounded-3xl flex mb-2">
        <XMark />
        <a href="" className="ml-2">Premium</a>
      </div>

      <div className="hover:bg-focus px-3 py-2 rounded-3xl flex mb-2">
        <Flash />
        <a href="" className="ml-2">Empresas</a>
      </div>

      <div className="hover:bg-focus px-3 py-2 rounded-3xl flex mb-2">
        <User />
        <a href="" className="ml-2">Perfil</a>
      </div>

      <div className="hover:bg-focus px-3 py-2 rounded-3xl flex mb-2">
        <ElipseMenuCircle />
        <a href="" className="ml-2">Mais</a>
      </div>

      <button className="text-black bg-white py-2 w-full rounded-3xl font-semibold mb-2">
        Postar
      </button>


      <div className="flex justify-between mt-2">
        <div>
          <Image src={imageProfile} width="30" height="30" alt="" className="rounded-full" />
        </div>

        <div>
          <p className="font-semibold text-xs">Ariel Chama</p>
          <p className="text-xs">@chama_ariel</p>
        </div>

        <div>
          <ElipsMenu />
        </div>
      </div>
    </div>
  )
}

export default Menu