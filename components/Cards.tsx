export default function Card({filteredData}:{filteredData:any[]}) {

  return (
    <main className="flex flex-wrap justify-center p-6 mx-auto">
      {filteredData.map(cloumn_info => (
        <div key={cloumn_info.columnid} className="relative bg-white p-6 pb-16 rounded shadow-md m-4 w-80 transition-transform transform hover:scale-105"
          onClick={() => window.open("https://xiaobot.net/p/" + cloumn_info.columnid + "?refer=16d439a0-a4cc-49ea-823c-96b7e262e22a", "_blank")} >
          <div className="flex mb-4">
            <img src={cloumn_info.image_url} alt={"小报童-" + cloumn_info.title} className="h-16 w-16 rounded-full mr-4" />
            <div className="flex flex-col justify-between text-right flex-grow">
              <p className="text-red-400 text-3xl">{cloumn_info.num.readers} 读者</p>
              <p className="text-red-400 text-3xl">{cloumn_info.num.contents} 文章</p>
            </div>
          </div>
          <h2 className="text-red-800 text-xl font-bold mt-6 mb-4">{cloumn_info.title}</h2>
          <p className="text-gray-700 h-60 overflow-hidden text-ellipsis" dangerouslySetInnerHTML={{ __html: cloumn_info.description }}></p>
          <p className="absolute bottom-4 right-4 px-4 py-2 mt-1 text-red-800 text-xl font-bold ">详情</p>
        </div>
      ))}
    </main>    
  )
}