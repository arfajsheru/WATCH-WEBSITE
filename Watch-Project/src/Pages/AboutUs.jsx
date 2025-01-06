import React from "react";
import aboutusimg from "../assets/aboutus2.jpeg";
import aboutus1 from "../assets/aboutus2.webp";
import aboutus2 from "../assets/aboutus4.webp";
import aboutus3 from "../assets/aboutus5.webp";
const AboutUs = () => {
  return (
    // <div className="flex items-center justify-center min-h-screen px-3">
    //   <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md">
    //     {/* Heading */}
    //     <h1 className="text-2xl md:text-3xl font-bold text-secondary">
    //     🛠️ Hi, I'm Arfaj Sheru! 🚀
    //     </h1>

    //     {/* Message */}
    //     <p className="mt-4 text-gray-700 text-sm md:text-lg leading-relaxed">
    //       AboutUs section of the website is currently under development. I'm
    //       working hard to bring you something amazing. Stay tuned for updates!
    //     </p>

    //     {/* Divider */}
    //     <div className="mt-6 border-t border-gray-200"></div>

    //     {/* Animated Progress Bar */}
    //     <div className="mt-6">
    //       <p className="text-gray-500 text-sm mb-2">Progress: 45%</p>
    //       <div className="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
    //         <div
    //           className="absolute left-0 top-0 h-full bg-secondary rounded-full animate-progress"
    //           style={{ width: "45%" }}
    //         ></div>
    //       </div>
    //     </div>

    //     {/* Loading Spinner */}
    //     <div className="mt-8 flex flex-col items-center">
    //       <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
    //       <p className="mt-2 text-gray-500 text-sm">Loading...</p>
    //     </div>

    //     {/* Footer */}
    //     <div className="mt-8">
    //       <p className="text-sm text-gray-500">© 2025 Arfaj Sheru. All rights reserved.</p>
    //     </div>
    //   </div>
    // </div>
    <div className="mb-10">
      <div className="relative mt-3 sm:mt-4 md:mt-6 mb-4 space-y-24">
        <div className="flex flex-col items-center justify-center space-y-1">
          {/* Title */}
          <h1 className="text-black font-bold uppercase text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-widest text-shadow-lg font-font4">
            About-us
          </h1>

          {/* Underline */}
          <span className="block w-12 h-[2px] sm:w-16 md:w-20 lg:w-24 xl:w-32 bg-secondary"></span>
        </div>


        <div className="flex flex-col md:flex-row mx-2 sm:mx-5 md:mx-11 gap-5 sm:gap-7 md:gap-8 items-center">
          <div className="w-full md:w-2/4">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed sm:leading-snug md:leading-normal lg:leading-loose font-font5 text-gray-600">
              Founded in 1994, in Long Island City, NY
            </h1>

            <p className="text-xs sm:text-sm md:text-md lg:text-xl">
              Watchcraft is the horological studio of artist, Eduardo Milieris.
              The Watchcraft studio, situated among factories and warehouses, is
              energized by the life of the city, the raw urban environment at
              work. All the voices, the people, the cultures, are channeled
              through Milieris’ hands and understanding of art history to create
              a truly unique and functional accessory.
            </p>
          </div>
          <div className="w-full md:w-2/4 bg-wh">
            <div className="relative overflow-hidden w-full h-full">
              <img
                src={aboutus1}
                alt=""
                className="cursor-pointer transform transition-all hover:grayscale duration-500 ease-in-out hover:scale-90 hover:translate-x-2 hover:translate-y-2"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mx-2 sm:mx-5 md:mx-11 gap-5 sm:gap-7 md:gap-8 items-center">
        <div className="w-full md:w-2/4 bg-wh">
            <div className="relative overflow-hidden w-full h-full">
              <img
                src={aboutus2}
                alt=""
                className="cursor-pointer transform transition-all hover:grayscale duration-500 ease-in-out hover:scale-90 hover:translate-x-2 hover:translate-y-2"
              />
            </div>
          </div>
          <div className="w-full md:w-2/4">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed sm:leading-snug md:leading-normal lg:leading-loose font-font5 text-gray-600">
            Milieris is an artist of many disciplines
            </h1>

            <p className="text-xs sm:text-sm md:text-md lg:text-xl">
            Milieris is an artist of many disciplines and voices, yet timepieces have been a constant passion over the course of his life. Watchcraft timepieces bring together a range of artistic disciplines, such as welding, sculpture, engraving, and painting. Milieris is an artist who brings a range of mediums into each hand-wrought timepiece. Within each of the thirteen collections there are slight variations of style and design, but each watch is its own piece of art, never mass produced, always authentic.
            </p>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row mx-2 sm:mx-5 md:mx-11 gap-5 sm:gap-7 md:gap-8 items-center">
          <div className="w-full md:w-2/4">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed sm:leading-snug md:leading-normal lg:leading-loose font-font5 text-gray-600">
            Giving the artwork a life of its own
            </h1>

            <p className="text-xs sm:text-sm md:text-md lg:text-xl">
            Watchcraft timepieces are constructed from naturally oxidized metals that even after being refined by Milieris’ careful artistic process are intentionally not sealed or coated to protect them from the environment. This artistic design choice of Milieris gives the fourth dimension of “time” a chance to continue the artistic process well after the timepiece has been purchased and worn. This subtle facet of Watchcraft timepieces is a form “legacy creativity.” It gives the artwork a life of its own, beyond creator and wearer.
            </p>
          </div>
          <div className="w-full md:w-2/4 bg-wh">
            <div className="relative overflow-hidden w-full h-full">
              <img
                src={aboutus3}
                alt=""
                className="cursor-pointer transform transition-all hover:grayscale duration-500 ease-in-out hover:scale-90 hover:translate-x-2 hover:translate-y-2"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
