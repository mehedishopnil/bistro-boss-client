import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../providers/AuthProviders";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const ChefRecommends = () => {
   const {recommendedMenu} = useContext(AuthContext);
   console.log(recommendedMenu);
  return (
    <section className="pt-16">
      <SectionTitle
        subHeading={"CHEF RECOMMENDS"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>

      <div>
        {
            recommendedMenu.map(items =>
                <ProductCard
                key={items._id}
                items = {items}
                >
                </ProductCard>
            )
        }
      </div>
    </section>
  );
};

export default ChefRecommends;
