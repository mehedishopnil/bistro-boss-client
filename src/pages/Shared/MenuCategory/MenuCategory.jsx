import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";


const MenuCategory = ({items, title, subtitle, img}) => {
   
    return (
        <div className="pt-10">
            {title && <Cover
            img={img}
            title = {title}
            subtitle={subtitle}
            ></Cover>}

            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => 
                    <MenuItem
                    key={item._id}
                    item = {item}>
                    </MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4">
                    ORDER YOUR FAVOURITE FOOD
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;