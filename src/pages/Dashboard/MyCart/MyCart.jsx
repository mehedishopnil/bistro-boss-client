import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import CartItems from "./CartItems/CartItems";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const totalPrice = Number(
    cart.reduce((sum, item) => item.price + sum, 0).toFixed(2)
  );
  return (
    <div className="container mx-auto w-4/5">
        <Helmet>
        <title>Bistro | MyCart</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="flex justify-between font-bold font-[Cinzel] uppercase gap-10 my-5">
        <h1 className="text-3xl">Total Order: {cart.length}</h1>
        <h1 className="text-3xl">Total Price: ${totalPrice}</h1>
        <Link>
          <button className="btn bg-[#D1A054] text-white hover:bg-[#c39043]">PAY</button>
        </Link>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table " >
            {/* head */}
            <thead className="uppercase text-sm rounded font-bold mt-10 text-white bg-[#D1A054] overflow-hidden">
              <tr className="">
                <th></th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>

            {/* row 1 */}
            {cart.map((items) => (
              <CartItems key={items._id} items={items}></CartItems>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
