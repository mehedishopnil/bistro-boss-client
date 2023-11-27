import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import BistroBoss from "../BistroBoss/BistroBoss";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import bgImage from "../../../assets/home/featured.jpg";
import "./Home.css";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>

      <section>
        <div className="h-36 flex justify-center items-center bg-[#151515] text-white text-center">
          <h1 className="text-3xl font-bold font-[Raleway]">
            Call Us: +88 0192345678910
          </h1>
        </div>
      </section>

      <ChefRecommends></ChefRecommends>

      <section className="relative my-20 h-[848px] z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        <div className="relative text-white z-20">
          <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
          ></SectionTitle>
        </div>

        <div className="flex justify-center items-center p-20 relative z-30">
          <div>
            <img className="w-[548px] h-[400px]" src={bgImage} alt="" />
          </div>
          <div className="text-white space-y-3 ps-10 w-1/2">
            <h3 className="text-xl font-semibold">March 20, 2023</h3>
            <h3 className="text-xl font-semibold">WHERE CAN I GET SOME?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="border-b-2">READ MORE</button>
          </div>
        </div>
      </section>

      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
