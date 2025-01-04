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
import { EffectFade, Navigation, Pagination } from "swiper/modules";
// Import React Icons
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoIosStar, IoMdArrowDropleftCircle } from "react-icons/io";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[EffectFade, Navigation, Pagination]}
        autoplay={{ delay: 5000 }} // Increase delay to slow down autoplay
        loop={true} // Infinite loop slider
        speed={1500} // Set speed to slow down transition
        className="mySwiper"
      >
        {bannerList.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div className="relative w-full h-[30vh] md:h-[80vh] lg:h-[85vh]">
              <img
                src={banner.imgUrl}
                alt="banner"
                className="object-cover brightness-50 w-full h-full md:h-[88vh] lg:h-[90vh]"
              />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center text-center items-center p-10 sm:p-40">
                <h1 className="text-white text-lg font-font3 sm:text-4xl font-bold mb-2">
                  {banner.title1}
                </h1>
                <h2 className="text-white text-sm font-font4 sm:text-2xl mb-4">
                  {banner.title2}
                </h2>
                <div className="flex items-center text-sm sm:text-lg mb-4">
                  {[...Array(Math.floor(banner.rating))].map((_, i) => (
                    <IoIosStar key={i} className="text-primary" />
                  ))}
                  {banner.rating % 1 !== 0 && (
                    <FaStarHalfStroke className="text-secondary" />
                  )}
                </div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white font-navfont  px-6 py-3 rounded-lg text-sm sm:text-base font-normal transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary">
  {banner.buttonText}
</button>
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
