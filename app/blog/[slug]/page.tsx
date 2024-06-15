import { notFound } from 'next/navigation'
import { getBlogPosts } from '@/app/blog/utils'
import { baseUrl } from '@/app/sitemap'
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/mdx/MDXComponents";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";
import {Button} from "@nextui-org/button";

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          defaultLang: {
            block: "typescript",
            inline: "javascript",
          },
        },
      ],
    ],
  },
};

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }:{params: {slug: string}}) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [ {}],
    },
  }
}

export default function Blog({ params }:{params: {slug: string}}) {
  const { slug } = params; 
  const posts = getBlogPosts()
  const postIndex = posts.findIndex((post) => post.slug === slug);
  const post = posts[postIndex];
  // let post = posts.find((post) => post.slug === params.slug)
  // Reverse list order, thus invert condition check
  const nextPost = postIndex - 1 >= 0 ? posts[postIndex - 1] : null;
  const prevPost = postIndex + 1 < posts.length ? posts[postIndex + 1] : null;

  if (!post) {
    notFound()
  }

  return (
    <section className='min-h-screen bg-gray-100 pl-10 pr-10 pt-10 pb-6'>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: '小报童专栏精选导航站',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-4xl tracking-tighter lg:max-w-3xl md:max-w-2xl sm:max-full mx-auto pt-4 pb-8">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mb-8 text-sm lg:max-w-3xl md:max-w-2xl sm:max-full mx-auto">
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          发布于：{post.metadata.publishedAt}
        </p>
      </div>
      <article className="prose lg:max-w-3xl md:max-w-2xl sm:max-full mx-auto pb-8">
        <MDXRemote
            source={post.content}
            components={MDXComponents}
            options={options as any}
          />
      </article>
      <div className="flex justify-center items-center mt-4 pb-10">
        <div className="flex gap-2 flex-col sm:flex-row">
          {prevPost ? (
            <Link href={prevPost.slug} className="link-underline">
              <Button color="default">上一篇</Button>  
            </Link>
          ) : (
            <></>
          )}
          {nextPost ? (
            <Link href={nextPost.slug} className="link-underline">
              <Button color="default">下一篇</Button>
            </Link>
          ) : (
            <></>
          )}
          <Link href="/blog" className="link-underline">
            <Button color="default">去首页</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
