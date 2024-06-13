import Link from 'next/link'
import { getBlogPosts } from '@/app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="mx-auto max-w-3xl pt-6 pb-24">
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
              <p className="text-gray-900 dark:text-neutral-100 tracking-tight hover:text-red-400">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {post.metadata.publishedAt}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
