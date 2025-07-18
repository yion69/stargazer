import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { FetchItem } from "./BrandPage";
import CloudinaryImage from "../../components/Image";
import { useTranslation } from "react-i18next";
import { formatCurrency } from "../../utils/FormatCurrency";
import Rating from "../../components/Rating";
import SizeOptions from "../../components/SizeOptions";
import SizeChart from "../../components/SizeChart";
import QuantityOptions from "../../components/QuantityOption";

export default function ItemPage() {

    const { t } = useTranslation();
    const { id } = useParams<{ id:string }>();
    
    const [sizing, setSizing] = useState<String>();
    const [quantity, setQuantity] = useState<number>(1);
    const [fetchData, setFetchData] = useState<FetchItem>({
        item_brand: "",
        item_created_at: "",
        item_id: "",
        item_images: [],
        item_name: "",
        item_price: 0,
        item_rating: 0,
        item_sold: 0
    });
 
    const handleFetch = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/items/${ id }`, {
                method: "GET",
            });
            if (response.ok) {
                const extracted = await response.json();
                setFetchData(extracted);
            }
        } catch(err) {
            console.log("Failed to fetch item: ", err)
        }
    }
 
    const handleAddToCart = () => {
    }

    useEffect(() => {
        handleFetch();
    },[])


    return (
        <div className="w-full h-auto flex flex-col py-10 border-b">
            <div className="w-full h-full flex gap-10">
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="w-3/12 h-full grid grid-rows-3 pe-2 gap-2">
                        {
                            [...Array(3)].map((i) => (
                                <div key={i} className="w-full h-full shadow-sm/20">
                                    <CloudinaryImage className="w-fit h-full" image_id={fetchData.item_images[1]} />
                                </div>
                            ))
                        }
                    </div>
                    <CloudinaryImage className="w-9/12 h-full shadow-sm/20" image_id={fetchData.item_images[0]} />
                </div>
                <div className="w-5/12 h-full flex flex-col gap-6 ">
                    <div className="w-full h-fit flex items-center">
                        All {">"} { fetchData.item_brand } {">"} { fetchData.item_name }
                    </div>
                    <div className="flex flex-col w-full h-fit">
                        <div className="text-xl">
                            <Rating rating_count={4.6} rating_units={32} />
                        </div>
                        <h1 className="text-4xl">{ fetchData.item_name }</h1>
                        <h3 className="text-2xl">{ t(formatCurrency( fetchData.item_price )) }</h3>
                    </div>
                    <div className="w-full h-[4px] bg-zinc-900"></div>
                    <div className="flex flex-col w-full h-fit gap-2">
                        <h1 className="text-2xl">Size</h1>
                        <SizeOptions setValue={ setSizing } />
                    </div>
                    <div className="flex flex-col w-full h-fit gap-2">
                        <h1 className="text-2xl">Quantity </h1>
                        <QuantityOptions value={ quantity } setValue={ setQuantity } />
                    </div>

                    <div className="flex w-full h-fit gap-4 text-2xl">
                        <button type="button" className="w-full h-14 px-4 bg-zinc-900 text-zinc-100">
                            Add to Cart
                        </button>
                    </div>

                    <div className="flex flex-col w-full h-fit gap-2">
                        <h1 className="text-2xl">Description</h1>
                        <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repellendus?</p>
                        <ul className="text-sm list-disc px-4">
                            <li>Slim-fit</li>
                            <li>Halter-style</li>
                            <li>Satin ties</li>
                            <li>Sheer lace panel with embroidered bow</li>
                            <li>Boned structure</li>
                        </ul>
                        <p className="text-base">Material Composition:  
                            <span className="font-semibold"> 90% Cotton , 5% Spandex</span>
                        </p>
                    </div>
                    <div className="flex flex-col w-full h-fit gap-2">
                        <h1 className="text-2xl">Size Chart</h1>
                        <div className="flex flex-col w-full h-full gap-4">
                            <SizeChart />
                            <SizeChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}