import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ScrambleText from "../utils/ScrambledText";
import clsx from "clsx";

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
        <nav className="flex flex-col justify-between w-full h-full py-4 font-display">
            <div className="flex justify-end w-full h-fit">
                <p className="flex items-center justify-center w-24 gap-2 text-xl">
                    {t("currency")} | <button type="button" onClick={handleLangChange}>{ lang }</button>
                </p>
            </div>
            <div className="flex items-end w-full">
                <ul className={clsx("grid grid-cols-3 w-3/12", lang == "EN" ? "text-xl" : "text-base")}>
                    <li className="hover:font-bold hover:scale-105 transition-all duration-200">
                        <a href="#" className={clsx("flex items-center hover:font-bold hover:scale-105 transition-all duration-200", lang == "EN" ? "justify-start" : "justify-start")}>
                            <ScrambleText>{t("home")}</ScrambleText>
                        </a>
                    </li>
                    <li className="hover:font-bold hover:scale-105 transition-all duration-200">
                        <a href="#" className={clsx("flex items-center hover:font-bold hover:scale-105 transition-all duration-200", lang == "EN" ? "justify-start" : "justify-start")}>
                            <ScrambleText>{t("shop")}</ScrambleText>
                        </a>
                    </li>
                    <li className="hover:font-bold hover:scale-105 transition-all duration-200">
                        <a href="#" className={clsx("flex items-center hover:font-bold hover:scale-105 transition-all duration-200", lang == "EN" ? "justify-start" : "justify-center")}>
                            <ScrambleText>{t("about")}</ScrambleText>
                        </a>
                    </li>
                </ul>
                <div className="grow flex justify-center w-6/12">
                    <h1 className="text-6xl">Stargazer</h1>
                </div>
                <div className={clsx("grid grid-cols-3 w-3/12", lang == "EN" ? "text-xl" : "text-base")}>
                    <a href="#" className={clsx("flex items-center hover:font-bold hover:scale-105 transition-all duration-200", lang == "EN" ? "justify-end" : "justify-center")}>
                        <ScrambleText>{t("cart")}</ScrambleText>
                    </a>
                    <a href="#" className={clsx("flex items-center hover:font-bold hover:scale-105 transition-all duration-200", lang == "EN" ? "justify-end" : "justify-center")}>
                        <ScrambleText>{t("search")}</ScrambleText>
                    </a>
                    <a href="#" className={clsx("flex items-center hover:font-bold hover:scale-105 transition-all duration-200", lang == "EN" ? "justify-end" : "justify-center")}>
                        <ScrambleText>{t("account")}</ScrambleText>
                    </a>
                </div>
            </div>
        </nav>
    )
}