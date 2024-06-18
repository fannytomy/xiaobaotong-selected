import { columns } from "@/data/data"

export default function Brand() {
    return ( 
    <h1 className="text-center text-4xl sm:text-2xl font-bold pt-10 text-red-600 ">
        精选小报童 {columns.length} 个专栏，助力价值传播
      </h1>
    )
  }