"use client"

import BurgerMenu from "../BurgerMenu";
import Chat from "./Chat";
import FriendsList from "./FriendsList";
import { useState } from "react";

export default function ChatsMain() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="bg-neutral-900 w-full py-5 px-7 rounded-lg max-h-[calc(100vh-170px)] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-xs flex gap-5 overflow-hidden max-sm:flex-col">
        <BurgerMenu setIsOpen={setIsOpen} />
        <FriendsList isOpen={isOpen} setIsOpen={setIsOpen} />
        <Chat />
    </div>
}