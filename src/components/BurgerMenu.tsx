import type { Dispatch } from "react";

interface BurgerMenuProps {
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

export default function BurgerMenu({setIsOpen}: BurgerMenuProps) {
    return <button onClick={() => setIsOpen(prev => !prev)} className="flex-col gap-1.5 p-2 hover:bg-neutral-800 rounded-md cursor-pointer duration-300 ease-in-out max-sm:flex hidden">
        <span className="w-6 h-0.5 bg-white block"></span>
        <span className="w-6 h-0.5 bg-white block"></span>
        <span className="w-6 h-0.5 bg-white block"></span>
    </button>
}