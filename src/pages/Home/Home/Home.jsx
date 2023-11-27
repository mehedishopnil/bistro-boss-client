import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import BistroBoss from "../BistroBoss/BistroBoss";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefRecommends from "../ChefRecommends/ChefRecommends";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>

      <div>
        <div className="h-28 flex justify-center items-center bg-[#151515] text-white text-center">
          <h1 className="text-3xl font-bold font-[Raleway]">Call Us: +88 0192345678910</h1>
        </div>
      </div>
      <ChefRecommends></ChefRecommends>
    </div>
  );
};

export default Home;
