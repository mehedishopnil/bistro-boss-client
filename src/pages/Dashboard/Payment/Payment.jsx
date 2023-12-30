import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

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


    </div>
  );
};

export default Payment;
