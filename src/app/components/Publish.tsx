import React from 'react'
import Image from 'next/image'
import imageProfile from '@/app/images/image_profile.png'
import ImageIcon from './icons/ImageIcon'
import Gif from './icons/Gif'
import World from './icons/World'

const Publish = () => {
  return (
    <div className="flex p-4">
      <div className="">
        <Image src={imageProfile} width="30" height="30" alt="" className="rounded-full" />
      </div>

      <div className="w-11/12">
        <textarea name="" id="" className="p-2 bg-transparent w-full" placeholder="O que está acontecendo?"></textarea>
        <p className="text-primary font-semibold">
          <a href="" className="flex gap-1"><World /> Qualquer pessoa pode responder</a>
        </p>

        <div className="flex border-t border-line p-2 mt-3 justify-between">
          <div className="flex gap-2 text-primary">
            <ImageIcon />
            <Gif />
          </div>

          <button className="text-black bg-slate-300 px-4 py-1 rounded-3xl font-semibold">Postar</button>
        </div>
      </div>
    </div>
  )
}

export default Publish