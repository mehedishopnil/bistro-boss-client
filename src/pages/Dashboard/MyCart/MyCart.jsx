import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyCart = () => {
  const [cart, refetch] = useCart();

  // Calculate total price of items in the cart
  const totalPrice = Number(
    cart.reduce((sum, item) => item.price + sum, 0).toFixed(2)
  );

  // Handle item deletion from the cart
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Send DELETE request to the server
        fetch(`https://bistro-boss-server-rho-nine.vercel.app/cart/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Server response:", data);
            if (data.deletedCount > 0) {
              // Refetch cart data after successful deletion
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
          });
      }
    });
  };

  return (
    <div className="container mx-auto w-4/5">
      <Helmet>
        <title>Bistro | My Cart</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="flex justify-between font-bold font-[Cinzel] uppercase gap-10 my-5">
        <h1 className="text-3xl">Total Order: {cart.length}</h1>
        <h1 className="text-3xl">Total Price: ${totalPrice}</h1>
        <Link to="/dashboard/payment">
          <button className="btn bg-[#D1A054] text-white hover:bg-[#c39043]">
            PAY
          </button>
        </Link>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Head */}
            <thead className="uppercase text-sm rounded font-bold mt-10 text-white bg-[#D1A054] overflow-hidden">
              <tr>
                <th></th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Product Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.email}</div>
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-md text-xl text-white bg-[#B91C1C] hover:bg-[#931616]"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
