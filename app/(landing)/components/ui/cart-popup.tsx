import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import Button from "./button";

export const cartList = [
    {
        name: "SportsOn Product 1",
        category: "Running",
        price:  329000,
        qty: 2,
        imgUrl: "product-1.svg",
    },
    {
        name: "SportsOn Product 2",
        category: "Tennis",
        price: 999000,
        qty: 3,
        imgUrl: "product-2.svg",   
    },
    {
        name: "SportsOn Product 3",
        category: "Running",
        price: 119000,
        qty: 2,
        imgUrl: "product-3.svg",
    },
]
const CartPopup = () => {
    const totalPrice = cartList.reduce((total,item) => total + item.price * item.qty , 0)

 return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-50">
        <div className="p-4 border-b border-gray-200 font-bold text-center">
            Shopping Cart
        </div>
        {
            cartList.map((items, index) => (
                <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
                    <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                        <Image 
                            src={`/image/products/${items.imgUrl}`} 
                            width={63} 
                            height={63} 
                            alt={items.name} 
                            className="aspect-square object-contain"
                        />
                    </div>
                    <div className="self-center">
                        <div className="text-sm font-medium">{items.name}</div>
                        <div className="flex gap-3 font-medium text-xs">
                            <div>{items.qty}x</div>
                            <div className="text-primary">{priceFormatter(items.price)}</div>
                        </div>
                    </div>
                    <Button 
                        size="small" 
                        variant="ghost"
                        className="w-7 h-7 p-0! self-center ml-auto">
                        <FiTrash2 />
                    </Button>
                </div>
            ))}
            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between font-semibold">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-xs">
                        {priceFormatter(totalPrice)}
                    </div>
                </div>
                <Button variant="dark" size="small" className="w-full mt-4">
                    Checkout Now <FiArrowRight size={16} />
                </Button>
            </div>
    </div>
 )
}

export default CartPopup;