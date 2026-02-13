'use client';

import Modal from "../ui/modal"
import "../../../globals.css";
import Button from "@/app/(landing)/components/ui/button";

type TBankInfoModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const BankInfoModal = ({isOpen, onClose}: TBankInfoModalProps) => {    
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account" maxWidth="md">
            <div className="flex flex-col gap-4">
                <div className="flex gap-7">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="input-group-admin">
                            <label htmlFor="bankName">Bank Name</label>
                            <input type="text" id="bankName" name="bankName" placeholder="e. g. Mandiri, BCA, BRI" />
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="accountNumber">Account Number</label>
                            <input type="text" id="accountNumber" name="accountNumber" placeholder="123124344234234" />
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="accountHolder">Account Holder</label>
                            <input type="text" id="accountHolder" name="accountHolder" placeholder="Holder Name as registered on the account" />
                        </div>
                    </div>
                </div>
                <Button className="ml-auto mt-2 rounded-lg">Add Bank Account</Button>
            </div>
        </Modal>
    )
}

export default BankInfoModal;