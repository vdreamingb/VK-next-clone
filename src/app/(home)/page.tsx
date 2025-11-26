import type { Metadata } from "next";
import Main from "@/components/home/Main";

export const metadata: Metadata = {
  title: "VK Next Clone",
};

export default function Home() {
  return (
    <Main />
  );
}
