import { notFound } from 'next/navigation'
import { getExplorePosts, get_headings } from '@/lib/mdx-utils'
import { baseUrl } from '@/app/sitemap'
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/mdx/MDXComponents";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { getUrl } from '@/lib/utils';
import TableofContent from "@/components/TableOfContent";

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
  let posts = getExplorePosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  let post = await getExplorePosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata

  return {
    title: `小报童-${title}`,
    description: `小报童-${title}`,
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
  const posts = await getExplorePosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })
  const postIndex = posts.findIndex((post) => post.slug === slug);
  const post = posts[postIndex];

  if (!post) {
    notFound()
  }

  const cover_url = baseUrl + '/' + post.metadata.image
  const headings = await get_headings(post.content)
  let recentPosts = posts.filter(post => post.slug !== slug)
  if (recentPosts.length > 3) {
    const isEvenTimestamp = Date.now() % 2 === 0;
    if (isEvenTimestamp) {
      recentPosts = recentPosts.reverse();
    }
    recentPosts = recentPosts.filter((post, index) => {
      return isEvenTimestamp ? index % 2 === 0 : index % 2 !== 0;
    })
    if (recentPosts.length > 3) {
      recentPosts = recentPosts.slice(0, 3)
    }
  }

  return (
    <section className='min-h-screen bg-gray-100 pb-6'>
      <div className="h-screen/2 w-full flex flex-row relative mx-auto">
        <img src={cover_url} className="h-screen/2 w-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <h1 className="text-white text-6xl font-bold mb-16">{post.metadata.title}</h1>
        </div>
      </div>
      <div className="w-4/7 flex flex-row justify-center relative mx-auto mt-10 gap-16">
        <div className="sticky top-0 h-screen max-w-3xl bg-gray-100 rounded-3xl shadow-2xl p-4 justify-start">
          <div className="hidden xl:block">
            <p className="text-gray-800 text-xl font-bold py-8">目录</p>
            {headings.map((heading) => {
              return (
                <div key={heading.text}>
                  <TableofContent heading={heading} />
                </div>
              );
            })}
          </div>
          <Link href="/explore">
            <p className="py-4 text-lg text-right sm:text-left text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-200 transition duration-400">
              ← 返回
            </p>
          </Link>
        </div>
        <div>
          <article className="mx-auto pb-8">
            <MDXRemote
              source={post.content}
              components={MDXComponents}
              options={options as any}
            />
          </article>
        </div>
      </div>
      <div className='relative w-4/5 mx-auto'>
        <hr className="border-t-2 border-gray-300 w-full mx-0 my-8" />
        <h1 className="text-3xl font-bold text-red-500 mb-12 text-center">相关文章</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map(post => {
            const imageUrl = baseUrl + '/' + post.metadata.image
            return (
              <Link key={post.slug} className=''  href={`/explore/${post.slug}`} >
                <div key={post.slug} >
                  <div>
                    <h2 className="text-lg font-semibold text-center">{post.metadata.title}</h2>
                  </div>
                  <img src={imageUrl} className="w-full object-cover rounded-3xl mb-2"/>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  )
}
