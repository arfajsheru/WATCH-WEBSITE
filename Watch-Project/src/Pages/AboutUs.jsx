import React from "react";
import aboutusimg from "../assets/aboutus2.jpeg";
import aboutus1 from "../assets/aboutus2.webp";
import aboutus2 from "../assets/aboutus4.webp";
import aboutus3 from "../assets/aboutus5.webp";
import Title from "../Component/Title";
const AboutUs = () => {
  return (
    <div className="mb-10 animate-open p-5 sm:p-10">
      <Title title1={"About "} title2={"Us"} />

      <div className="relative mt-3 sm:mt-4 md:mt-6 mb-4 space-y-24 mx-4">
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
              Milieris is an artist of many disciplines and voices, yet
              timepieces have been a constant passion over the course of his
              life. Watchcraft timepieces bring together a range of artistic
              disciplines, such as welding, sculpture, engraving, and painting.
              Milieris is an artist who brings a range of mediums into each
              hand-wrought timepiece. Within each of the thirteen collections
              there are slight variations of style and design, but each watch is
              its own piece of art, never mass produced, always authentic.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mx-2 sm:mx-5 md:mx-11 gap-5 sm:gap-7 md:gap-8 items-center">
          <div className="w-full md:w-2/4">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed sm:leading-snug md:leading-normal lg:leading-loose font-font5 text-gray-600">
              Giving the artwork a life of its own
            </h1>

            <p className="text-xs sm:text-sm md:text-md lg:text-xl">
              Watchcraft timepieces are constructed from naturally oxidized
              metals that even after being refined by Milieris’ careful artistic
              process are intentionally not sealed or coated to protect them
              from the environment. This artistic design choice of Milieris
              gives the fourth dimension of “time” a chance to continue the
              artistic process well after the timepiece has been purchased and
              worn. This subtle facet of Watchcraft timepieces is a form “legacy
              creativity.” It gives the artwork a life of its own, beyond
              creator and wearer.
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
