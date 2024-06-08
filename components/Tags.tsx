import {tags, tags_alias} from '@/data/data'
import Link from 'next/link'

export default function Tags({selectedTag}: {selectedTag: string}) {

    return (
        <nav className="flex flex-wrap justify-center space-x-2 space-y-2 py-4 w-3/5 mx-auto my-2">
          {tags.map((tag) => (
            <Link key={tag} href={`/tag/${tags_alias[tags.indexOf(tag)]}`} 
                className={`px-4 py-2 rounded border ${selectedTag === tag ? 'bg-gray-300 text-white' : 'bg-white text-red-500 border-dashed border-red-500'}`}
            >
                {tag}
            </Link>
          ))}
        </nav>
    )
  }