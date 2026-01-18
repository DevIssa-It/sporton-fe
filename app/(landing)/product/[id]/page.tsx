import Image from "next/image";
import ProductAction from "../../components/product-detail/product-action";
import priceFormatter from "@/app/utils/price-formatter";
import { getAllProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

export type TPageProps = {
    params: Promise<{id: string}>;
}

const ProductDetail = async ({params} : TPageProps) => {
    const {id} = await params;
    const product = await getAllProductDetail(id);
    
    console.log('Product API Response:', JSON.stringify(product, null, 2)); 
    
    return (
        <main className="container mx-auto px-20 py-20 flex gap-12 min-h-[80vh] pt-40">
            <div className="bg-primary-light aspect-square w-130 h-130 flex justify-center items-center flex-shrink-0">
                <Image src={getImageUrl(product.imageUrl)} width={500} height={500} alt={product.name} className="object-contain max-w-full max-h-full"></Image>
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
                <div className="bg-primary-light text-primary rounded-full py-2 px-6 w-fit mb-5">
                    {product.category.name}
                </div>
                <p className="leading-loose mb-8">
                    {product.description}
                </p>
                <div className="text-primary text-3xl font-semibold mb-12">
                    {priceFormatter(product.price)}
                </div>
                <ProductAction product={product} stock={product.stock} />
            </div>
        </main>
    )
}

export default ProductDetail;