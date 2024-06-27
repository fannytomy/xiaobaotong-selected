import { columns } from "@/data/data"
import Link from "next/link"
import { getUrl } from '@/lib/utils';

export default async function Creators() {

    const creators = Array.from(new Map(columns.map(item => [item.owner, item])).values());

    return ( 
        <div className="grid grid-cols-6 w-3/5 mx-auto mb-8">
            {creators.map(creator => {
                const url = getUrl(creator.columnid);
                const alt_info = "小报童 专栏创作者-" + creator.owner
                return (
                    <Link href={url} target="_blank" key={creator.columnid}>
                        <div className="relative profile-container">
                            <img src={creator.image_url} alt={alt_info} className="w-full h-full object-cover rounded-xl" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold rounded-lg opacity-0 transition-opacity duration-300 username">小报童 {creator.owner}</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}