export default function CountColumn({name, num}: {name: string, num: number}) {

    return (
        <div className="text-center font-bold text-red-800 text-xl mt-2">
            <p>{name} 共有 {num} 个专栏</p>
        </div>
    )
  }