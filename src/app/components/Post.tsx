import React from 'react'
import Image from 'next/image'
import imageProfile from '@/app/images/image_profile.png'
import Comment from './icons/Comment'
import Repost from './icons/Repost'
import Save from './icons/Save'
import Share from './icons/Share'
import Heart from './icons/Heart'
import View from './icons/View'

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
          <div className="flex text-sm gap-2">
            <Comment />
            10
          </div>

          <div className="flex text-sm gap-2">
            <Repost />
            11
          </div>

          <div className="flex text-sm gap-2">
            <Heart />
            0
          </div>

          <div className="flex text-sm gap-2">
            <View />
            12
          </div>

          <div className="flex gap-2 text-sm">
            <Save />
            <Share />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post