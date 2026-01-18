"use client";

import { FiArrowDown, FiArrowRight, FiArrowUp, FiChevronDown, FiChevronUp, FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";

type TProductActionProps = {
    product: Product;
    stock: number;
}

const ProductAction = ({product, stock}: TProductActionProps) => {
const {addItem} = useCartStore();
const {push} = useRouter();
const [qty, setQty] = useState(1);

const handleAddToCart = () => {
    addItem(product, qty);
}

const handleCheckout = () => {
    addItem(product);
    push("/checkout");
}

    return (
        <div className="flex gap-5 items-stretch h-14">
            <div className="border border-gray-500 inline-flex w-fit min-w-20.5 overflow-hidden">
                <div className="aspect-square min-w-13 text-xl font-medium border-r border-gray-500 flex justify-center items-center">
                    <span>{qty}</span>
                </div>
                <div className="flex flex-col">
                    <button className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center hover:bg-gray-100 outline-none focus:outline-none"
                        onClick={() => setQty(qty < stock ? qty + 1 : qty)}>
                        <FiChevronUp />
                    </button>
                    <button className="cursor-pointer h-1/2 aspect-square flex items-center justify-center hover:bg-gray-100 outline-none focus:outline-none"
                     onClick={() => setQty(qty > 1 ? qty-1 : qty)}>
                        <FiChevronDown />
                    </button>
                </div>
            </div>
            <Button className="px-20 w-full" onClick={handleAddToCart}>
                <FiShoppingBag size={24} />
                Add to Cart
            </Button>
            <Button variant="dark" className="px-20 w-full" onClick={handleCheckout}>
                Checkout Now
                <FiArrowRight size={24} />
            </Button>
        </div>
        
    )
}

export default ProductAction;