import { getBlogPosts, getTags } from '@/app/blog/utils'

export const baseUrl = `${process.env.SITE_URL}`

export default async function sitemap() {

  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['',].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  let tags = getTags().map((tag) => ({
    url: `${baseUrl}/tag/${tag.name}`,
    lastModified: tag.date,
  }))

  return [...routes, ...blogs, ...tags]
}
