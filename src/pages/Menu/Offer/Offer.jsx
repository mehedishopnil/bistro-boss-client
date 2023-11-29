import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const Offer = () => {
  const [menu] = useMenu();
  const offer = menu.filter(items => items.category === 'offered')

  return (
    <section className="my-10">
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></SectionTitle>

        <div className="container mx-auto md:mx-auto pb-10 grid grid-cols-2 gap-10">
            {
            offer.map((item) => (
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
    </section>
  );
};

export default Offer;
