import type { ILink } from "../types/links.types";
import {LayoutList, MessageCircleMore, Users, Handshake, Image} from "lucide-react"

export const LINKS:ILink[] = [
    {
        id:1,
        name: "Recomendations",
        path: "/",
        image: LayoutList
    },
    {
        id:2,
        name: "Chats",
        path: "/alex_j/chats",
        image: MessageCircleMore
    },
    {
        id:3,
        name: "Friends",
        path: "/friends",
        image: Handshake

    },
    {
        id:4,
        name: "Communities",
        path: "/communities",
        image: Users
    },
    {
        id:5,
        name: "Photos",
        path: "/photos",
        image: Image
    }
]