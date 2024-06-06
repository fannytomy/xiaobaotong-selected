"use client";

import Head from 'next/head';
import { useState } from 'react';
import {columns, tags} from '@/data/data'

const Page = () => {
  const [selectedTag, setSelectedTag] = useState('全部');

  const filteredData = selectedTag === '全部' ? columns : columns.filter(item => item.type.includes(selectedTag));

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>精选小报童专栏导航站</title>
        <meta name="description" content="精选小报童专栏导航站，助力价值传播" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="text-center py-6 bg-white shadow">
        <h1 className="text-3xl font-bold">精选小报童专栏导航站</h1>
        <p className="text-gray-600">人工过滤甄选，打破圈层壁垒，助力价值传播</p>
        <input type="text" placeholder="搜索小报童专栏（可输入专栏名称、作者、内容方向等）" className="mt-4 p-2 border rounded w-1/2" />
      </header>
      
      <nav className="flex flex-wrap justify-center space-x-2 space-y-2 py-4 w-4/5 mx-auto my-2">
        {tags.map(tag => (
          <button 
            key={tag} 
            onClick={() => setSelectedTag(tag)} 
            className={`px-4 py-2 rounded border ${selectedTag === tag ? 'bg-gray-300 text-white' : 'bg-white text-red-500 border-dashed border-red-500'}`}
          >
            {tag}
          </button>
        ))}
      </nav>

      <div className="text-center font-bold text-red-800 text-xl my-2">
        <p>【{selectedTag}】 共有 {filteredData.length} 个专栏</p>
      </div>

      <main className="flex flex-wrap justify-center p-12 my-0 mx-auto">
        {filteredData.map(item => (
          <div key={item.columnid} className="bg-white p-6 rounded shadow-md m-4 w-80 transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            <img src={item.image_url} alt={item.title} className="h-16 w-16 rounded-full mr-4" />
            <div>
              <p className="text-gray-600 text-lg font-bold">{item.num.readers} 读者 · {item.num.contents} 内容</p>
            </div>
          </div>
          <h2 className="text-red-800 text-xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-800 h-60 overflow-hidden text-ellipsis" dangerouslySetInnerHTML={{ __html: item.description }}></p>
        </div>        
        ))}
      </main>
      
      
    </div>
  );
};

export default Page;
