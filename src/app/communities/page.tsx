import CommunitiesMain from "@/components/community/CommunityMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Communities",
}

export default function CommunitiesPage(){
    return <CommunitiesMain />
}