import React from 'react'
import Image from 'next/image'
import imageProfile from '@/app/images/image_profile.png'
import { BiHeart, BiRepost } from 'react-icons/bi'
import { FiMessageCircle, FiUpload } from 'react-icons/fi'
import { MdBookmarkBorder } from 'react-icons/md'
import { VscGraph } from 'react-icons/vsc'

const Post = () => {
  return (
    <div className="flex">
      <div>
        <Image src={imageProfile} width="80" height="80" alt="" className="rounded-full" />
      </div>

      <div className="ml-2">
        <h4 className="text-sm font-semibold">PALANCAS NEGRAS</h4>
        <span>@_Palancas_negras</span>

        <div className="mt-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            saepe neque provident quo iure fuga inventore iusto eos,
          </p>

          <p>
            tempora quibusdam est dolorum vero. Quam fugit cum
            laudantium labore ad recusandae!
          </p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-base gap-2">
            <FiMessageCircle />
            10
          </div>

          <div className="flex items-center text-base gap-2">
            <BiRepost />
            11
          </div>

          <div className="flex items-center text-base gap-2">
            <BiHeart />
            0
          </div>

          <div className="flex items-center text-base gap-2">
            <VscGraph />
            12
          </div>

          <div className="flex items-center gap-2 text-base">
            <MdBookmarkBorder />
            <FiUpload />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post