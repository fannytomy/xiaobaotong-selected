"use client";

import { useState } from 'react';
import { columns } from '@/data/data'
import Faq from '@/components/Faq';
import BackToTopButton from '@/components/Back2Top';
import Cards from '@/components/Cards';
import CountColumn from '@/components/CountColumn'
import Tags from '@/components/Tags';
import Brand from '@/components/Brand';

export default function Page() {
  const [inputValue, setInputValue] = useState<string>('');
  const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const selectedTag = '全部';
  let filterResult = columns.slice(0, 50);

  if (inputValue.length > 0) {
    filterResult = columns.filter(item => item.title.includes(inputValue) || item.description.includes(inputValue) || item.owner.includes(inputValue));
  }
  filterResult = filterResult.sort((a, b) => b.num.readers - a.num.readers);
  const cloumn_size = inputValue.length > 0 ? filterResult.length : columns.length;

  return (
    <>
      <div className="bg-gray-100">

        <Brand />
        <section className="relatve mt-4 md:mt-8">
          <div className="mx-auto w-full max-w-2xl px-6 text-center">
            <div className="flex items-center relative">
              <input
                type="text"
                className="flex-1 px-4 py-3 border-2 border-red-300 focus:border-red-600 focus:outline-none bg-white rounded-lg text-sm"
                placeholder="可输入专栏名称、作者、内容等关键词"
                value={inputValue}
                onChange={handlerSearch}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute right-4 cursor-pointer "
                onClick={() => {
                  if (inputValue) {
                    handlerSearch;
                  }
                }}
              >
                <polyline points="9 10 4 15 9 20"></polyline>
                <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
              </svg>
            </div>
          </div>
        </section>

        <Tags selectedTag={selectedTag} />
        <CountColumn tag={selectedTag} inputValue = {inputValue} num={cloumn_size} />
        <Cards filteredData={filterResult} />
      </div>
      <Faq />
      <BackToTopButton />
    </>
  );
};
