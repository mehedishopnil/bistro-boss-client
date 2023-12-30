import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod", paymentMethod);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} 
    className="w-1/2 flex flex-col  justify-center">
      <CardElement
        options={{
          style: {
            
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
                
              },
            },
            
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe}
        className="btn text-center text-white bg-[#D1A054] mt-10 hover:bg-[#c49247]"
      >
        Pay
      </button>
    </form>
    </div>
  );
};

export default Checkout;
