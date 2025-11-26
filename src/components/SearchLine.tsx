"use client"

import Image from "next/image";
import { useState } from "react";

export default function SearchLine(){
    const [value, setValue] = useState<string>("")

    return <div className="flex px-3.5 py-2 items-center gap-2.5 bg-neutral-800 rounded-md duration-500 ease-in-out hover:bg-neutral-700">
        <Image alt="Search" src="/search.svg" width="20" height="20" priority />
        <input className="px-1 focus:outline-none text-neutral-300 text-sm" type="text" placeholder="Search..." value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
}