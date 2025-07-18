// import { IconCopyright, IconMailForward, IconMapPin } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
    
    const {t} = useTranslation();
    
    return (
        <div className="flex flex-col justify-end w-full lg:w-8/12 h-full px-2 lg:px-0 py-4 gap-2 lg:gap-4 font-display">
            <h1 className="px-2 lg:px-0 text-4xl">Stargazer</h1>
            <div className="grid grid-cols-2 md:flex md:items-start lg:flex lg:items-start w-full h-fit gap-6">

                <div className="col-span-2 lg:col-span-1 flex flex-col items-start justify-end w-full md:w-5/12 lg:w-2/5 h-full gap-4 lg:gap-2">
                    <p className="text-sm px-2 lg:px-0 lg:pe-4">{t("stargazer")}</p>
                    <div className="flex flex-col w-full h-fit mt-0 px-2 lg:px-0 lg:mt-6 gap-0 lg:gap-1">
                        <h2 className="lg:px-0 text-2xl">{t("socials")}</h2>
                        <ul className="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-2 w-full lg:w-1/2 text-sm">
                            <li className="flex items-center justify-start md:justify-start lg:justify-start"><a href="#">Facebook</a></li>
                            <li className="flex items-center justify-center md:justify-start lg:justify-start"><a href="#">Instagram</a></li>
                            <li className="flex items-center justify-center md:justify-start lg:justify-start"><a href="#">Youtube</a></li>
                            <li className="flex items-center justify-center md:justify-start lg:justify-start"><a href="#">Twitter</a></li>
                            <li className="flex items-center justify-center md:justify-start lg:justify-start"><a href="#">Tiktok</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-2 flex flex-col w-full md:w-4/12 lg:w-1/4 h-full gap-0 lg:gap-2">
                    <h1 className="px-2 lg:px-0 text-2xl">{t("more information")}</h1>
                    <ul className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-1 w-full px-2 lg:px-0 gap-0 lg:gap-1 text-sm">
                        <li className="flex items-center justify-start">
                            <a href="#">{t("size chart")}</a>
                        </li>
                        <li className="flex items-center justify-start">
                            <a href="#">{t("wholesale")}</a>
                        </li>
                        <li className="flex items-center justify-start">
                            <a href="#">{t("shipping&return")}</a>
                        </li>
                        <li className="flex items-center justify-start">
                            <a href="#">FAQ</a>
                        </li>
                        <li className="flex items-center justify-start">
                            <a href="#">{t("contact")}</a>
                        </li>
                    </ul>
                </div>

                <div className="col-span-2 lg:cols-span-1 grow flex flex-col w-full md:w-[45%] lg:w-1/4 h-full px-2 lg:px-0 gap-2 lg:gap-4">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl">{t("newsletter")}</h2>
                        <p className="text-sm">{t("newsletter info")}</p>
                    </div>
                    <div className="relative w-full h-fit border border-zinc-500 rounded-sm">
                        <input className="w-full h-10 px-4" type="email" placeholder={t("enter your email")} />
                        <button type="button" title="mail" className="absolute right-4 top-2 w-fit h-fit">
                            {/* <IconMailForward stroke={1}/> */}
                        </button>
                    </div>
                    <div className="flex items-center h-fit w-full px-0 gap-1">
                        {/* <IconMapPin size={16} stroke={2} /> */}
                        <p className="text-xs lg:text-sm">154/5 Ratchamanka Rd, Si Phum, Mueang Chiang Mai District</p>
                    </div>
                </div>

            </div>
            <div className="cols-span-2 lg:col-span-1 flex flex-col items-center w-full h-2/12 mt-4 lg:mt-0 gap-4">
                <div className="w-full h-[1px] bg-zinc-900"></div>
                <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-fit text-xs">
                    <p className="flex items-center justify-center gap-1">
                        {/* <IconCopyright size={14} />  */}
                        2025 House Of Blanks. All Rights Reserved</p>
                    <div className="flex gap-4">
                        <a href="">{t("terms")}</a>
                        <a href="">{t("privacy")}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}