import Navbar from "../components/Navbar";
import { Marquee, PictureMarquee } from "../components/Marquee";
import Item from "../components/Item";
import ScrollSmootherWrapper from "../utils/ScrollSmoother";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

import { IconCaretRightFilled} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

import image1_1 from "/item/1.1.jpg";
import image1_2 from "/item/1.2.png";
import image2_1 from "/item/2.1.png";
import image2_3 from "/item/2.3.png";
import image3_1 from "/item/3.1.png";
import image3_2 from "/item/3.2.png";
import image4_1 from "/item/4.2.png";
import image4_2 from "/item/4.1.png";

import image1_1_a from "/item_2/1.1.png";
import image1_2_a from "/item_2/1.2.png";
import image2_1_a from "/item_2/2.1.png";
import image2_2_a from "/item_2/2.2.png";
import image3_1_a from "/item_2/3.1.png";
import image3_2_a from "/item_2/3.2.png";
import image4_1_a from "/item_2/4.2.png";
import image4_2_a from "/item_2/4.1.png";

import image_brand_1 from "/brand/1.png";
import image_brand_2 from "/brand_marquee/1.png";
import image_brand_3 from "/brand_marquee/5.png";
import image_brand_4 from "/brand_marquee/4.png";
import image_brand_5 from "/brand_marquee/3.png";
import image_brand_6 from "/brand_marquee/6.png";

export default function Landing() {

    const {t} = useTranslation();

    const data = [
        { 
            image_1: image1_1,
            image_2: image1_2,
            heading: "Assassins Hooded Cardigan",
            subheading: "KILLSTAR",
            price: 100
        },
        { 
            image_1: image2_1,
            image_2: image2_3,
            heading: "Badlands Dress",
            subheading: "KILLSTAR",
            price: 105
        },
        {
            image_1: image3_2,
            image_2: image3_1,
            heading: "Mystiqueaux Vest",
            subheading: "KILLSTAR",
            price: 45
        },
        { 
            image_1: image4_1,
            image_2: image4_2,
            heading: "Eerie Pythia Dress",
            subheading: "KILLSTAR",
            price: 64
        }
    ]
    const data_2 = [
        { 
            image_1: image1_1_a,
            image_2: image1_2_a,
            heading: "Oversized Knit Pullover",
            subheading: "CEST NOUS",
            price: 150
        },
        { 
            image_1: image2_1_a,
            image_2: image2_2_a,
            heading: "Slim Off-Shoulder Top",
            subheading:"CEST NOUS",
            price: 100
        },
        {
            image_1: image3_2_a,
            image_2: image3_1_a,
            heading: "Hooded Layered Jacket",
            subheading:"CEST NOUS",
            price: 135
        },
        { 
            image_1: image4_1_a,
            image_2: image4_2_a,
            heading: "Contrast Layered Blouse",
            subheading:"CEST NOUS",
            price: 140
        }
    ]

    const data_3 = [
        { name: "Open Aesthetics", image: image_brand_1},
        { name: "Open Aesthetics", image: image_brand_2},
        { name: "Open Aesthetics", image: image_brand_3},
        { name: "Open Aesthetics", image: image_brand_4},
        { name: "Open Aesthetics", image: image_brand_5},
        { name: "Open Aesthetics", image: image_brand_6},
    ]

    return(
        <ScrollSmootherWrapper>
            <div className="flex flex-col items-center justify-center w-full h-auto gap-0 bg-[#f7f7f7] font-display">
                <div className="w-8/12 h-screen">
                    <div className="w-full h-3/12">
                        <Navbar />
                    </div>
                    <div className="flex flex-col w-full h-9/12 py-4 gap-4">
                        <div className="w-full h-10/12">
                            <img src="/placeholder.jpg" alt="placeholder" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col items-center justify-end w-full h-2/12 gap-2">
                            <Marquee direction="left" />
                            <Marquee direction="right"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-8/12 h-screen gap-2">
                    <div className="flex flex-col w-full h-8/12 gap-4">
                        <div className="flex items-center justify-between h-2/12">
                            <h1 className="text-4xl">Killstar</h1>
                            <a href="#" className="flex items-center justify-center text-2xl">
                                {t("browse")} <IconCaretRightFilled size={30} stroke={1.5} /> 
                            </a>
                        </div>
                        <div className="grid grid-cols-4 w-full h-10/12 gap-2">
                            {
                                data.map((e,i) => (
                                    <Item key={i} image_1={e.image_1} image_2={e.image_2} heading={e.heading} subheading={e.subheading} price={e.price} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex w-full h-4/12 py-8">
                        <div className="flex flex-col items-center justify-center w-4/12 h-full p-4">
                            <h1 className="text-2xl font-semibold">{t("browse by brand")}</h1>
                            <p className="text-base text-center">{t("brandtext")}</p>
                        </div>
                        <div className="w-8/12 h-full">
                            <Carousel />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-8/12 h-screen gap-4">
                    <div className="flex flex-col w-full h-8/12 gap-4">
                        <div className="flex items-center justify-between h-2/12">
                            <h1 className="text-4xl">CEST NOUS</h1>
                            <a href="#" className="flex items-center justify-center text-2xl">
                                {t("browse")} <IconCaretRightFilled size={30} stroke={1.5} /> 
                            </a>
                        </div>
                        <div className="grid grid-cols-4 w-full h-10/12 gap-2">
                            {
                                data_2.map((e,i) => (
                                    <Item key={i} image_1={e.image_1} image_2={e.image_2} heading={e.heading} subheading={e.subheading} price={e.price} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-4/12 mt-4 py-6 gap-6">
                        <div className="flex items-center justify-between h-2/12">
                            <h1 className="text-4xl">{t("official")}</h1>
                            <a href="#" className="flex items-center justify-center text-2xl">
                                {t("browse")} <IconCaretRightFilled size={30} stroke={1.5} /> 
                            </a>
                        </div>
                        <PictureMarquee data={data_3} />
                    </div>
                </div>
                <div className="flex w-8/12 h-[35dvh]">
                    <Footer />
                </div>
            </div>
        </ScrollSmootherWrapper>
    )
}