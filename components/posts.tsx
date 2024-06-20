import Link from 'next/link'
import { getBlogPosts } from '@/app/blog/utils'
import { RiArrowRightDoubleLine } from "react-icons/ri";

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col pt-6 pb-24 pl-8 pr-8 bg-gray-100">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row md:justify-between space-x-0 md:space-x-0">
              <div className='flex items-center space-x-2'>
                <RiArrowRightDoubleLine />
                <p className="text-gray-900 dark:text-neutral-100 tracking-tight hover:text-red-500 hover:underline">
                  {post.metadata.title}
                </p>
              </div>
              <div>
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
