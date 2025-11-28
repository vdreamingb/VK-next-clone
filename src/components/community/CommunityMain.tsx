import { COMMUNITIES } from "@/shared/data/community.data";
import Link from "next/link";

export default function CommunitiesMain(){
    return <main className="h-[calc(100vh-170px)] overflow-auto rounded-t-lg w-full [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-xs">
        <ul className="flex w-full items-center flex-wrap gap-4 justify-center">
            {COMMUNITIES.map((community)=>
                <Link href="/" key={community.id} className="bg-neutral-900 p-5 rounded-lg flex items-center gap-4 max-w-[250px] w-full hover:bg-neutral-800 duration-300 ease-in-out">
                    <img src={community.avatarUrl} alt={community.name} className="w-16 h-16 rounded-full object-cover"/>
                    <div>
                        <h4 className="text-lg">{community.name}</h4>
                        <p className="text-sm text-neutral-500">{community.membersCount} members</p>
                    </div>
                </Link>
            )}
        </ul>
    </main>
}