"use client";
import Creators from "@/components/Creators"
import BackToTopButton from "@/components/Back2Top"
import Header from '@/components/Header';

export default function Page() {
  const title = "小报童专栏精选导航站 | 创作者们";
  return (
    <section className="bg-grey-100">
      <Header title={title} desc={title}/>
      <div className="text-center py-8">
          <h1 className="text-5xl font-bold pt-8 pb-8">小报童专栏精选</h1>
          <p className="text-lg text-gray-600">精选专栏的创作者们</p>
      </div>
      <Creators /> 
      <BackToTopButton />
    </section>
  )
}