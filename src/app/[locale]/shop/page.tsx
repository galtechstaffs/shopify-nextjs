"use client";

import Navbar from "@/components/Navbar";
import ProductTab from "@/components/ProductTab";

export default function Shop() {

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-24">
      <ProductTab />
        </div>
    </div>
  );
}