import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmited from "../../components/order-status/order-submited";
import { getTransactionById } from "@/app/services/transaction.service";
import { TPageProps } from "../../product/[id]/page";
import OrderRejected from "../../components/order-status/order-reject";

const OrderStatus = async ({params}: TPageProps) => {
    const {id} = await params;
    const transaction = await getTransactionById(id);
    
    return (
        <main className="bg-gray-100 min-h-[80vh] py-10 pt-30">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Order Status</h1>
            </div>
            {transaction.status === "pending" && <OrderSubmited />}
            {transaction.status === "paid" && <OrderConfirmed />}
            {transaction.status === "rejected" && <OrderRejected />}
        </main>
    )   
}

export default OrderStatus;