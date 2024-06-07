export default function Faq() {
  return ( 
    <div id="faqs" className="mx-auto w-full max-w-5xl px-5 py-8 md:px-8 md:py-12 lg:py-12">
        <div className="mb-8 text-center md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-semibold md:text-5xl">常见 <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white">问题</span></h2>
        </div>
        <div className="mb-8 md:mb-12 lg:mb-16">
            <div className="mb-6 rounded-xl border border-solid border-black p-8">
                <div className="mb-4 flex cursor-pointer items-start justify-between">
                    <p className="text-xl font-semibold">什么是小报童?</p>
                </div>
                <p className="mb-4 text-[#636262]">1. 小报童是一个内容付费服务平台，旨在帮助创作者将洞察转化为价值。<br/> 2. 它提供了两种内容模式：专栏模式和小册模式，适合创作者与读者建立长期联系和广泛持续传播知识。<br/> 3. 读者可以通过小报童的订阅制和买断制付费方式，获取最新的优质内容。</p>
            </div>
            <div className="mb-6 rounded-xl border border-solid border-black p-8">
                <div className="mb-4 flex cursor-pointer items-start justify-between">
                    <p className="text-xl font-semibold">小报童订阅以后能退订吗?</p>
                </div>
                <p className="mb-4 text-[#636262]">专栏在付费后 24 小时内申请无理由退款。退款申请会在 48 小时内人工进行审核，通过后费用将会原路退回。<br/>请注意，连续退款三次，账号将会进入冷静期，无法进行支付操作。<br/>如需退款，请按照以下操作方式，在小报童微信服务号内，点击菜单「我的」- 「申请退款」，根据提示操作即可。</p>
            </div>
            <div className="mb-6 rounded-xl border border-solid border-black p-8">
                <div className="mb-4 flex cursor-pointer items-start justify-between">
                    <p className="text-xl font-semibold">为什么需要小报童专栏精选导航站?</p>
                </div>
                <p className="mb-4 text-[#636262]">小报童专注帮助内容创作，不做算法推荐专栏，所以一些优质的内容只在小范围内传播，也很难通过搜索引擎搜索到。<br/>本站小报童专栏精选导航站就派上了用场，收集并精选了自己订阅、朋友推荐以及散落在网络各处的优质专栏，让读者可通过本站找到小报童的优质内容。</p>
            </div>
        </div>
    </div>
  )
}