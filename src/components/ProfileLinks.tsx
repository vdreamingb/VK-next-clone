import Link from "next/link"
import Image from "next/image"


export function ProfileLinks() {


    return <div className="">
        <Link href={"/profile/user1"} className="duration-500 ease-in-out cursor-pointer hover:bg-neutral-800 p-1 rounded-md">
            <Image alt="Avatar" src="/avatar.jpg" width="45" height="45" className=" rounded-full w-[45px] max-h-[45px] object-cover" priority/>
        </Link>

    </div>
    
}
