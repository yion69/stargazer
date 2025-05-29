import { IconCopyright, IconMailForward, IconMapPin } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
    
    const {t} = useTranslation();
    
    return (
        <div className="flex flex-col justify-end w-full h-full gap-4 font-display">
            <h1 className="text-4xl">Stargazer</h1>
            <div className="flex items-start w-full h-fit">
                <div className="flex flex-col justify-end w-2/5 h-full gap-2">
                    <p className="text-sm pe-4">{t("stargazer")}</p>
                    <div className="flex flex-col w-full h-fit mt-6 gap-1">
                        <h2 className="text-2xl">{t("socials")}</h2>
                        <ul className="grid grid-cols-2 w-1/2 text-sm">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Tiktok</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Youtube</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col w-1/4 h-full gap-2">
                    <h1 className="text-2xl">{t("more information")}</h1>
                    <ul className="grid grid-cols-1 gap-1 text-sm">
                        <li><a href="#">{t("size chart")}</a></li>
                        <li><a href="#">{t("wholesale")}</a></li>
                        <li><a href="#">{t("shipping&return")}</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">{t("contact")}</a></li>
                    </ul>
                </div>
                <div className="grow flex flex-col w-1/4 h-full gap-4">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl">{t("newsletter")}</h2>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed quod dolore optio tempore illum labore aut suscipit repellat ipsam?

                        </p>
                    </div>
                    <div className="relative w-full h-fit border border-zinc-500 rounded-sm">
                        <input className="w-full h-10 px-4" type="email" placeholder={t("enter your email")} />
                        <button type="button" title="mail" className="absolute right-4 top-2 w-fit h-fit">
                            <IconMailForward stroke={1}/>
                        </button>
                    </div>
                    <div className="flex items-center h-fit w-full gap-1">
                        <IconMapPin size={16} stroke={2} />
                        <p className="text-sm">154/5 Ratchamanka Rd, Si Phum, Mueang Chiang Mai District</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full h-2/12 gap-4">
                <div className="w-full h-[1px] bg-zinc-900"></div>
                <div className="flex items-center justify-between w-full h-fit text-sm">
                    <p className="flex items-center justify-center gap-1"><IconCopyright size={14} /> 2025 House Of Blanks. All Rights Reserved</p>
                    <div className="flex gap-4">
                        <a href="">{t("terms")}</a>
                        <a href="">{t("privacy")}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}