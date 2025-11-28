import {LINKS} from "@/shared/data/links.data";
import Link from "next/link";

interface AsideProps {
    isOpen: boolean
}

export default function Aside({isOpen}: AsideProps) {
    return <aside className={`max-sm:left-0  max-sm:fixed max-sm:bg-neutral-900 max-sm:w-full max-sm:top-[170px] xl:w-72 2xl:w-80 h-fit p-4 sticky top-20 ${isOpen ? "max-sm:block h-full" : "hidden"}`}>
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