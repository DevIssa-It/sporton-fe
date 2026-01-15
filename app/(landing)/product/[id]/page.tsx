import Image from "next/image";
import ProductAction from "../../components/product-detail/product-action";
import priceFormatter from "@/app/utils/price-formatter";

const ProductDetail = () => {
    return (
        <main className="container mx-auto px-20 py-20 flex gap-12 min-h-[80vh]">
            <div className="bg-primary-light aspect-square min-w-125 flex justify-center items-center">
                <Image src="/image/products/product-4.svg" width={550} height={550} alt="product-4" className="aspect-square object-contain w-full"></Image>
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">SportsOn HyperSoccer v2</h1>
                <div className="bg-primary-light text-primary rounded-full py-2 px-6 w-fit mb-5">
                    Football
                </div>
                <p className="leading-loose mb-8">
                    The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats don't just perform—they make a statement. Experience the future of football footwear with v2's enhanced fit and cutting-edge traction.
                </p>
                <div className="text-primary text-3xl font-semibold mb-12">
                    {priceFormatter(458000)}
                </div>
                <ProductAction />
            </div>
        </main>
    )
}

export default ProductDetail;