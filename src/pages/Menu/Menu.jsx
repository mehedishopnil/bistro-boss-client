import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/home/chef-service.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../assets/menu/salad-bg.jpg";
import soupsImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((items) => items.category === "offered");
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const soups = menu.filter((items) => items.category === "soup");
  const salads = menu.filter((items) => items.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover
        img={menuImg}
        title={"Our Menu"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <div className="mb-20">
        <SectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"---Don't miss---"}
        ></SectionTitle>

        <MenuCategory items={offered}></MenuCategory>
      </div>

      <div className="mb-20">
        
        <MenuCategory 
        img={dessertImg}
        items={dessert}
        title={"dessert"}
        subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        ></MenuCategory>
      </div>

      <div className="mb-20">
        
        <MenuCategory 
        img={pizzaImg}
        title={"pizza"}
        items={pizza}
        subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        ></MenuCategory>
      </div>

      <div className="mb-20">
        <MenuCategory 
        img={saladsImg}
        title={"salads"}
        items={salads}
        subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        ></MenuCategory>
      </div>

      <div className="mb-20">
        <MenuCategory 
        img={soupsImg}
        title={"soups"}
        items={soups}
        subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
