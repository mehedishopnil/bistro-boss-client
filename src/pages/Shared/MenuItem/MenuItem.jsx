const MenuItem = ({ item }) => {
  const { image, recipe, name, price } = item;
 
  return (
    <div className="container flex px-16 gap-y-4">
      <div>
        <img className="w-16 h-16  rounded-r-full rounded-b-full" src={image} alt="" />
      </div>
      <div className="pl-5">
        <div className="flex ">
          <h1 className="font-[Cinzel] text-xl ">{name}</h1>
          <p>-------------</p>
        </div>
        <p className="text-[#737373] w-10/12">{recipe}</p>
      </div>

      <div>
        <p className="text-[#BB8506]">${price}</p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default MenuItem;
