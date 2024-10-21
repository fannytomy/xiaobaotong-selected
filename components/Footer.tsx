import Image from "next/image";
import Link from "next/link";

const navigation = {
  legal: [
    { name: '隐私协议', href: '/privacy-policy' },
    { name: '条款和条件', href: '/terms-of-service' },
  ],
  blog: [
    { name: '上新', href: '/blog' },
    { name: '发现', href: '/explore' },
    { name: '创作者', href: '/creators' },
  ],
  credit: [
    { name: 'xiaobot.net', href: 'https://xiaobot.net' },
    { name: 'xiaobaot.top', href: 'https://xiaobaot.top' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100 mx-auto pb-12 px-4 sm:px-6 lg:px-8" aria-labelledby="footer-heading">
      <div id="footer-heading" className="sr-only">
        Footer
      </div>
      <section>
        <div className="mx-auto max-w-5xl px-6 py-4 pt-10 border-t border-gray-300 text-sm">
          <div className="lg:flex lg:flex-row lg:justify-between">
            <div className="flex items-center lg:flex-1">
              <Link href={`/`} className="-m-0 p-1.5">
                <Image
                  className="h-8 w-auto"
                  src="/xiaobot_s.svg"
                  alt="xiaobaotong.store"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href={`/`} className="text-xl text-red-600 font-bold">小报童专栏<br/>精选导航站</Link>
            </div>
            <div className="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center">
              <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10 lg:mt-0">
                <p className="font-inter font-bold text-red-600">Blog</p>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.blog.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link href={`${item.href}`} className="text-sm leading-6 whitespace-nowrap text-red-400 hover:underline">
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10 lg:mt-0">
                <p className="font-inter font-bold text-red-600">隐私条款</p>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.legal.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link
                          href={`${item.href}`}
                          className="text-sm leading-6 whitespace-nowrap text-red-400 hover:underline"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10 lg:mt-0">
                <p className="font-inter font-bold text-red-600">友情链接</p>
                {/* <a
                  href="https://aiwallpaper.shop"
                  target="_blank"
                  className="font-inter font-light text-gray-500"
                >
                  AI Wallpaper
                </a> */}
              </div>
            </div>
            {/* <div className="mt-10 flex flex-col lg:mt-0">
              <div className="mb-4 flex flex-row items-center">
                <p className="block">联系作者: </p>
                <p className="font-inter ml-4 text-black"></p>
              </div>
            </div> */}
          </div>
          <div className="mx-auto my-12 w-full border-t border-gray-300 lg:my-4"></div>
          <div>
            <p className="font-inter text-center text-sm text-red-600 lg:mt-0">
              © Copyright 2024.{" "}
              <a
                href="https://xiaobaotong.store"
                target="_blank"
                className="text-red-400 hover:underline hidden md:inline-block"
              >
                xiaobaotong.store
              </a>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}