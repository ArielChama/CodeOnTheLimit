'use client'

import React from "react";
import Image from "next/image";

import { CiSearch } from "react-icons/ci";
import { IoEllipsisHorizontal } from "react-icons/io5";

import { Menu, Post, Publish } from "./../components";

import ImageProfile from './../assets/images/image_profile.png';

const posts = [{
  id: 1,
  author: 'Ariel Chama',
  username: 'arielchama', 
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis vel ipsum bibendum, ac finibus enim ultricies. Maecenas vel velit et turpis dictum placerat.',
  image: '/post_image_1.jpg',
  likes: 20,
  reposts: 5,
  comments: 10,
  views: 3,
  date: "27 de jan"
},
]

interface PostType {
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


function Home() {
  const [post, setPost] = React.useState<PostType[]>(posts)
  
  const onPublish = (newPost: PostType) => {
    setPost([...post, newPost])
  }

  return (
    <main className="mt-2">
      <div className="flex justify-between mx-auto w-10/12">
        <div className="px-4">
          <Menu />
        </div>

        <div className="w-5/12 border-l border-r border-line">
          <div className="w-full">
            <div className="border-line border-b flex justify-around">
              <div className="hover:bg-line hover:cursor-pointer w-6/12 pt-2 text-center px-2">
                <h4 className="font-semibold border-b-4 pb-2 w-1/3 border-primary">Para você</h4>
              </div>

              <div className="text-center hover:bg-line hover:cursor-pointer w-6/12 pt-2">
                <h4 className="">Seguindo</h4>
              </div>
            </div>

            <Publish onPublish={onPublish} />
          </div>

          <div className="p-2 text-center text-primary border-line hover:bg-line hover:cursor-pointer border-t border-b">
            <a href="" className="">Mostrar 342 posts</a>
          </div>

          <div className="">
            {post.map((p) => (
              <Post post={p} />
            ))}
          </div>
        </div>

        <div className="w-1/3 px-4">
          <div className="mb-3 flex">
            <div className="border-l border-t border-b rounded-l-3xl p-2 border-line">
              <CiSearch className="size-5" />
            </div>
            <input type="search" placeholder="Buscar" className="border-line border-r border-t border-b w-full rounded-r-3xl py-2 pl-3 bg-transparent" />
          </div>

          <div className="p-3 border rounded-2xl border-line">
            <h3 className="text-lg font-semibold">Assine o premium</h3>
            <p>Assine para desbloquear novos recursos e, se elegível, receba uma parte da receita.</p>

            <button className="text-white text-sm rounded-3xl bg-primary px-3 py-2 mt-2 font-semibold">
              Inscrever-se
            </button>
          </div>

          <div className="border-line border mt-4 rounded-2xl">
            <h3 className="text-lg font-semibold mt-3 ml-3">Quem seguir</h3>

            <div className="flex gap-2 justify-between px-3 py-4 hover:bg-focus hover:cursor-pointer">
              <div>
                <Image src={ImageProfile} width="40" height="40" alt="" className="rounded-full" />
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
                <Image src={ImageProfile} width="40" height="40" alt="" className="rounded-full" />
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

            <div className="flex gap-2 justify-between px-3 py-4 hover:bg-focus hover:cursor-pointer rounded-b-2xl">
              <a href="" className="text-primary text-sm font-medium">Mostrar mais</a>
            </div>
          </div>

          <div className="border-line border mt-4 rounded-2xl mb-4">
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
                <IoEllipsisHorizontal />
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
                <IoEllipsisHorizontal />
              </div>
            </div>

            <div className="mt-2 p-3 hover:bg-focus hover:cursor-pointer rounded-b-2xl">
              <a href="" className="text-primary text-sm font-medium">Mostrar mais</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
