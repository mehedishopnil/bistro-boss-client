import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const Soups = () => {
    const [menu] = useMenu();
    const soups = menu.filter(items => items.category === "soup");
    const soupsLimited = soups.slice(0,6);
    return (
        <div>
            <div className="container mx-auto md:mx-auto pb-10 grid grid-cols-2 gap-10">
        {
        soupsLimited.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={'/order'}>
        <button className="btn btn-outline border-0 border-b-4 text-center font-semibold">
        ORDER YOUR FAVOURITE FOOD
        </button>
        </Link>
      </div>
        </div>
    );
};

export default Soups;