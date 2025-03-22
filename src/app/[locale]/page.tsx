"use client";
import Link from "next/link";
import AddToCartButton from "../../components/AddToCartButton";
import Navbar from "../../components/Navbar";
import { getProducts } from "@/lib/product";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import LoadingOverlay from "@/components/LoadingOverlay";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ProductTab from "@/components/ProductTab";
import GridProduct from "@/components/GridProduct";

export default function Home() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [products, setProducts] = useState<any[]>([]);
  const [pageInfo, setPageInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const t = useTranslations('Product');

  const fetchProducts = async (after?: string, before?: string, isNewPage: boolean = false) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProducts({
        searchQuery,
        after,
        before,
        last: before ? 8 : undefined,
      });
      // setProducts((prev) => (isNewPage ? response.products.edges : [...prev, ...response.products.edges]));
      setPageInfo(response.products.pageInfo);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(undefined, undefined, true);
  }, [searchQuery]);

  const handleNextPage = () => {
    if (pageInfo?.hasNextPage && pageInfo.endCursor) {
      fetchProducts(pageInfo.endCursor, undefined, true);
    }
  };

  const handlePreviousPage = () => {
    if (pageInfo?.hasPreviousPage && pageInfo.startCursor) {
      fetchProducts(undefined, pageInfo.startCursor, true);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="container mx-auto h-180 bg-[url(/Group_831.webp)]"
      style={{ backgroundImage: "url(/Group_831.webp)", backgroundSize: "contain"}}>
        <div className="grid h-170 grid-cols-2 content-end gap-4 w-400">
          <div className="p-6">
            <h1 className="font-bold text-6xl text-orange">BIG LIPS, </h1>
            <h1 className="font-bold text-6xl text-orange">BIGGER ENERGY</h1>
            <p className="mt-6 p-1 text-gray-800 w-120">Our famous lip linear lines, fills and plumps so you can cheat your way to an instant lip lift</p>
            <button className="border border-regal-orange hover:bg-regal-orange hover:text-white mt-4 px-6 py-2 rounded-full text-orange">SHOP PLUMP & FILL</button>
          </div>
        </div>
      </div>
      <GridProduct />
    </div>
  );
}