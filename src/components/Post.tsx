"use client"

import React from 'react'
import Image from 'next/image'
import { BiHeart, BiRepost } from 'react-icons/bi'
import { FiMessageCircle, FiUpload } from 'react-icons/fi'
import { MdBookmarkBorder } from 'react-icons/md'
import { VscGraph } from 'react-icons/vsc'

import ImageProfile from './../assets/images/image_profile.png'
import { BsHeartFill } from 'react-icons/bs'

interface Post {
    id: number
    author: string
    username: string
    description: string
    image: string
    likes: number
    reposts: number
    comments: number
    views: number
    date: string
}

interface PostComponentProps {
  post: Post
}

const Post: React.FC<PostComponentProps> = ({ post }) => {
  const [like, setLike] = React.useState(false)

  const liked = () => {
    setLike(!like)
  }

  return (
    <div className="flex border-b border-line py-8 px-4 hover:bg-line hover:cursor-pointer">
      <div>
        <Image src={ImageProfile} width="40" height="40" alt="" className="rounded-full" />
      </div>

      <div className="ml-2">
        <div className="flex items-center">
          <h4 className="text-sm font-semibold">{post.author}</h4>
          <span className="text-sm mx-2">@{ post.username }</span> .
          <span className="text-sm">{post.date}</span>
        </div>

        <div className="mt-2 break-words whitespace-normal max-w-full">
          <p className="w-96">
            {post.description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-base gap-2">
            <FiMessageCircle />
            {post.comments}
          </div>

          <div className="flex items-center text-base gap-2">
            <BiRepost />
            {post.reposts}
          </div>

          <div className="flex items-center text-base gap-2 hover:cursor-pointer" onClick={liked}>
            {like ? <BsHeartFill className="text-red-600" /> : <BiHeart /> }
            {like  ? post.likes + 1 : post.likes}
          </div>

          <div className="flex items-center text-base gap-2">
            <VscGraph />
            {post.views}
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
