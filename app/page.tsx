"use client";

import { useState } from 'react';
import {columns} from '@/data/data'
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/Back2Top';
import Cards from '@/components/Cards';
import Nav from '@/components/Nav'
import CountColumn from '@/components/CountColumn'
import Tags from '@/components/Tags';

const Page = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const selectedTag = '全部';
  let filterResult = columns.slice(0, 50);

  if (inputValue.length > 0) {
    filterResult = columns.filter(item => item.title.includes(inputValue) || item.description.includes(inputValue) || item.owner.includes(inputValue));
  }

  const cloumn_size = inputValue.length > 0 ? filterResult.length : columns.length;
  const name = inputValue.length > 0 ? `【${selectedTag}】—> ${inputValue}` : `【${selectedTag}】`;

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-100">

        <div className="text-center font-bold text-red-600 text-xl pt-6">
          <input type="text" placeholder="搜索小报童精选专栏（可输入专栏名称、作者、内容方向等）" className="mt-4 p-2 border rounded w-1/2" value={inputValue} onChange={handlerSearch}/>
        </div>

        <Tags selectedTag={selectedTag} />
        <CountColumn name={name} num={cloumn_size} />

        <Cards filteredData={filterResult} />
        {/* <main className="flex flex-wrap justify-center p-6 mx-auto">
          {filterResult.map(item => (
            <Card cloumn_info={item} />
          ))}
        </main>         */}
      </div>
      <Faq />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Page;
