import PaymentOptions from "../components/payment/payment-options";
import PaymentSteps from "../components/payment/payment-steps";

const Payment = () => {
    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto py-10">
                <h1 className="text-4xl font-bold text-center mb-8">Payment</h1>
                <div className="grid grid-cols-2 gap-14">
                    <PaymentOptions />
                    <PaymentSteps />
                </div>
            </div>
        </main>
    )
}

export default Payment;