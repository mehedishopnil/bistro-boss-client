import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img1 from "../../assets/menu/banner3.jpg";
import img2 from "../../assets/home/chef-service.jpg"
import Offer from "./Offer/Offer";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Cover
        img={img1}
        header={"OUR MENU"}
        subHeader={"Would you like to try a dish?"}
      ></Cover>

      <Offer></Offer>

      <Cover
        img={img2}
        header={"OUR MENU"}
        subHeader={"Would you like to try a dish?"}
      ></Cover>
      <Offer></Offer>
    </div>
  );
};

export default Menu;
