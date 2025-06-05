import { useState } from "react";
import Dropdown, { type Option } from "../components/Dropdown";
import Item from "../components/Item";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router";

interface Data {
    image_1: string,
    image_2: string,
    heading: string,
    subheading: string,
    price: number
}

interface StoreData extends Data {
    rating: number,
    unit_sold: string
}

interface StorePageProps {
    brand_name: string,
    data: StoreData[],
}

export default function StorePage() {
 
    const [searchParams] = useSearchParams();
    const brand = searchParams.get("brand");

    const handleFetch = async () => {
        const result = await fetch("");
    }

    type SortType = "relevance" | "lowtohigh" | "hightolow";

    const [sortValue, setSortValue] = useState<string>("Relevance");
    const dropdownOptions:Option<SortType>[] = [
        {label: "Relevance",value: "relevance"},
        {label: "Price: Low to High", value: "lowtohigh"},
        {label: "Price: High to Low", value: "hightolow"},
    ]

    return(
        <div className="w-full h-auto">
            <div className="flex items-center justify-between w-full h-40 text-xl">
                <div className="flex items-end py-1 gap-10">
                    <h1 className="text-5xl"> Killstar </h1>
                </div>
                <div className="">
                    <Dropdown value={ sortValue }
                              options={ dropdownOptions } 
                              handleChange={ setSortValue }
                              className="w-48" />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 w-full h-auto">
                {
                [...Array(10)].map((e,i) => (
                    <div className="h-[30rem]">
                        <Item />
                    </div>
                    ))
                }
            </div>
            <div className="w-full h-auto mt-10">
                <Footer />
            </div>
        </div>
    )
}