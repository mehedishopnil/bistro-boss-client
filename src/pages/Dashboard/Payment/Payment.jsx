import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
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
        <Checkout></Checkout>
      </Elements>


    </div>
  );
};

export default Payment;
