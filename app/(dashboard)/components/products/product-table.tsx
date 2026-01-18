import { tr } from "react-day-picker/locale";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const productData = [
    {
        name: "SportOn Product 1",
        imageUrl: "/image/products/product-1.svg",
        category: "Running",
        price: 289000,
        stock: 3
    },
    {
        name: "SportOn Product 2",
        imageUrl: "/image/products/product-2.svg",
        category: "Football",
        price: 349000,
        stock: 5
    },
    {
        name: "SportOn Product 3",
        imageUrl: "/image/products/product-3.svg",
        category: "Basketball",
        price: 399000,
        stock: 7
    }
]

const ProductTable = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Product</th>
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">Price</th>
                        <th className="px-6 py-4 font-semibold">Stock</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((data, index) => (
                        <tr key={index} className="border-b border-gray-200 last:border-b-0">
                            <td className="px-6 py-4 font-medium">
                                <div className="flex gap-2 items-center">
                                    <div className="aspect-square bg-gray-100 rounded-md">
                                        <Image src={data.imageUrl} alt={data.name} width={48} height={48} className="aspect-square object-contain" />
                                    </div>
                                    <span>{data.name}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-medium">
                                <div className="rounded-md bg-gray-200 px-3 py-1 w-fit">{data.category}</div>
                            </td>
                            <td className="px-6 py-4 font-medium">{priceFormatter(data.price)}</td>
                            <td className="px-6 py-4 font-medium">{data.stock} units</td>
                            <td>
                                <div className="px-7 py-4 flex self-center items-center gap-3 text-gray-600">
                                    <button><FiEdit2 size={20} /></button>
                                    <button><FiTrash2 size={20} /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;