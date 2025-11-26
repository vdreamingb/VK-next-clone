import Posts from "@/shared/data/posts.data";
import { ThumbsUp } from "lucide-react";
import Post from "./Post";

export default function Main() {
    return <div className="bg-neutral-900 w-full px-7 rounded-t-lg overflow-auto max-h-[calc(100vh-170px)] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-xs animate-fadeIn">
        <ul className="">
            {Posts.map((post)=>
                <li key={post.id} className="my-10">
                    <Post post={post} />
                </li>
            )}
        </ul>
    </div>
}