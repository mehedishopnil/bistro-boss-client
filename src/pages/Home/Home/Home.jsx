import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import BistroBoss from "../BistroBoss/BistroBoss";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import bgImage from "../../../assets/home/featured.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>

      <section>
        <div className="h-28 flex justify-center items-center bg-[#151515] text-white text-center">
          <h1 className="text-3xl font-bold font-[Raleway]">
            Call Us: +88 0192345678910
          </h1>
        </div>
      </section>

      <ChefRecommends></ChefRecommends>

      
        <section className="relative h-[848px] z-0 ">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          <div className="z-30">
            <SectionTitle
              subHeading={"---Check it out---"}
              heading={"FROM OUR MENU"}
            ></SectionTitle>
          </div>

          <div className="flex justify-center items-center p-20 relative z-20">
            <div>
              <img className="w-[548px] h-[400px]" src={bgImage} alt="" />
            </div>
            <div className="text-white ps-10 w-1/2">
              <h3>March 20, 2023</h3>
              <h3>WHERE CAN I GET SOME?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Home;
