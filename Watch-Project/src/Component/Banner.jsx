import React from "react";
import { bannerList } from "../data/bannerData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination,} from "swiper/modules";
// Import React Icons
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoIosStar, IoMdArrowDropleftCircle } from "react-icons/io";

const Banner = () => {
  return (
    <div className="relative shadow-md md:shadow-xl mb-6 md:mb-8 m-4 rounded-lg overflow-hidden flex cursor-pointer">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3000, // Adjusted delay to 3000ms (3 seconds)
          disableOnInteraction: false, // Ensures autoplay doesn't stop on interaction
        }}
        loop={true} // Infinite loop slider
        speed={1000} // Set speed to a reasonable value for smooth transitions
        className="mySwiper"
      >
        {bannerList.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div className="relative w-full h-[30vh] md:h-[80vh] lg:h-[85vh] rounded-lg overflow-hidden">
              <img
                src={banner.imgUrl}
                alt="banner"
                className="object-cover brightness-50 w-full h-full md:h-[88vh] lg:h-[90vh] rounded-lg"
              />

              {/* Right-aligned content on all screen sizes */}
              <div className="absolute inset-0 flex flex-col md:gap-9 justify-center text-center px-10">
                <h1 className="text-white text-md sm:text-2xl lg:text-7xl font-font5 mb-2 font-bold text-shadow-lg">
                  {banner.title1}
                </h1>
                <h2 className="text-white text-sm sm:text-xl lg:text-5xl font-font4 mb-4 font-bold text-shadow-lg">
                  {banner.title2}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-secondary rounded-full cursor-pointer">
        <IoMdArrowDropleftCircle className="font-bold" size={24} />
      </div>
      <div className="custom-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-secondary rounded-full cursor-pointer">
        <IoMdArrowDropleftCircle className="font-bold rotate-180" size={24} />
      </div>
    </div>
  );
};

export default Banner;
