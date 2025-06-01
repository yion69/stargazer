import Navbar from "../components/Navbar";
import { Marquee, PictureMarquee } from "../components/Marquee";
import Item from "../components/Item";
import ScrollSmootherWrapper from "../utils/ScrollSmoother";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

import { IconCaretRightFilled} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";


import CloudinaryImage from "../components/Image";

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

interface LandingPageProps {
    data_1: DATA_ITEM_TYPE[]
    data_2: DATA_ITEM_TYPE[]
    data_3: DATA_MARQUEE_TYPE[]
    data_4: DATA_CAROUSEL_TYPE[]
}

export default function Landing({ data_1, data_2, data_3, data_4 }:LandingPageProps) {

    const {t} = useTranslation();
    return(
        <ScrollSmootherWrapper>
            <div className="flex flex-col items-center justify-center w-full h-auto gap-0 bg-[#f7f7f7] font-display">
                <div className="w-full lg:w-8/12 h-screen">
                    <div className="w-full h-3/12 ">
                        <Navbar />
                    </div>
                    <div className="flex flex-col w-full h-9/12 py-4 gap-4">
                        <div className="w-full h-10/12">
                            <CloudinaryImage image_id="placeholder_bdgc7r" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col items-center justify-end w-full h-2/12 gap-2">
                            <Marquee direction="left" />
                            <Marquee direction="right"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-8/12 h-screen gap-0 lg:gap-2">
                    <div className="flex flex-col w-full h-8/12 gap-0 lg:gap-4 p-2">
                        <div className="flex items-center justify-between h-2/12">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Killstar</h1>
                            <a href="#" className="flex items-center justify-center text-2xl md:text-3xl lg:text-2xl">
                                {t("browse")} <IconCaretRightFilled size={30} stroke={1.5} /> 
                            </a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-10/12 gap-2">
                            {
                                data_1.map((e,i) => (
                                    <Item key={i} image_1={e.image_1} image_2={e.image_2} heading={e.heading} subheading={e.subheading} price={e.price} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full h-4/12 pt-8 lg:pt-0 py-0 lg:py-8">
                        <div className="flex flex-col items-center justify-center w-full lg:w-4/12 h-4/12 lg:h-full p-2 lg:p-4">
                            <h1 className="text-2xl md:text-3xl font-semibold">{t("browse by brand")}</h1>
                            <p className="text-base text-center">{t("brandtext")}</p>
                        </div>
                        <div className="w-full lg:w-8/12 h-8/12 lg:h-full">
                            <Carousel data={ data_4 } />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-8/12 h-screen gap-4 p-2">
                    <div className="flex flex-col w-full h-8/12 gap-0 lg:gap-4">
                        <div className="flex items-center justify-between h-2/12">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">CEST NOUS</h1>
                            <a href="#" className="flex items-center justify-center text-2xl md:text-3xl lg:text-2xl">
                                {t("browse")} <IconCaretRightFilled size={30} stroke={1.5} /> 
                            </a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-10/12 gap-2">
                            {
                                data_2.map((e,i) => (
                                    <Item key={i} image_1={e.image_1} image_2={e.image_2} heading={e.heading} subheading={e.subheading} price={e.price} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-4/12 mt-4 py-6 gap-6">
                        <div className="flex items-center justify-between h-2/12">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{t("official")}</h1>
                            <a href="#" className="flex items-center justify-center text-2xl md:text-3xl lg:text-2xl">
                                {t("browse")} <IconCaretRightFilled size={30} stroke={1.5} /> 
                            </a>
                        </div>
                        <PictureMarquee data={data_3} />
                    </div>
                </div>
                <div className="flex w-full lg:w-8/12 h-fit lg:h-[35dvh] pt-10 lg:pt-0">
                    <Footer />
                </div>
            </div>
        </ScrollSmootherWrapper>
    )
}