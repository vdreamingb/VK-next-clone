"use client"

import FRIENDS from "@/shared/data/friends.data"
import Link from "next/link"
import { useMemo } from "react"

interface FriendsListProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FriendsList({isOpen, setIsOpen}: FriendsListProps) {
    useMemo(()=>{}, [FRIENDS])
    return <ul className={`max-w-[200px] w-full border-r border-neutral-800 pr-3 overflow-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-xs max-sm:max-w-full max-sm:absolute max-sm:pt-20 h-full max-sm:left-0 max-sm:top-0 max-sm:bg-neutral-900 ${isOpen ? "max-sm:block" : "max-sm:hidden"}`}>
        {FRIENDS.map((friend)=>
            <li key={friend.username} className="p-2 hover:bg-neutral-800 rounded-md cursor-pointer duration-300 ease-in-out not-last:mb-2.5">
                <Link onClick={()=>{setIsOpen(!isOpen)}} href={`/${friend.username}/chats`}>{friend.fullName}</Link>
            </li>
        )}

    </ul>
}