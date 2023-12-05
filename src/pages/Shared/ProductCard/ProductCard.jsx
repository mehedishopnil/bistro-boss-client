import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";

const ProductCard = ({ items }) => {
  const { user } = useContext(AuthContext);

  const { image, name, recipe } = items;
  const handleAddToCart = (items) => {
    console.log(items);
    if (user) {
      fetch("http://localhost:5000/cart")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Registration Successful",
              showConfirmButton: false,
              timer: 1500,
            });
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
