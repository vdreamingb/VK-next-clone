"use client"

import Header from "@/components/Header";
import Aside from "@/components/Aside";
import { useState } from "react";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const [isOpen, setIsOpen] = useState(false);

  return <>
    <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    <div className="flex items-start max-w-[1100px] m-auto t-[90px] gap-5 max-h-screen h-full pt-[170px] px-3">
      <Aside isOpen={isOpen} setIsOpen={setIsOpen}/>
      {children}
    </div>
  </>;
}