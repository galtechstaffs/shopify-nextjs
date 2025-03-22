"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function CartButton() {
  const { cartCount } = useCart();

  return (
    <Link href="/cart" className="ml-2 px-4 rounded-full w-25">
      <div className="relative cursor-pointer">
        {/* <FaShoppingCart className="text-2xl text-gray-800 hover:text-blue-600" /> */}
        <span className="border border-regal-orange font-semibold px-3 pr-10 py-2 rounded-full text-sm">
          CART
        </span>
        <span className="absolute border border-regal-orange bottom-0 left-4 ml-11 px-2 rounded-full text-lg top-0" style={{ marginBottom: "-4px", marginTop: "-4px", width: "32px", paddingLeft: "10px" }}>
          {cartCount}
        </span>
      </div>
    </Link>
  );
}