import Image from "next/image";
import Link from "next/link";

const navigation = {
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-of-service' },
  ],
  credit: [
    { name: 'xiaobot.net', href: 'https://xiaobot.net' },
    { name: 'xiaobaot.top', href: 'https://xiaobaot.top' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100" aria-labelledby="footer-heading">
      <div id="footer-heading" className="sr-only">
        Footer
      </div>
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-6">
            <div className="flex lg:flex-1">
              <a href={`/`} className="-m-1.5 p-1.5">
                <Image
                  className="h-8 w-auto"
                  src="/appicon.svg"
                  alt="soramagic.co"
                  width={32}
                  height={32}
                />
              </a>
              <p className="text-xl text-black font-bold">
                小报童专栏精选导航站
              </p>
            </div>            
          </div>
          <div className="mt-2 flex grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 justify-end">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div className="text-sm font-semibold leading-6 text-black">Blog</div>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href={`/blog`}
                      target={"_blank"}
                      className="text-sm leading-6 whitespace-nowrap text-black hover:underline"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                  <div className="text-medium font-semibold leading-6 text-black font-bold">
                    Legal
                  </div>
                  <ul role="list" className="mt-6 space-y-2">
                    {navigation.legal.map((item) => {
                      return (
                        <li key={item.name}>
                          <Link
                            href={`${item.href}`}
                            className="text-sm leading-6 whitespace-nowrap text-black hover:underline"
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <div>
              <div className="text-medium font-semibold leading-6 text-black">CREDIT TO</div>
              <ul role="list" className="mt-6 space-y-2">
                {navigation.credit.map((item) => {
                  return (
                    <li key={item.name}>
                      <Link
                        href={`${item.href}`}
                        target={"_blank"}
                        className="text-sm leading-6 whitespace-nowrap text-black hover:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}