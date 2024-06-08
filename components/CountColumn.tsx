export default function CountColumn({name, num}: {name: string, num: number}) {

    return (
        <div className="text-center text-xl mt-2">
            <p>
                <span className="text-red-500">{name}</span>
                <span className="text-gray-600"> 共有 {num} 个专栏</span>
            </p>
        </div>
    )
  }