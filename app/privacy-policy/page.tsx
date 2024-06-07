import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Page() {
  return (
    <>
      <Header/>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="mx-auto max-w-5xl -mt-20">
          <h1 className="text-3xl font-extrabold text-black mb-12 -mt-4">
            隐私政策
          </h1>
          <p className="text-gray-700 mb-6">最后更新日期：2024年6月7日</p>
          <p className="text-gray-700 mb-6">感谢您选择【小报童专栏精选导航站】！本隐私政策概述了您在使用我们的网站时我们如何收集、使用和保护您的个人信息</p>
          <h2 className="text-black font-bold mb-8">1、信息收集:</h2>
          <p className="text-gray-700 mb-4">a. 本网站不收集任何个人信息</p>
          <p className="text-gray-700 mb-4">b. 本网站也不收集任何非个人数据</p>
          <p className="text-gray-700 mb-8">c. 本网站也不能从小报童获取任何您的个人数据或非个人数据</p>
          <h2 className="text-black font-bold mb-8">2、隐私政策更新:</h2>
          <p className="text-gray-700 mb-0">我们将在本网站显要位置显示用户有关本隐私政策的任何更新</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};