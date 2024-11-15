import Link from 'next/link'
import { columns } from "@/data/data"
import { getUrl } from '@/lib/utils';

export default function CountColumn({ tag, inputValue, num }: { tag: string, inputValue: string, num: number }) {

    const new_columns = columns.filter(col => col.new === 1 && (tag === "全部" || col.tags.includes(tag)))
    const name = inputValue && inputValue.length > 0 ? `【${tag}】—> ${inputValue}` : `【${tag}】`;

    return (
        <div className="flex flex-col items-center">
            <div className="text-center text-xl">
                <p>
                    <span className="text-red-500">{name}</span>
                    <span className="text-gray-600"> 共有 {num} 个专栏</span>
                </p>
            </div>
            {new_columns.length > 0 && (
            <div className="flex w-[60%] pt-2">
                <div className="bg-red-500 text-white px-2 rounded-lg h-fit self-center">
                    上新
                </div>
                <div className="flex-1 ml-2 overflow-hidden rounded-lg">
                    <div className="flex animate-scroll">
                        {[...new_columns].map((column, index) => {
                            const url = getUrl(column.columnid);
                            return (
                                <Link href={url} target="_blank" key={column.columnid}>
                                    <div key={index} className="flex items-center mx-2 p-1 px-3 rounded-lg shadow bg-white min-w-max hover:scale-105">
                                        <img 
                                            src={column.image_url} 
                                            alt={column.title} 
                                            className="w-8 h-8 object-cover rounded shrink-0"
                                        />
                                        <div className="ml-2 text-gray-800 text-sm whitespace-nowrap">
                                            {column.title}
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}