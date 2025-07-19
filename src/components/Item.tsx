import clsx from "clsx";
import { formatCurrency } from "../utils/FormatCurrency";
import CloudinaryImage from "./Image";

interface ItemType {
    image_1?: string, 
    image_2?: string, 
    heading: string, 
    subheading: string, 
    price: number,
    func?: (value?: string | number | undefined) => void,
    className?: string
}

export default function Item(
    { 
        image_1 = "item_placeholder_1_kce4ck",
        image_2 = "item_placeholder_2_zhzrua",
        heading = "Default Heading",
        subheading = "Default Subheading",
        price = 0,
        func,
        className
    }:ItemType
) {
    return (
        <div onClick={() => func && func()} className={clsx(className, "w-full rounded-sm overflow-hidden border border-zinc-200 bg-zinc-100 box-border")}>
            <div className="group relative w-full h-8/12 lg:h-9/12 overflow-hidden">
                <CloudinaryImage image_id={image_1} className="absolute z-20 w-full h-full object-cover object-top hover:opacity-0 transition-all duration-200" />
                <CloudinaryImage image_id={image_2} className="absolute top-0 z-10 w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-300" />
            </div>
            <div className="flex flex-col w-full h-4/12 lg:h-3/12 p-1 lg:p-4">
                <h2 className="text-base lg:text-2xl truncate">{ heading }</h2>
                <p className="-my-1 text-xs lg:text-base text-zinc-700">{ subheading }</p>
                <div className="flex items-center lg:items-center justify-between w-full mt-auto lg:mt-auto">
                    <p className="text-base lg:text-2xl font-semibold">{ formatCurrency(price) }</p>
                    <div className="flex w-fit h-fit gap-1">
                        <div className="size-3 lg:size-5 bg-black"></div>
                        <div className="size-3 lg:size-5 bg-gray-500"></div>
                        <div className="size-3 lg:size-5 bg-zinc-50 border border-zinc-400"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}