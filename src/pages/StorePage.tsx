import { Outlet } from "react-router";

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
    return(
        <div className="w-full h-auto pb-4">
            <Outlet />
        </div>
    )
}