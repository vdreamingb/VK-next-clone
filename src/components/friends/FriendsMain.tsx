import FRIENDS from "@/shared/data/friends.data";
import Link from "next/link";

export default function FreiendsMain(){
    return <main className="bg-neutral-900 w-full px-7 rounded-t-lg overflow-auto max-h-[calc(100vh-170px)] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-xs">
        <ul>
            {FRIENDS.map((friend)=>
                <li key={friend.username} className="my-5 flex items-center gap-4">
                    <Link href={`/profile/${friend.username}`}>
                        <h4 className="text-lg text-neutral-500">{friend.username}</h4>
                        <h4 className="text-lg">{friend.fullName}</h4>
                    </Link>
                    <Link href={`/${friend.username}/chats`} className="ml-auto text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white duration-300 ease-in-out">
                        Chat
                    </Link>
                </li>
            )}
        </ul>
    </main>
}