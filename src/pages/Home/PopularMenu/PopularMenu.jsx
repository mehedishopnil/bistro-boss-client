import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(items => items.category === "popular");
            setMenu(popularItems);
        })
    },[])

    console.log(menu);
    return (
        <section>
            <SectionTitle
            subHeading={'---Check it out---'}
            heading={'FROM OUR MENU'}
            >
            </SectionTitle>

            <div>
                {
                    menu.map(item => <MenuItem 
                    key={item._id}
                    item = {item}
                    >
                    </MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;