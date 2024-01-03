import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import './CheckoutForm.css'

const Checkout = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if(price > 0){
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log("card", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error?.message);
    } else {
      // console.log("PaymentMethod", paymentMethod);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully add the card",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      //save payment information to the server::
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map(item => item._id),
        menuItems: cart.map(item => item.menuItemId),
        status: 'Service Pending',
        itemNames: cart.map(item => item.name)
      };

      axiosSecure.post('/payments',payment)
      .then(res =>{
        console.log(res.data);
        if(res.data.result.insertedId){
          //display confirm
        }
      })
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 flex flex-col  justify-center"
      >
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
          disabled={!stripe || !clientSecret || processing}
          className="btn text-center text-white bg-[#D1A054] mt-10 hover:bg-[#c49247]"
        >
          Pay
        </button>

        <div className="">
          {transactionId && (
            <p className="text-blue-500 text-center pt-5">
              Transaction Complete with Transaction id:{" "}
              <span className="text-green-600">{transactionId}</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Checkout;
