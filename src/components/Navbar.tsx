import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
        <nav className="flex flex-col justify-between w-full h-full p-4 font-display">
            <div className="flex justify-end w-full h-fit">
                <p className="flex items-center justify-center gap-2 text-xl">
                    € EUR | <button type="button" onClick={handleLangChange}>{ lang }</button>
                </p>
            </div>
            <div className="flex items-end w-full">
                <ul className="flex justify-start w-4/12 gap-10">
                    <li><a href="#" className="text-xl">{t("home")}</a></li>
                    <li><a href="#" className="text-xl">{t("shop")}</a></li>
                    <li><a href="#" className="text-xl">{t("about")}</a></li>
                </ul>
                <div className="flex justify-center w-4/12">
                    <h1 className="text-6xl">Stargazer</h1>
                </div>
                <div className="flex justify-end w-4/12 gap-10">
                    <p className="text-xl">{t("search")}</p>
                    <p className="text-xl">{t("account")}</p>
                    <p className="text-xl">{t("cart")}</p>
                </div>
            </div>
        </nav>
    )
}