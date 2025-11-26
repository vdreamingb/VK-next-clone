import Image from "next/image";
import SearchLine from "./SearchLine";
import { Notifications } from "./Notifications";
import { ProfileLinks } from "./ProfileLinks";

export default function Header() {
  return (
    <header className="fixed shadow-gray-700 shadow-xs p-2 w-full z-20 bg-neutral-900">
      <div className="container flex justify-between items-center">
        <Image src="/vk-logo.svg" width="45" height="45" priority alt="Logo" />
        <div className="flex items-center gap-4">
          <SearchLine />
          <Notifications />
        </div>
        <ProfileLinks />
      </div>
    </header>
  );
}
