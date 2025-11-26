"use client"

import type { IPost } from "@/shared/types/post.type"
import { ThumbsUp } from "lucide-react"
import { useState } from "react"

interface PostProps{
    post: IPost
}

export default function Post({post}:PostProps) {
    const [clicked, setClicked] = useState(false)
    const [likes, setLikes] = useState(Number(post.likes))

    function onLikeClick(){
        if(clicked === false){
            setLikes(likes + 1)
            setClicked(true)
        }
    }

    return <>
        <h4 className="text-xl">{post.author}</h4>
        <img src = {post.postImage} className="w-full my-5 rounded-xl" alt="Images" />
        <button onClick={onLikeClick} className="flex items-center gap-2">
            <ThumbsUp className="hover:scale-[1.2] duration-300 ease-in-out cursor-pointer white" />
            {likes}
        </button>
    </>
}