"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Profile",
}

export default function Profile(){
    const params = useParams()
    return <main className=" h-[calc(100vh-170px)] overflow-auto rounded-lg w-full flex items-center justify-center">
        <div className="bg-neutral-900 p-20 rounded-lg align-center flex flex-col gap-4 items-center">
            <Image priority src="/avatar.jpg" width={80} height={80} alt="Avatar" className="h-20 w-20 object-cover rounded-full" />
            <h4 className="text-xl">Username: {params.username}</h4>
            <h4 className="text-xl">Email: {params.username}@gmail.com</h4>
        </div>
    </main>
}