import { Transaction } from "@/app/types";
import priceFormatter from "@/app/utils/price-formatter";
import {FiEye } from "react-icons/fi";

type TTransactionTableProps = {
    onViewDetails: (transaction: Transaction) => void;
    transactions: Transaction[];
}

const TransactionTable = ({onViewDetails, transactions}: TTransactionTableProps) => {
    const getStatusColor = (status: string) => {
        switch (status.toLocaleLowerCase()) {
            case "pending":
                return "bg-yellow-100 text-yellow-600 border-yellow-400";
                break;
            case "paid":
                return "bg-green-100 text-green-600 border-green-400";
                break;
            case "rejected":
                return "bg-red-100 text-red-600 border-red-400";
                break;
            default:
                break;
        }
    }
    
    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-6 py-4 font-semibold">Customer</th>
                        <th className="px-6 py-4 font-semibold">Contact</th>
                        <th className="px-6 py-4 font-semibold">Total</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((data) => (
                        <tr key={data._id} className="border-b border-gray-200 last:border-b-0">
                           
                            <td className="px-6 py-4 font-medium">
                                {
                                    new Date(data.createdAt).toLocaleDateString("id-Id", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })
                                }
                            </td>
                            <td className="px-6 py-4 font-medium">{data.customerName}</td>
                            <td className="px-6 py-4 font-medium">{data.customerContact}</td>
                            <td className="px-6 py-4 font-medium">{priceFormatter(data.totalPayment)}</td>
                            <td className="px-6 py-4 font-medium">
                                <div className={`px-4 py-1 rounded-full border text-center w-fit text-sm uppercase ${getStatusColor(data.status)}`}>
                                    {data.status}
                                </div>
                            </td>
                            <td>
                                <div className="px-7 py-4 flex self-center items-center gap-3 text-gray-600">
                                    <button onClick={() => onViewDetails(data)} className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 w-fit rounded-md px-2 py-1"><FiEye size={20} /> View Details</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionTable;