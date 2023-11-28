import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../providers/AuthProviders";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { StarRatingInput } from "react-star-rating-input";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const { reviews } = useContext(AuthContext);
  console.log(reviews);
  return (
    <section className="container mx-auto my-20 w-2/3 ">
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      ></SectionTitle>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper py-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center flex flex-col items-center gap-y-4 text-gray-900">

              <div >
                <Rating 
                style={{ maxWidth: 180 }} 
                value={review.rating} 
                readOnly />
              </div>
                
              <p className="px-28">{review.details}</p>
              <h2 className="text-xl font-semibold text-[#CD9003]">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
