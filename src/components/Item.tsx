export default function Item(
    { image_1, image_2,  heading, subheading, price }:{ image_1: string, image_2: string, heading: string, subheading: string, price: number}
) {
    return (
        <div className="w-full h-full rounded-sm overflow-hidden border border-zinc-200 bg-zinc-100 box-border">
            <div className="group relative w-full h-9/12 overflow-hidden">
                <img src={ image_1 } alt="" className="absolute z-20 w-full h-full object-cover object-top hover:opacity-0 transition-all duration-200" />
                <img src={ image_2 } alt="" className="absolute top-0 z-10 w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-300" />
            </div>
            <div className="w-full h-3/12 p-2">
                <h2 className="text-xl">{ heading }</h2>
                <p className="-my-1 text-sm text-zinc-700">{ subheading }</p>
                <p className="my-1 text-lg font-semibold">€ { price }</p>
                <div className="flex w-full h-fit gap-1">
                    <div className="size-3 bg-black"></div>
                    <div className="size-3 bg-gray-500"></div>
                    <div className="size-3 bg-zinc-50 border border-zinc-400"></div>
                </div>
            </div>
        </div>
    )
}