import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const categoryData = [
    {
        name: "Running",
        imageUrl: "/image/categories/category-running.svg",
        description: "All Running Items, Shoes, Shirts"
    },
    {
        name: "Football",
        imageUrl: "/image/categories/category-football.svg",
        description: "All Football Items, Shoes, Shirts"
    }
]

type TCategoryTableProps = {
    categories: Category[],
    onEdit: (category: Category) => void,
    onDelete: (id: string) => void,
}

const CategoryTable = ({categories, onEdit, onDelete}: TCategoryTableProps) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">Description</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((data, index) => (
                        <tr key={index} className="border-b border-gray-200 last:border-b-0">
                            <td className="px-6 py-4 font-medium">
                                <div className="flex gap-2 items-center">
                                    <div className="aspect-square bg-gray-100 rounded-md">
                                        <Image src={getImageUrl(data.imageUrl)} alt={data.name} width={48} height={48} className="aspect-square object-contain" />
                                    </div>
                                    <span>{data.name}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-medium">{data.description}</td>
                            <td>
                                <div className="px-7 py-4 flex self-center items-center gap-3 text-gray-600">
                                    <button type="button" title="Edit category" onClick={() => onEdit?.(data)} className="cursor-pointer"><FiEdit2 size={20} /></button>
                                    <button type="button" title="Delete category" onClick={() => onDelete?.(data._id)} className="cursor-pointer"><FiTrash2 size={20} /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CategoryTable;