import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../providers/AuthProviders";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const ChefRecommends = () => {
   const {recommendedMenu} = useContext(AuthContext);
   const limitedItems = recommendedMenu.slice(0,3);
  return (
    <section className="pt-16">
      <SectionTitle
        subHeading={"CHEF RECOMMENDS"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>

      <div className="container mx-auto grid grid-cols-3 gap-16 p-10 justify-center items-center">
        {
            limitedItems.map(items =>
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
