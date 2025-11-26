import {LINKS} from "@/shared/data/links.data";
import Link from "next/link";
export default function Aside() {
    return <aside className="">
        <ul className="flex flex-col gap-5">
            {LINKS.map((link) => 
                <li key={link.id} className=" flex gap-2 p-2 hover:bg-neutral-800 rounded-md cursor-pointer duration-300 ease-in-out not-last:mb-2.5">
                    <link.image />
                    <Link href={link.path}>{link.name}</Link>
                </li>
            )}
        </ul>
    </aside>
}