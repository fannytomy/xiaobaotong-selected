"use client";

import { useState } from 'react';
import {columns, tags, tags_alias} from '@/data/data'
import Faq from '@/components/Faq';
import BackToTopButton from '@/components/Back2Top';
import Cards from '@/components/Cards';
import CountColumn from '@/components/CountColumn'
import Tags from '@/components/Tags'
import Header from '@/components/Header';
import Brand from '@/components/Brand';

export default function TagContentPage({ params }: { params: { slug: string } }) {
  const tags_alias_index = tags_alias.indexOf(params.slug);
  const selectedTag = tags_alias_index === -1 ? '全部' : tags[tags_alias_index];

  let new_title = '小报童专栏精选导航站-' + selectedTag
  
  const [inputValue, setInputValue] = useState<string>('');
  const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const tagMatchResult = selectedTag === '全部' ? columns : columns.filter(item => item.type.includes(selectedTag));

  let filteredData = tagMatchResult.filter(item => {
    if (inputValue) {
      return item.title.includes(inputValue) || item.description.includes(inputValue) || item.owner.includes(inputValue)
    }
    return tagMatchResult;
  });
  filteredData = filteredData.sort((a, b) => b.num.readers - a.num.readers);
  const name = inputValue.length > 0 ? `【${selectedTag}】—> ${inputValue}` : `【${selectedTag}】`;

  return (
    <>
      <Header title={new_title} desc={new_title}/>
      <div className="min-h-screen bg-gray-100">
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
        <CountColumn name={name} num={filteredData.length} />
        <Cards filteredData={filteredData} />       
      </div>
      <Faq />
      <BackToTopButton />
    </>
  );
};