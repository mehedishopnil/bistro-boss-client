import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="py-24 mt-24">
      <div className="text-center">
        <h3 className="font-semibold py-5 text-[#D99904]">
          ---From 11:00am to 10:00pm---
        </h3>
        <h1 className="text-2xl pb-5 text-semibold">ORDER ONLINE</h1>
      </div>

      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className=" mb-10">
            <img className="mb-2 rounded w-full" src={slide1} alt="" />
            <h2 className="text-center text-xl text-white -mt-10">Salads</h2>
          </SwiperSlide>

          <SwiperSlide >
            <img className="mb-2 rounded w-full" src={slide2} alt="" />
            <h2 className="text-center text-xl text-white -mt-10">Salads</h2>
          </SwiperSlide>

          <SwiperSlide >
            <img className="mb-2 rounded w-full" src={slide3} alt="" />
            <h2 className="text-center text-xl text-white -mt-10">Salads</h2>
          </SwiperSlide>

          <SwiperSlide >
            <img className="mb-2 rounded w-full" src={slide4} alt="" />
            <h2 className="text-center text-xl text-white -mt-10">Salads</h2>
          </SwiperSlide>

          <SwiperSlide >
            <img className="mb-2 rounded w-full" src={slide5} alt="" />
            <h2 className="text-center text-xl text-white -mt-10">Salads</h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
