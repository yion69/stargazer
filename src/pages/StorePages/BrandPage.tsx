import Item from "../../components/Item";
import { useNavigate } from "react-router";
import { useCallback, useEffect, useState } from "react";
import Dropdown, { type SortType, type Option } from "../../components/Dropdown";
import Loading from "../../components/Loading";
import { useTranslation } from "react-i18next";

export interface FetchItem {
    item_brand: string,
    item_created_at: string,
    item_id: string,
    item_images: string[],
    item_name: string,
    item_price: number,
    item_rating: number,
    item_sold: number
}

export default function BrandPage() {
    
    const { t } = useTranslation();

    const [fetchData, setFetchData]  = useState<FetchItem[]>([]);
    const [loading, setLoading] = useState<Boolean>();

    const navigate = useNavigate();
    const handleItemRoute = (id: string) => {
        console.log("ee")
        navigate(`/store/${ id }`)
    }
    const memoizedFunc = useCallback(( value: string) => {
        handleItemRoute( value );
    }, [handleItemRoute])

    const [sortValue, setSortValue] = useState<string>("Relevance");
    const dropdownOptions:Option<SortType>[] = [
        {label: "Relevance",value: "relevance"},
        {label: "Price: Low to High", value: "lowtohigh"},
        {label: "Price: High to Low", value: "hightolow"},
    ]

    const handleFetch = async () => {
        setLoading(true)
        try {
            const response = await fetch('http://127.0.0.1:5000/api/items', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const extracted = await response.json();
                setFetchData(extracted)
                console.log(extracted);
            } else {
                console.error('Failed to fetch items.');
            }
        } catch (error) {
            console.error('Error fetching items:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleFetch();
    },[])

    return (
        <>
            { loading && <Loading /> }
            <div className="w-full h-auto">
                <div className="flex items-center justify-between w-full h-24 lg:h-40 text-xl">
                    <div className="flex items-end py-1 gap-10">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl"> Killstar </h1>
                    </div>
                    <div className="">
                        <Dropdown value={ sortValue }
                                    options={ dropdownOptions } 
                                    handleChange={ setSortValue }
                                    className="w-fit lg:w-48" />
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full h-auto">
                    {
                        fetchData.map((e,i) => (
                            <Item   key={ i }
                                    image_1={ e.item_images[0]} 
                                    image_2={ e.item_images[1] } 
                                    heading={ e.item_name } 
                                    subheading={ e.item_brand } 
                                    price={ e.item_price }
                                    func={ () => memoizedFunc( `${ e.item_id }` ) } 
                                    className="h-[16rem] lg:h-[30rem]"/>
                        ))
                    }
                </div>
            </div> 
        </>
    )
}