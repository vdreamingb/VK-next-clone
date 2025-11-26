"use client"

import FRIENDS from "@/shared/data/friends.data"
import Link from "next/link"
import { useMemo } from "react"

export default function FriendsList(){
    useMemo(()=>{}, [FRIENDS])
    return <ul className="max-w-[200px] w-full border-r border-neutral-800 pr-3 overflow-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-xs">
        {FRIENDS.map((friend)=>
            <li key={friend.username} className="p-2 hover:bg-neutral-800 rounded-md cursor-pointer duration-300 ease-in-out not-last:mb-2.5">
                <Link href={`/${friend.username}/chats`}>{friend.fullName}</Link>
            </li>
        )}

    </ul>
}