import { Marquee, PictureMarquee } from "../components/Marquee";
import Item from "../components/Item";
import Carousel from "../components/Carousel";
import { useTranslation } from "react-i18next";
import CloudinaryImage from "../components/Image";
import { useEffect, useState } from "react";
import type { FetchItem } from "./StorePages/BrandPage";

export type DATA_ITEM_TYPE = {
    image_1: string,
    image_2: string,
    heading: string,
    subheading: string,
    price: number
}

export type DATA_MARQUEE_TYPE = {
    name: string
    image: string,
}

export type DATA_CAROUSEL_TYPE = {
    brand_img: string,
    image_1: string,
    image_2: string,
    image_3: string,
    background: string,
}

export const marquee_data = [
  { name: "Open Aesthetics", image: '1_zrcnvr' },
  { name: "Open Aesthetics", image: '2_mpvccv' },
  { name: "Open Aesthetics", image: '3_lyj1hd' },
  { name: "Open Aesthetics", image: '4_es7u1d' },
  { name: "Open Aesthetics", image: '5_idnxct'},
  { name: "Open Aesthetics", image: '6_eegzwz'},
]
const carousel_data = [
    {
      brand_img: '1_f33lpa',
      image_1: '1.1_ct0hd7',
      image_2: '1.2_ntlzze',
      image_3: '1.3_fi2ti1',
      background: "transparent",
  },
  {
      brand_img: '2_nj3a2a',
      image_1: '2.1_aqsp8a',
      image_2: '2.2_gsrm9w',
      image_3: '2.3_x4ozur',
      background: '#79787d',
  },
  {
      brand_img: '33_ctxpkh',
      image_1: '3.1_r7xevw',
      image_2: '3.2_mbr82p',
      image_3: '3.3_vutrue',
      background: '#c9c8d1',
  },
]

export default function Landing() {

    const { t } = useTranslation();
    const [fetchData, setFetchData] = useState<FetchItem[]>([]);
    const handleFetch = async () => {
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
            } else {
                console.error('Failed to fetch items.');
            }
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };
    
    const handleUserDataFetch = async () => {

        const params = new URLSearchParams(window.location.search);
        const authCheck = params.get("auth_check")

        if (authCheck) {
            const response = await fetch('http://localhost:5000/getcookies', {
                method: 'POST',
                
            })
        }
    }
    
    useEffect(() => {
        handleFetch();
        handleUserDataFetch();
    }, [])

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-auto gap-0">
                <div className="w-full h-auto">
                    <div className="flex flex-col w-full h-9/12 py-4 gap-4">
                        <div className="w-full h-10/12">
                            <CloudinaryImage image_id="placeholder_bdgc7r" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col items-center justify-end w-full h-2/12 gap-2">
                            <Marquee direction="left" />
                            <Marquee direction="right" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-screen max-h-[110dvh] gap-0 lg:gap-2">
                    <div className="flex flex-col w-full h-8/12 gap-0 lg:gap-4 p-2">
                        <div className="flex items-center justify-between h-2/12">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Killstar</h1>
                            <a href="#" className="flex items-center justify-center text-2xl md:text-3xl lg:text-2xl">
                                {t("browse")}
                                {/* <IconCaretRightFilled size={30} stroke={1.5} />  */}
                            </a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-10/12 gap-2">
                            {
                                fetchData.filter(product => product.item_brand === "KILLSTAR").map((e, i) => (
                                    <Item key={i}
                                        image_1={e.item_images[0]}
                                        image_2={e.item_images[1]}
                                        heading={e.item_name}
                                        subheading={e.item_brand}
                                        price={e.item_price} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full h-4/12 pt-8 lg:pt-0 py-0 lg:py-8">
                        <div className="flex flex-col items-center justify-center w-full lg:w-4/12 h-4/12 lg:h-full p-2 lg:p-4">
                            <h1 className="text-2xl md:text-3xl font-semibold">{t("browse by brand")}</h1>
                            <p className="text-base text-center">{t("brandtext")}</p>
                        </div>
                        <div className="w-full h-8/12 lg:h-full">
                            <Carousel data={ carousel_data } />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-screen max-h-[110dvh] gap-4 p-2">
                    <div className="flex flex-col w-full h-8/12 gap-0 lg:gap-4">
                        <div className="flex items-center justify-between h-2/12">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">CEST NOUS</h1>
                            <a href="#" className="flex items-center justify-center text-2xl md:text-3xl lg:text-2xl">
                                {t("browse")}
                                {/* <IconCaretRightFilled size={30} stroke={1.5} />  */}
                            </a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-10/12 gap-2">
                            {
                                fetchData.filter(product => product.item_brand === 'CEST NOUS').map((e, i) => (
                                    <Item key={i}
                                        image_1={e.item_images[0]}
                                        image_2={e.item_images[1]}
                                        heading={e.item_name}
                                        subheading={e.item_brand}
                                        price={e.item_price} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-4/12 lg:mt-4 py-6 gap-6">
                        <div className="flex items-center justify-between h-2/12">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{t("official")}</h1>
                            <a href="#" className="flex items-center justify-center text-2xl md:text-3xl lg:text-2xl">
                                {t("browse")}
                                {/* <IconCaretRightFilled size={30} stroke={1.5} />  */}
                            </a>
                        </div>
                        <PictureMarquee data={ marquee_data } />
                    </div>
                </div>
            </div>
        </>
    )
}