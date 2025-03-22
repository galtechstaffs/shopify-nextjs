import Link from "next/link";
import { useRouter } from "next/router";

export default function Menubar() {

    return (
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:ml-6 sm:block">
            <div className="border border-regal-orange flex rounded-full">
            <Link href="/shop" className="bg-regal-orange font-bold px-4 py-2 rounded-full text-sm text-white" aria-current="page">
                SHOP
            </Link>
            <Link href="/about" className="font-bold hover:bg-regal-orange hover:text-white px-4 py-2 rounded-full text-sm" aria-current="page">
              ABOUT
            </Link>
            <a href="#" className="font-bold hover:bg-regal-orange hover:text-white px-4 py-2 rounded-full text-sm">LEARN</a>
            </div>
          </div>
        </div>
    );
}