"use client"

import Image from 'next/image'
import React from 'react'

import { BiWorld } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import { GrImage } from 'react-icons/gr'
import { MdOutlineGifBox } from 'react-icons/md'

import ImageProfile from './../assets/images/image_profile.png'

interface PublishProps {
  onPublish: (post: {id: number, author: string, username: string, description: string, image: string, likes: number, 
    reposts: number, 
    comments: number,
    views: number, date: string}) => void
}

const Publish: React.FC<PublishProps> = ({ onPublish }) => {
  const [phrase, setPhrase] = React.useState(0)
  const [idNumber, setIdNumber] = React.useState(0)
  const [description, setDescription] = React.useState('')

  const showPhrase = () => {
    setPhrase(phrase + 1)
  }

  const handlePublish = () => {
    const newPost = {
      id: idNumber,
      author: 'Ariel Chama',
      username: 'arielchama',
      description: description,
      image: '',
      likes: 0,
      reposts: 0,
      comments: 0,
      views: 0,
      date: "29 jan"
    }

    onPublish(newPost)

    setDescription('')

    setIdNumber(idNumber+1)
  }

  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    
    if (text.length <= 280) {
      setDescription(text)
    }
  }                                                                                                                                 

  return (
    <div className="flex p-4 mr-2">
      <div className="">
        <Image src={ImageProfile} width="40" height="40" alt="" className="rounded-full" />
      </div>

      <div className="w-11/12">
        <textarea name="" value={description} onChange={handleChange} className="p-2 bg-transparent w-full text-xl" placeholder="O que está acontecendo?" onFocus={showPhrase}></textarea>
        <div>
          <p className={ description.length > 280 ? 'text-red-500' : 'text-primary'}>
            O post contém {description.length} caracteres
          </p>
        </div>
        
        {
        phrase >= 1? <div className="text-primary text-sm font-semibold hover:bg-primaryHover px-4 py-1 rounded-2xl" >
          <a href="" className="flex gap-1 items-center"><BiWorld /> Qualquer pessoa pode responder</a>
        </div> : ""
        }

        <div className="flex items-center border-t border-line p-2 mt-3 justify-between">
          <div className="flex gap-4 text-primary">
            <GrImage className="size-5" />
            <MdOutlineGifBox className="size-5" />
            <BsEmojiSmile className="size-5" />
          </div>

          <button onClick={handlePublish} className="text-black bg-slate-300 px-4 py-1 rounded-3xl font-semibold">
            Postar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Publish
