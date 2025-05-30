import i18next from "i18next";
import { langCurrencyMap } from "./CurrencyLocaleMap";

export function formatCurrency(amount: number) {
    
    const lang = i18next.language as keyof typeof langCurrencyMap;
    const { currency, locale, rate } = langCurrencyMap[lang] || langCurrencyMap.en;
    const convertedAmount = rate * amount;

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        maximumFractionDigits: 0
    }).format(convertedAmount);
}
