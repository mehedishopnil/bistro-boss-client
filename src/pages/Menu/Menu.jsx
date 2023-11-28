import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img from '../../assets/menu/banner3.jpg'

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover
      img={img}
      header={'OUR MENU'}
      subHeader={'Would you like to try a dish?'}
      ></Cover>
    </div>
  );
};

export default Menu;
