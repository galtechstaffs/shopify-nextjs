"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import CartButton from "./CartButton";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { useLanguage } from "@/context/LanguageContext";
import Menubar from "./Menubar";

export default function Navbar() {
    const t = useTranslations('Product');
    const l = useTranslations('Language');
    const router = useRouter();
    console.log(router);
    
    const [searchInput, setSearchInput] = useState("");
    const { language, setLanguage } = useLanguage();

    const handleSearch = (term: string) => {
        setSearchInput(term);
        router.push(`/?search=${encodeURIComponent(term)}`);
    };

    return (
        <nav className="border-regal-orange fixed w-full z-10">
            <div className="container mt-8 mx-auto px-6">
                <div className="rounded-full text-center text-white bg-regal-orange">
                    <h3 className="font-bold py-1 text-sm">FREE UK SHIPPING ON ORDERS OVER $40</h3>
                </div>
            <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
                <div className="w-full flex justify-between items-center md:w-auto">
                    <Menubar />
                    {/* <Link href="/">
                        <h1 className="text-2xl font-bold text-gray-800">Shopify Store</h1>
                    </Link> */}
                    {/* <div className="flex items-center space-x-4">
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="px-2 py-1 border border-gray-300 rounded-md"
                        >
                            {routing.locales.map((locale) => (
                                <option value={locale} key={locale}>
                                    {l(`${locale}`)}
                                </option>
                            ))}
                        </select>
                    </div> */}
                </div>
                <div>
                <Link href="/">
                <h2 className="text-3xl text-orange font-semibold">PROJECT</h2>
                    </Link>
                </div>
                <div className="w-full flex justify-between items-center md:w-auto py-2">
                    <div className="ml-2 px-3 rounded-full w-25">  
                        <input
                            type="text"
                            placeholder={t('search')}
                            value={searchInput}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="border border-regal-orange focus:outline-none font-semibold w-25 outline-regal-orange placeholder-black px-4 py-2 rounded-full text-sm"
                        />
                    </div>
                    <CartButton />
                </div>
            </div>
            </div>
        </nav >
    );
}
