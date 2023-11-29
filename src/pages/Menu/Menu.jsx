import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img1 from "../../assets/menu/banner3.jpg";
import img2 from "../../assets/home/chef-service.jpg"
import Offer from "./Offer/Offer";
import Dessert from "./Dessert/Dessert";
import Pizza from "./Pizza/Pizza";
import Salads from "./Salads/Salads";
import Soups from "./Soups/Soups";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="mb-20">
      <Cover
        img={img1}
        header={"OUR MENU"}
        subHeader={"Would you like to try a dish?"}
      ></Cover>
      <Offer></Offer>
      </div>

      <div className="mb-20">
      <Cover
        img={img2}
        header={"DESSERTS"}
        subHeader={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <Dessert></Dessert>
      </div>

      <div className="mb-20">
      <Cover
        img={img2}
        header={"PIZZA"}
        subHeader={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <Pizza></Pizza>
      </div>


      <div className="mb-20">
      <Cover
        img={img2}
        header={"SALADS"}
        subHeader={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <Salads></Salads>
      </div>


      <div className="mb-20">
      <Cover
        img={img2}
        header={"SOUPS"}
        subHeader={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <Soups></Soups>
      
      </div>
      
    </div>
  );
};

export default Menu;
