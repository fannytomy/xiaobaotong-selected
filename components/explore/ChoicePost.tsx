'use client';

import Link from "next/link";
import { Metadata } from "@/lib/mdx-utils";

export default function ChoicePost({ title = '', choicePosts = [] }: {
    title: string,
    choicePosts: {
        metadata: Metadata;
        slug: string;
        content: string;
    }[]
}) {
    return (
        <section>
            <h1 className="text-3xl font-bold mb-12">{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {choicePosts.map(post => {
                    return (
                        <Link key={post.slug} className="w-full h-full col-span-2 relative hover:scale-105 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" href={`/explore/${post.slug}`} >
                            <div key={post.slug} >
                                <img src={post.metadata.image} className="rounded-3xl object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-3xl">
                                    <h2 className="text-white text-3xl font-bold mb-16">{post.metadata.title}</h2>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    )
}