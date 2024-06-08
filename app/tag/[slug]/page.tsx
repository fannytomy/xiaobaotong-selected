"use client";

import { useState } from 'react';
import {columns, tags, tags_alias} from '@/data/data'
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/Back2Top';
import Cards from '@/components/Cards';
import Header from '@/components/Header'
import CountColumn from '@/components/CountColumn'
import Tags from '@/components/Tags'

export default function TagContentPage({ params }: { params: { slug: string } }) {
  const tags_alias_index = tags_alias.indexOf(params.slug);
  const selectedTag = tags_alias_index === -1 ? '全部' : tags[tags_alias_index];
  
  const [inputValue, setInputValue] = useState<string>('');
  const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const tagMatchResult = selectedTag === '全部' ? columns : columns.filter(item => item.type.includes(selectedTag));

  const filteredData = tagMatchResult.filter(item => {
    if (inputValue) {
      return item.title.includes(inputValue) || item.description.includes(inputValue) || item.owner.includes(inputValue)
    }
    return tagMatchResult;
  });

  const name = inputValue.length > 0 ? `【${selectedTag}】—> ${inputValue}` : `【${selectedTag}】`;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">

        <div className="text-center font-bold text-red-600 text-xl pt-6">
          <input type="text" placeholder="搜索小报童精选专栏（可输入专栏名称、作者、内容方向等）" className="mt-4 p-2 border rounded w-1/2" value={inputValue} onChange={handlerSearch}/>
        </div>

        <Tags selectedTag={selectedTag} />
        <CountColumn name={name} num={filteredData.length} />
        <Cards filteredData={filteredData} />       
      </div>
      <Faq />
      <Footer />
      <BackToTopButton />
    </>
  );
};