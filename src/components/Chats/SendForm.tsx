import { Send } from "lucide-react";

export default function SendForm(){
    return <form action="" className="flex items-center gap-3 max-w-full w-full border-neutral-400 border rounded-xl px-3 py-1.5 bg-neutral-900 z-50">
        <input type="text" className="py-2 px-1.5 w-full focus:outline-none " placeholder="Write your message here" />
        <button type="submit" className=""><Send /></button>
    </form>
}