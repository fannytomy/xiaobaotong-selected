'use client'
import Image from "next/image";
import Link from "next/link";

const navigation = {
  topMenu: [
    {name: 'Home', href: '/'},
    // {name: 'Blog', href: '/blog'},
    {name: 'FAQs', href: '#faqs'},
  ],
}

export default function Nav() {
  return (
      <nav className="top-0 z-20 w-full border-b border-gray-300 bg-gray-100 flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center lg:flex-1 justify-start">
          <a href={`/`} className="flex items-center mr-2" >
            <Image className="h-8 w-auto" src="/xiaobot_s.svg" alt="soramagic.co" width={28} height={28}/>
          </a>
          <Link href={`/`} className="text-3xl text-red-600 font-bold">小报童专栏精选导航站</Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.topMenu.map((item) => (
            <a
              key={item.name}
              href={`${item.href}`}
              className="text-xl font-semibold leading-6 text-red-500 hover:text-red-800">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 justify-end mr-2"></div>
      </nav>
  )
}
