import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {  useEffect, useState } from "react";
import Swal from "sweetalert2";

const Checkout = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');

  useEffect(()=>{
    
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log('card', card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error?.message);
    } 
    else {
      console.log("[PaymentMethod", paymentMethod);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully add the card",
        showConfirmButton: false,
        timer: 1500
      });

    }
    
    
  };

  return (
    <div className="flex justify-center items-center ">
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
        className="bg-[#fff8ed] h-8 pt-2"
      />
      <p className="text-red-500">{cardError}</p>
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
