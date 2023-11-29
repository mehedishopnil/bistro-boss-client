const ProductCard = ({ items }) => {
  const { image, name, recipe } = items;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn border-0 border-b-4 border-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827] hover:text-white">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
