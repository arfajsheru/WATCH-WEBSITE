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
import { IoMdArrowDropleftCircle } from "react-icons/io";

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
            <div className="relative w-full h-[30vh] md:h-[80vh] lg:h-[90vh]">
              <img
                src={banner.imgUrl}
                alt="banner"
                className="object-cover brightness-50 w-full h-full md:h-[88vh] lg:h-[90vh]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-secondary rounded-full cursor-pointer">
        <IoMdArrowDropleftCircle className="font-bold" size={24} />
      </div>
      <div className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-secondary rounded-full cursor-pointer">
        <IoMdArrowDropleftCircle className="font-bold rotate-180" size={24} />
      </div>
    </div>
  );
};

export default Banner;
