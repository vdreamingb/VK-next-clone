import { PHOTOS } from "@/shared/data/photo.data";

export default function PhotosPage(){
    return <main className="h-[calc(100vh-170px)]">
        <ul className="text-center overflow-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-xs">
            {PHOTOS.map((photo)=>
                <li key={photo.id} className="inline-block m-1 hover:opacity-60 duration-300 ease-in-out cursor-pointer">
                    <img src={photo.url} alt={"Photo"} className="w-48 h-48 object-cover rounded-lg"/>
                </li>
            )}
        </ul>
    </main>
}