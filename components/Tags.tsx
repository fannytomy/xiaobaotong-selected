import {tags, tags_alias} from '@/data/data'
import Link from 'next/link'

export default function Tags({selectedTag}: {selectedTag: string}) {

    return (
        <nav className="flex flex-wrap items-center justify-center p-4 bg-gray-100 space-x-2 space-y-2 w-full md:w-4/5 lg:w-3/5 mx-auto">
          {tags.map((tag) => (
            <Link key={tag} href={`/tag/${tags_alias[tags.indexOf(tag)]}`} 
                className={`px-4 py-2 rounded-full font-bold ${selectedTag === tag ? 'bg-gray-400 text-white' : 'bg-white text-red-500 hover:bg-gray-200'}`}
            >
                {tag}
            </Link>
          ))}
        </nav>
    )
  }