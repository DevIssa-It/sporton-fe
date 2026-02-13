'use client';

import Modal from "../ui/modal"
import "../../../globals.css";
import Button from "@/app/(landing)/components/ui/button";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";

type TCategoryModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const CategoryModal = ({isOpen, onClose}: TCategoryModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [ImagePreview, setImagePreview] = useState<string | null>(null);
    
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add New Category">
            <div className="flex flex-col gap-4">
                <div className="flex gap-7">
                    <div className="min-w-60">
                        <ImageUploadPreview label="Category Image" className="h-65" value={ImagePreview} onChange={
                            (file) => {
                                setImageFile(file);
                                setImagePreview(URL.createObjectURL(file));
                            }
                        } />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="input-group-admin">
                            <label htmlFor="categoryName">Category Name</label>
                            <input type="text" id="categoryName" name="categoryName" placeholder="e. g. Running" />
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description" rows={7} placeholder="Category Details..." />
                        </div>
                    </div>
                </div>
                <Button className="ml-auto mt-2 rounded-lg">Create Category</Button>
            </div>
        </Modal>
    )
}

export default CategoryModal;