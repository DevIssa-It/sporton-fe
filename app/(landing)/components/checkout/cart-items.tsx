import Image from "next/image";
import { cartList } from "../ui/cart-popup";
import Button from "../ui/button";
import priceFormatter from "@/app/utils/price-formatter";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";

const CartItems = () => {
     const totalPrice = cartList.reduce((total,item) => total + item.price * item.qty , 0)
     
    return (
         <div className="bg-white h-fit">
            <div className="px-5 py-4 border-b border-gray-200">
                <h2 className="font-bold text-lg">Cart Items</h2>
            </div>
             <div className="overflow-auto">
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
             </div>
             <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between font-semibold">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-xs">
                        {priceFormatter(totalPrice)}
                    </div>
                </div>
                <Button variant="dark" size="small" className="w-full">
                    Checkout Now <FiArrowRight size={16} />
                </Button>
            </div>
        </div>
    )
}

export default CartItems;