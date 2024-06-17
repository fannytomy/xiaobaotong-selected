import Link from 'next/link'
import {Button} from "@nextui-org/react";
import { getUrl } from '@/lib/utils';

export default function Card({filteredData}:{filteredData:any[]}) {

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-10 md:py-4 lg:py-4">
        <div className="mb-8 gap-5 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
          {filteredData.map(cloumn_info => {
            const url = getUrl(cloumn_info.columnid);
            return (
              <Link href={url} target="_blank" key={cloumn_info.columnid}>
                <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-[#7e7e7e] bg-white p-8 hover:scale-105">
                  <div className="mb-4 flex flex-row items-center">
                    <img src={cloumn_info.image_url} alt={"小报童-" + cloumn_info.title} className="h-16 w-16 rounded-full mr-4" />
                    <div className="flex flex-col">
                      <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">{cloumn_info.title}</h2>
                        <p className="text-sm text-[#636262]">{cloumn_info.owner}</p>
                      </div>
                      <div className="flex flex-row items-center font-bold justify-start">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">{cloumn_info.num.readers} 读者</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{cloumn_info.num.contents} 文章</span>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-[#636262]" dangerouslySetInnerHTML={{ __html: cloumn_info.description }} />
                  <div className="flex justify-end">
                    <Button color="warning" className="bg-orange-500 text-white rounded-xl justify-center font-bold">详情</Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  )
}