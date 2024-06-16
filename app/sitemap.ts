import { getBlogPosts, getTags } from '@/app/blog/utils'
import { navigation } from "@/data/config";

export const baseUrl = `${process.env.SITE_URL}`

export default async function sitemap() {

  // let blogs = getBlogPosts().map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.metadata.publishedAt,
  // }))

  let routes = ['',].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  let tags = getTags().map((tag) => ({
    url: `${baseUrl}/tag/${tag.name}`,
    lastModified: tag.date,
  }))

  let navRoutes = navigation.topMenu.filter((nav) => nav.sitemap).map((nav) => ({
    url: `${baseUrl}${nav.href}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...tags, ...navRoutes]
}
