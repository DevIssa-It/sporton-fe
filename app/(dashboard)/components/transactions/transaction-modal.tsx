'use client';

import Modal from "../ui/modal"
import "../../../globals.css";
import Button from "@/app/(landing)/components/ui/button";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";

type TProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const TransactionModal = ({isOpen, onClose}: TProductModalProps) => {    
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
            <div className="flex gap-4">
                <div>
                        <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
                        <Image src="/image/payment-proof.png" alt="payment proof" width={200} height={401} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-2">Order Details</h4>
                        <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-2.5 text-sm mb-5">
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50">Date</div>
                                <div className="text-right">23/02/2026 19:32</div>
                            </div>
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50">Customer</div>
                                <div className="text-right">John Doe</div>
                            </div>
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50">Contact</div>
                                <div className="text-right">08231223123</div>
                            </div>
                            <div className="flex justify-between gap-20 font-medium">
                                <div className="opacity-50 whitespace-nowrap">Shipping Address</div>
                                <div className="text-right">Merdeka Street, Jakarta, Indonesia, 332122</div>
                            </div>
                        </div>
                        <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
                        <div className="border border-gray-400 rounded-lg p-2 flex gap-2 items-center">
                            <div className="bg-gray-200 rounded aspect-square w-8 h-8">
                                <Image src="/image/products/product-1.svg" alt="product-1" width={32} height={32} className="object-cover"/>
                            </div>
                            <div className="font-medium text-sm">SportsOn Hyperfast Shoes</div>
                            <div className="font-medium ml-auto text-sm">3 units</div>
                        </div>
                        <div className="flex justify-between text-sm mt-5">
                            <h4 className="font-semibold">Total</h4>
                            <h4 className="font-semibold text-primary">{priceFormatter(1000000)}</h4>
                        </div>
                        <div className="flex justify-end gap-5 mt-15">
                            <Button className="text-primary! bg-primary-light! rounded-md" size="small"><FiX size={20}/> Reject</Button>
                            <Button className="text-white! bg-[#50C252]! rounded-md" size="small"><FiCheck size={20}/> Approve</Button>
                        </div>
                    </div>
                </div>
        </Modal>
    )
}

export default TransactionModal;