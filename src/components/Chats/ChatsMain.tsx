import Chat from "./Chat";
import FriendsList from "./FriendsList";

export default function ChatsMain() {
    return <div className="bg-neutral-900 w-full py-5 px-7 rounded-lg max-h-[calc(100vh-170px)] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-xs flex gap-5 overflow-hidden">
        <FriendsList />
        <Chat />
    </div>
}