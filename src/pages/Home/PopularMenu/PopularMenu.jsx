import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { AuthContext } from "../../../providers/AuthProviders";

const PopularMenu = () => {
    const {popularMenu} = useContext(AuthContext);

    return (
        <section className="pb-16">
            <SectionTitle
            subHeading={'---Check it out---'}
            heading={'FROM OUR MENU'}
            >
            </SectionTitle>

            <div className="container mx-auto md:mx-auto pb-10 grid grid-cols-2 gap-10">
                {
                    popularMenu.map(item => <MenuItem 
                    key={item._id}
                    item = {item}
                    >
                    </MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className="text-center font-semibold">VIEW FULL MENU</button>
            </div>
        </section>
    );
};

export default PopularMenu;