'use client';

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../components/products/product-table";
import { useState } from "react";
import ProductModal from "../../components/products/product-modal";

const CategoryManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleCloseModal = () => {
        setIsOpen(false);
    }


    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="font-bold text-xl">
                        Category Management
                    </h1>
                    <p className="opacity-50 text-sm">Organize your products into categories.</p>
                </div>
                <Button size="small" className="rounded-lg" onClick={() => setIsOpen(true)} ><FiPlus size={20} /> Add Category</Button>
            </div>
            <ProductTable />
            <ProductModal isOpen={isOpen} onClose={handleCloseModal} />
        </div>
    )
}

export default CategoryManagement;