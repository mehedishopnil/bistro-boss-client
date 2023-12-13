import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter(items => items.category === 'popular');

  return (
    <section className="pb-16">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
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

export default PopularMenu;
