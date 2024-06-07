import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Page() {
  return (
    <>
      <Header/>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-12 pb-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-extrabold text-black mb-12">
          服务条款
          </h1>
          <p className="text-gray-700 mb-6">最后更新日期：2024年6月8日</p>
          <p className="text-gray-700 mb-6">这些服务条款管辖您对本站的访问和使用。通过访问或使用服务，您同意受这些条款的约束。</p>
          <h2 className="text-black font-bold mb-8">1、服务描述：</h2>
          <p className="text-gray-700 mb-4">本站提供。</p>
          <h2 className="text-black font-bold mb-8 mt-8">2、用户数据：</h2>
          <p className="text-gray-700 mb-4">我们不收集和存储用户数据。</p>
          <h2 className="text-black font-bold mb-8  mt-8">3、非个人数据收集：</h2>
          <p className="text-gray-700 mb-4">我们也不会使用 cookie 来收集非个人数据。</p>
          <h2 className="text-black font-bold mb-8  mt-8">4、隐私政策：</h2>
          <p className="text-gray-700 mb-4">我们的<a href="/privacy-policy" className="text-red-600 hover:underline">隐私政策</a>解释了我们如何收集、使用和披露关于您的信息。通过使用我们的服务，代表您同意我们的<a href="/privacy-policy" className="text-red-600 hover:underline">隐私政策</a>。</p>
          <h2 className="text-black font-bold mb-8  mt-8">5、适用法律：</h2>
          <p className="text-gray-700 mb-4">这些条款受您所在地的法律管辖。</p>
          <h2 className="text-black font-bold mb-8  mt-8">6、条款更新：</h2>
          <p className="text-gray-700 mb-4">我们可能会不时更新这些条款。我们将在本网站显要位置提醒条款的任何重大变更。</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};