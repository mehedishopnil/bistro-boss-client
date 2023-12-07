import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const totalPrice = Number(
    cart.reduce((sum, item) => item.price + sum, 0).toFixed(2)
  );

  const handleDelete = (items) => {
    console.log("delete button check the item:", items);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${items._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Server response:", data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
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
        <title>Bistro | MyCart</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="flex justify-between font-bold font-[Cinzel] uppercase gap-10 my-5">
        <h1 className="text-3xl">Total Order: {cart.length}</h1>
        <h1 className="text-3xl">Total Price: ${totalPrice}</h1>
        <Link>
          <button className="btn bg-[#D1A054] text-white hover:bg-[#c39043]">
            PAY
          </button>
        </Link>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table ">
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
                <tbody className="" style={{ padding: "30px" }} key={items._id}>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={items.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{items.name}</div>
                      <div className="text-sm opacity-50">{items.email}</div>
                    </div>
                  </td>

                  <td>{items.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(items)}
                      className="btn btn-md text-xl text-white bg-[#B91C1C] hover:bg-[#931616]"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </th>
                </tr>
                </tbody>
              ))}
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
