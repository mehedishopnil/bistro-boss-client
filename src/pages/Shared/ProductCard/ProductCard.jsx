import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ProductCard = ({ items }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

 
  const { image, name, recipe , _id} = items;
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const orderItem = {menuItemId:_id, name, image, email:user.email  }
      fetch("http://localhost:5000/cart", {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully added on Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          } 
        });
    }
    else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LogIn Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state:{from:location}});
        }
      });
    }
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(items)}
            className="btn border-0 border-b-4 border-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827] hover:text-white"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
