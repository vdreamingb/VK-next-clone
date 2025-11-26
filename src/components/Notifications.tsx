"use client"

import { useState } from "react"
import Image from "next/image"
import { notificationsData } from "@/shared/data/notifications.data"
import NotificationItem from "./NotificationItem"

export function Notifications() {
    const [isActive, setIsActive] = useState(false)
    function onClick(){
        setIsActive(!isActive)
    }

    return <div>
        <button onClick={onClick} className="p-1 rounded-sm duration-500 ease-in-out cursor-pointer hover:bg-neutral-800">
            <Image alt="Notifications" src='/notifications.svg' width="40" height="40" />
        </button>
        <div className={`absolute duration-300 ease-in-out${isActive? " w-[350px] py-3.5 px-2.5 rounded-tl-none rounded-lg bg-neutral-800 overflow-auto h-64 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-xs": "w-0 h-0 overflow-hidden "}`}>
            <ul className="">
                {notificationsData.map((notification)=>
                    <NotificationItem key={notification.id} notification={notification} />
                )}
            </ul>
        </div>
    </div>
}
