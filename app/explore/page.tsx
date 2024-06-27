
import { getExplorePosts } from '@/lib/mdx-utils'
import ChoicePost from '@/components/explore/ChoicePost'
import Link from 'next/link'

export const metadata = {
  title: '小报童专栏精选导航站 | 发现小报童专栏',
  description: '发现小报童精选专栏',
  keywords: '小报童, 小报童精选, 小报童专栏, 小报童导航, 小报童导航站, 小报童专栏精选导航站, xiaobaotong'
}

export default async function Page() {
  const posts = await getExplorePosts()
  const choicePosts = posts.filter(post => post.metadata.isChoice)
  const recentPosts = posts.filter(post => !post.metadata.isChoice) 

  return (
    <div className="container mx-auto px-4 py-8 w-4/5">
      <ChoicePost title='精选文章' choicePosts={choicePosts}/>
      <section className="min-h-screen">
        <h1 className="text-3xl font-bold text-red-500 mb-12 mt-12">最近的文章</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {recentPosts.map(post => {
            return (
              <Link key={post.slug} className='hover:scale-105 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg'  href={`/explore/${post.slug}`} >
                <div key={post.slug} >
                  <img src={post.metadata.image} className="w-full object-cover rounded-3xl mb-2"/>
                  <div>
                    <h3 className="text-lg font-semibold">{post.metadata.title}</h3>
                    <p className="text-gray-500 text-sm">{post.metadata.publishedAt}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  )
}
