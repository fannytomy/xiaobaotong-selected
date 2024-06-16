import { columns } from "@/data/data"
import Link from "next/link"

export default function Creators() {

    const creators = Array.from(new Map(columns.map(item => [item.owner, item])).values());
    console.log(creators.length)

    return ( 
        <div className="grid grid-cols-6 w-3/5 mx-auto mb-8">
            {creators.map(creator => {
                const url = "https://xiaobot.net/p/" + creator.columnid + "?refer=16d439a0-a4cc-49ea-823c-96b7e262e22a";
                const alt_info = "小报童专栏创作者-" + creator.owner
                return (
                    <Link href={url} target="_blank" key={creator.columnid}>
                        <div className="relative profile-container">
                            <img src={creator.image_url} alt={alt_info} className="w-full h-full object-cover rounded-xl" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold rounded-lg opacity-0 transition-opacity duration-300 username">{creator.owner}</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}