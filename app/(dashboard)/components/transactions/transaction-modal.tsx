'use client';

import Modal from "../ui/modal"
import "../../../globals.css";
import Button from "@/app/(landing)/components/ui/button";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";
import { Transaction } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useState } from "react";

type TProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    transaction: Transaction | null;
    onStatusChange: (id: string, status: "paid" | "rejected") => Promise<void>;
}

const TransactionModal = ({isOpen, onClose, transaction, onStatusChange}: TProductModalProps) => {  
    const [isUpdating, setIsUpdating] = useState(false);

    if (!transaction) return;

    const handleStatusUpdate = async  (status: "paid" | "rejected") => {
        setIsUpdating(true);
        try {
            await onStatusChange(transaction._id, status);
        } catch (error) {
            console.error(error);
        } finally {
            setIsUpdating(false);
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
            <div className="flex gap-4">
                <div className="min-w-50">
                        <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
                        {
                            transaction.paymentProof ? (
                                <Image src={getImageUrl(transaction.paymentProof)} alt="payment proof" width={200} height={401} />
                            ) : (
                                <div className="text-center p-4">
                                    <p className="text-sm">No Payment Proof Uploaded</p>
                                </div>
                            )
                        }
                </div>
                <div className="w-full">
                    <h4 className="font-semibold text-sm mb-2">Order Details</h4>
                    <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-2.5 text-sm mb-5">
                        <div className="flex justify-between font-medium">
                            <div className="opacity-50">Date</div>
                            <div className="text-right">
                                {
                                    new Date(transaction.createdAt).toLocaleDateString("id-Id", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex justify-between font-medium">
                            <div className="opacity-50">Customer</div>
                            <div className="text-right">{transaction.customerName}</div>
                        </div>
                        <div className="flex justify-between font-medium">
                            <div className="opacity-50">Contact</div>
                            <div className="text-right">{transaction.customerContact}</div>
                        </div>
                        <div className="flex justify-between gap-20 font-medium">
                            <div className="opacity-50 whitespace-nowrap">Shipping Address</div>
                            <div className="text-right">{transaction.customerAddress}</div>
                        </div>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
                    <div className="space-y-3">
                        {transaction.purchasedItems.map((item, index) => (
                                <div key={index} className="border border-gray-400 rounded-lg p-2 flex gap-2 items-center">
                                    <div className="bg-gray-200 rounded aspect-square w-8 h-8">
                                        <Image src={getImageUrl(item.productId.imageUrl)} alt="product-1" width={32} height={32} className="object-cover"/>
                                    </div>
                                    <div className="font-medium text-sm">{item.productId.name}</div>
                                    <div className="font-medium ml-auto text-sm">{item.qty} units</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex justify-between text-sm mt-5">
                        <h4 className="font-semibold">Total</h4>
                        <h4 className="font-semibold text-primary">{priceFormatter(transaction.totalPayment)}</h4>
                    </div>
                    <div className="flex justify-end gap-5 mt-15">
                        {
                            isUpdating ? (
                            <div className="text-center">Updating...</div>) : (
                                <>
                                    <Button 
                                        className="text-primary! bg-primary-light! rounded-md" 
                                        size="small" 
                                        onClick={() => handleStatusUpdate("rejected")}
                                        disabled={isUpdating}
                                    >
                                        <FiX size={20}/> Reject
                                    </Button>
                                    <Button 
                                        className="text-white! bg-[#50C252]! rounded-md" 
                                        size="small" 
                                        onClick={() => handleStatusUpdate("paid")}
                                        disabled={isUpdating}
                                    >
                                        <FiCheck size={20}/> Approve
                                    </Button>
                                </>
                            )
                        }
                    </div>
                </div>
             </div>
        </Modal>
    )
}

export default TransactionModal;