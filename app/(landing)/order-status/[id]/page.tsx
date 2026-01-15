'use client'

import { useState } from "react";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmited from "../../components/order-status/order-submited";

const OrderStatus = () => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    
    return (
        <main className="bg-gray-100 min-h-[80vh] py-10">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Order Status</h1>
            </div>
            {
                isConfirmed ? <OrderConfirmed /> : <OrderSubmited />
            }
        </main>
    )   
}

export default OrderStatus;