import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item)=> sum + item.price,0);
  const price = parseFloat(total.toFixed(2))
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro | Payment</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <SectionTitle
        heading="PAYMENT"
        subHeading="Please Complete the Process"
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <Checkout cart={cart} price={price}></Checkout>
      </Elements>


    </div>
  );
};

export default Payment;
