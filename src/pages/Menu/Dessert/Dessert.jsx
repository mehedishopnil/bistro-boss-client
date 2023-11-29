import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const Dessert = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(items => items.category === "dessert");
    const dessertFirstLimit = dessert.slice(0,6);
    return (
        <section>
           <div className="container mx-auto md:mx-auto pb-10 grid grid-cols-2 gap-10">
        {
        dessertFirstLimit.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 text-center font-semibold">
        ORDER YOUR FAVOURITE FOOD
        </button>
      </div> 

        </section>
    );
};

export default Dessert;