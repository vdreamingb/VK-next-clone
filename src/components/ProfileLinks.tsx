"use client"

import { profileLinksConfig } from "@/config/profile.links.config"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"


export function ProfileLinks() {
    const [isActive, setIsActive] = useState<boolean>(false)

    function onClick(){
        setIsActive(!isActive)
    }

    return <div className="relative">
        <button onClick={onClick} className="duration-500 ease-in-out cursor-pointer hover:bg-neutral-800 p-1 rounded-md">
            <Image alt="Avatar" src="/avatar.jpg" width="45" height="45" className=" rounded-full w-[45px] max-h-[45px] object-cover" priority/>
        </button>
        <ul className={`absolute ease-in-out duration-600 ${isActive?"w-50 right-0 bg-neutral-800 py-5 px-4 rounded-md rounded-tr-none": "overflow-hidden w-0 h-0 right-0"}`}>
        {profileLinksConfig.getPaths("user1").map((path) => 
            <li key={path.id} className="not-last:mb-2.5 cursor-pointer hover:text-neutral-400 duration-300 ease-in-out">
                <Link href={path.path} >{path.text}</Link>
            </li>
        )}
    </ul>
    </div>
    
}
