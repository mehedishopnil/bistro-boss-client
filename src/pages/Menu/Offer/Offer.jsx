import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import { AuthContext } from "../../../providers/AuthProviders";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const Offer = () => {
  const { popularMenu } = useContext(AuthContext);

  return (
    <section className="my-10">
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></SectionTitle>

      <div className="container mx-auto md:mx-auto pb-10 grid grid-cols-2 gap-10">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 text-center font-semibold">
          VIEW FULL MENU
        </button>
      </div>
    </section>
  );
};

export default Offer;
