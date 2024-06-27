import { notFound } from 'next/navigation'
import { getBlogPosts } from '@/lib/mdx-utils'
import { baseUrl } from '@/app/sitemap'
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/mdx/MDXComponents";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { getUrl } from '@/lib/utils';

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

export async function generateMetadata({ params }: { params: { slug: string } }) {
  let post = await getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata

  return {
    title: `小报童专栏-${title}`,
    description: `小报童专栏-${title}`,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [{}],
    },
  }
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const posts = await getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })
  const postIndex = posts.findIndex((post) => post.slug === slug);
  const post = posts[postIndex];
  // let post = posts.find((post) => post.slug === params.slug)
  // Reverse list order, thus invert condition check
  const nextPost = postIndex - 1 >= 0 ? posts[postIndex - 1] : null;
  const prevPost = postIndex + 1 < posts.length ? posts[postIndex + 1] : null;

  if (!post) {
    notFound()
  }

  const url = getUrl(post.slug)

  return (
    <section className='relative min-h-screen bg-gray-100 pl-10 pr-10 pt-10 pb-6'>
      <div className="flex flex-row justify-center mx-auto">
        <div>
          <h1 className="title font-semibold text-4xl tracking-tighter lg:max-w-3xl md:max-w-2xl sm:max-full mx-auto pt-4 pb-8">
            {post.metadata.title}
          </h1>
          <div className="flex justify-start items-center mb-8 space-x-6 text-sm lg:max-w-3xl md:max-w-2xl sm:max-full mx-auto">
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              收录于：{post.metadata.publishedAt}
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              <Link href={url} target="_blank" className="text-lg text-red-400 hover:underline hover:text-red-600"> 去【 小报童 】查看专栏详情 </Link>
            </p>
          </div>
          <article className="prose lg:max-w-3xl md:max-w-2xl sm:max-full mx-auto pb-8">
            <MDXRemote
              source={post.content}
              components={MDXComponents}
              options={options as any}
            />
            <Link href={url} target="_blank" className="text-lg text-red-400 hover:underline hover:text-red-600"> 去【 小报童 】查看专栏详情 </Link>
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
        </div>
      </div>  
    </section>
  )
}
