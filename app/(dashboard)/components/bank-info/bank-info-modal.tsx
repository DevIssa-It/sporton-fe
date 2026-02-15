'use client';

import Modal from "../ui/modal"
import "../../../globals.css";
import Button from "@/app/(landing)/components/ui/button";
import { Bank } from "@/app/types";
import { useEffect, useState } from "react";
import { createBank, updateBank } from "@/app/services/bank.service";
import { toast } from "react-toastify";

type TBankInfoModalProps = {
    isOpen: boolean;
    onClose: () => void;
    bank: Bank | null;
    onSuccess: () => void;
}

const BankInfoModal = ({isOpen, onClose, bank, onSuccess}: TBankInfoModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState<Partial<Bank>>({
        bankName: "",
        accountNumber: "",
        accountName: "",
    });

    const isEditMode = !!bank;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {id, value} = e.target;
        setFormData((prev) => ({...prev, [id]: value}));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (isEditMode) {
                await updateBank(bank._id, formData);
            } else {
                await createBank(formData);
            }

            setFormData({
                bankName: "",
                accountNumber: "",
                accountName: "",
            })

            onSuccess?.();
            onClose();
            toast.success(isEditMode ? "Bank info updated successfully!" : "Bank info created successfully!");
        } catch (error) {
            console.error(isEditMode ? "Failed to update bank info:" : "Failed to create bank info:", error);
            toast.error(isEditMode ? "Failed to update bank info" : "Failed to create bank info");
        } finally {
            setIsSubmitting(false);
        }
    }

    useEffect(() => {
        if (isEditMode && isOpen) {
            setFormData({
                bankName: bank.bankName,
                accountNumber: bank.accountNumber,
                accountName: bank.accountName,
            })
        } else if (isOpen) {
            setFormData({
                bankName: "",
                accountNumber: "",
                accountName: "",
            })
        }
    }, [bank, isOpen])

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account" maxWidth="md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex gap-7">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="input-group-admin">
                            <label htmlFor="bankName">Bank Name</label>
                            <input type="text" id="bankName" name="bankName" placeholder="e. g. Mandiri, BCA, BRI" value={formData.bankName} onChange={handleChange} />
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="accountNumber">Account Number</label>
                            <input type="text" id="accountNumber" name="accountNumber" placeholder="123124344234234" value={formData.accountNumber} onChange={handleChange} />
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="accountName">Account Holder</label>
                            <input type="text" id="accountName" name="accountName" placeholder="Holder Name as registered on the account" value={formData.accountName} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <Button className="ml-auto mt-2 rounded-lg" type="submit" onClick={handleSubmit} disabled={isSubmitting}>
                    {isEditMode ? "Update Bank Info" : "Add Bank Account"}
                </Button>
            </form>
        </Modal>
    )
}

export default BankInfoModal;