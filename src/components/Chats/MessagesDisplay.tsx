"use client"
import MESSAGES from "@/shared/data/messages.data"
import type { ISortedMessage } from "@/shared/types/message.type"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function MessagesDisplay(){
    const params = useParams()
    const [filteredList, setFilteredList] = useState<ISortedMessage[]>([])
    useEffect(() => {
        
        const sortedMessages = MESSAGES.filter((messages)=> {
            return messages.messages.some((message)=>message.username===params["friend-name"])
        })
        if(sortedMessages){
            setFilteredList(sortedMessages)
        }

    },[params.friendName])

    return <div className="h-[calc(100%-50px)] w-full overflow-auto pb-3">
        <ul>
            {filteredList.map((messageGroup)=>
                <li key={messageGroup.date} className="not-last:mb-5 z-10">
                    <h4 className="text-center mb-3 text-sm text-neutral-400">{messageGroup.date}</h4>
                    <ul>
                        {messageGroup.messages.map((message)=>
                            <li key={message.id} className={`p-2 max-w-[80%] rounded-md mb-2 ${message.username===params.friendName?"bg-neutral-800 self-start":"bg-blue-600 self-end text-white"}`}>
                                {message.content}
                            </li>
                        )}
                    </ul>
                </li>
            )}
        </ul>
    </div>
}