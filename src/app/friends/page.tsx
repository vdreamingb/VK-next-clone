import FreiendsMain from "@/components/friends/FriendsMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Friends",
}

export default function FriendsPage(){
    return <FreiendsMain />
}