import Image from "next/image";
import SearchLine from "./SearchLine";
import { Notifications } from "./Notifications";
import { ProfileLinks } from "./ProfileLinks";
import type { Dispatch, SetStateAction } from "react";
import BurgerMenu from "./BurgerMenu";

interface HeaderProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Header({isOpen, setIsOpen}: HeaderProps) {
  console.log(isOpen);
  return (
    <header className="fixed shadow-gray-700 shadow-xs p-2 w-full z-20 bg-neutral-900">
      <div className="container flex justify-between items-center">
        <Image src="/vk-logo.svg" width="45" height="45" priority alt="Logo" />
        <div className={`flex items-center gap-4 max-sm:absolute max-sm:left-0 max-sm:w-screen max-sm:top-20 max-sm:bg-neutral-900 max-sm:p-2 ${isOpen ? "max-sm:block max-sm:w-full" : "max-sm:hidden"}`}>
          <SearchLine />
          <Notifications />
          
        </div>
        <BurgerMenu setIsOpen={setIsOpen} />
        <ProfileLinks />
      </div>
    </header>
  );
}
