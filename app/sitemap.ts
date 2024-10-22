import { getBlogPosts, getTags, getExplorePosts } from '@/lib/mdx-utils'
import { navigation } from "@/data/config";

export const baseUrl = `${process.env.SITE_URL}`

export default async function sitemap() {

  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'weekly',
    priority: 1
  }))

  let explore = getExplorePosts().map((post) => ({
    url: `${baseUrl}/explore/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'weekly',
    priority: 0.8
  }))

  let routes = ['',].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.8
  }))

  let tags = getTags().map((tag) => ({
    url: `${baseUrl}/tag/${tag.name}`,
    lastModified: tag.date,
    changeFrequency: 'weekly',
    priority: 0.8
  }))

  let navRoutes = navigation.topMenu.filter((nav) => nav.sitemap).map((nav) => ({
    url: `${baseUrl}${nav.href}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.8
  }))

  return [...routes, ...blogs, ...explore, ...tags, ...navRoutes]
}
