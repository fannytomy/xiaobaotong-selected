'use client';

import { useState } from 'react';
import Link from 'next/link'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import React from "react";
import { Pagination } from "@nextui-org/react";
import { Metadata } from "@/app/blog/utils";

export function BlogPosts({ posts }: {
  posts: {
    metadata: Metadata;
    slug: string;
    content: string;
  }[]
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const page_size = 30;
  const total_pages = Math.ceil(posts.length / page_size);
  let allBlogs = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  }).slice((currentPage - 1) * page_size, currentPage * page_size);

  return (
    <div className="flex flex-col bg-gray-100">
      <div className='pt-6 pl-8 pr-8'>
        {allBlogs.map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row md:justify-between space-x-0 md:space-x-0">
              <div className='flex items-center space-x-2'>
                <RiArrowRightDoubleLine />
                <p className="text-gray-900 dark:text-neutral-100 tracking-tight hover:text-red-500 hover:underline">
                  {post.metadata.title}
                </p>
              </div>
              <div>
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <Pagination isCompact showControls total={total_pages} page={currentPage} onChange={setCurrentPage}
          className='flex justify-center pb-12 pt-12' />
      </div>
    </div>
  )
}
