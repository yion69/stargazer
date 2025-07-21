import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ScrambleText from "../utils/ScrambledText";
import clsx from "clsx";
import { Link } from "react-router";

export default function Navbar() {

    const [lang, setLang] = useState("EN");
    const handleLangChange = () => { 
        if (lang == "EN") { setLang("JP") } else { setLang("EN") };
    };
    useEffect(() => {
        changeLang(lang.toLowerCase());
    },[lang])

    const {t,i18n} = useTranslation();
    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang)
    }
    
    return (
        <nav className="flex flex-col justify-between w-full md:w-10-12 lg:w-8/12 h-full min-h-40 py-4 font-display">
            <div className="flex justify-end w-full h-fit px-2 lg:px-0">
                <p className="flex items-center justify-center w-24 gap-2 text-xl">
                    <button type="button" onClick={handleLangChange}>
                         {t("currency")} | { lang } 
                    </button>
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 items-end w-full gap-2 md:gap-8 px-4 lg:px-0">

                <ul className={clsx("order-2 lg:order-1 grid grid-cols-3 w-full text-base md:text-2xl", lang == "EN" ? "lg:text-2xl" : "text-xs lg:text-base")}>
                    <li className="hover:font-bold hover:scale-105 transition-all duration-200">
                        <Link to="/" className={clsx("flex items-center hover:font-bold hover:scale-105 transition-all duration-200", lang == "EN" ? "justify-start" : "justify-start")}>
                            <ScrambleText>{t("home")}</ScrambleText>
                        </Link>
                    </li>
                    <li className="hover:font-bold hover:scale-105 transition-all duration-200">
                        <Link to="/store/all" className={clsx("flex items-center hover:font-bold hover:scale-105 transition-all duration-200", lang == "EN" ? "justify-start" : "justify-start")}>
                            <ScrambleText>{t("shop")}</ScrambleText>
                        </Link>
                    </li>
                    <li className="hover:font-bold hover:scale-105 transition-all duration-200">
                        <a href="#" className={clsx("flex items-center hover:font-bold hover:scale-105 transition-all duration-200", lang == "EN" ? "justify-start" : "justify-center")}>
                            <ScrambleText>{t("about")}</ScrambleText>
                        </a>
                    </li>
                </ul>

                <div className="col-span-2 lg:col-span-1 order-1 lg:order-2 flex justify-center w-full">
                    <h1 className="text-4xl md:text-6xl lg:text-6xl">Stargazer</h1>
                </div>

                <div className={clsx("order-3 grid grid-cols-3 w-full gap-2 lg:gap-4 text-base md:text-2xl", lang == "EN" ? "lg:text-2xl" : "text-xs lg:text-base")}>
                    <a href="#" className={clsx("flex items-center justify-center hover:font-bold hover:scale-105 transition-all duration-200", lang == "EN" ? "lg:justify-end" : "lg:justify-center")}>
                        <ScrambleText>{t("cart")}</ScrambleText>
                    </a>
                    <a href="#" className={clsx("flex items-center justify-center hover:font-bold hover:scale-105 transition-all duration-200", lang == "EN" ? "lg:justify-end" : "lg:justify-center")}>
                        <ScrambleText>{t("search")}</ScrambleText>
                    </a>
                    <Link to="/account/signin" className={clsx("flex items-center justify-center hover:font-bold hover:scale-105 transition-all duration-200", lang == "EN" ? "lg:justify-end" : "text-[0.60rem] scale-125 lg:justify-center")}>
                        <ScrambleText>{t("account")}</ScrambleText>
                    </Link>
                </div>

            </div>
        </nav>
    )
}