import React, { useState } from "react";
import { VscStarEmpty } from "react-icons/vsc";
import Feedback from "./Feedback";

const GiftDescription = () => {
    const[feedbackOpen, setFeedbackOpen] = useState(false);

    const toggleFeedbackOpen = () => {
        setFeedbackOpen(!feedbackOpen);
    }
  return (
    <div className="space-y-9 mb-10 mt-7">
        <div className="flex flex-col gap-5 sm:gap-7 md:gap-9 items-center text-center">
      <button className="px-3 py-2 bg-secondary rounded-3xl uppercase text-white font-medium text-base md:text-lg">Description</button>
      <h1 className="text-xl md:text-2xl font-font2 font-medium">Give the Gift of Time as Art</h1>
      <p className="text-lg font-medium font-font4">
        WATCHCRAFT gift cards allow your loved ones to choose the WATCHCRAFT
        piece they love the most.
      </p>
      <p className="text-xs sm:text-md md:text-lg px-2 md:px-36 text-gray-500 font-font2" >
        WATCHCRAFT gift cards can be applied towards any item on the WATCHCRAFT
        website and are redeemed at checkout. Please note that all gift card
        values are listed in USD Please note that WATCHCRAFT gift cards are not
        refundable and will not be exchanged for cash, unless required by law.
      </p>
      </div>

      <div className="mx-3">
        <h1 className="text-xl md:text-2xl font-font2 font-medium text-center mb-4">Customer Reviews</h1>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
            <div className="flex max:w-[80%] flex-col gap-2 border px-14 py-4 sm:px-0 md:py-0 border-gray-500 md:border-none">
                <div className="flex">
                    <VscStarEmpty size={25} />
                    <VscStarEmpty size={25} />
                    <VscStarEmpty size={25} />
                    <VscStarEmpty size={25} />
                    <VscStarEmpty size={25} />
                </div>
                <span className="text-md md:text-xl font-medium ">Be the first to write a review</span>
            </div>
            
            <div className="hidden md:block border-l-2 border-gray-300 h-20"></div>

            <div onClick={toggleFeedbackOpen} className="text-center w-[80%] text-sm md:text-xl cursor-pointer uppercase text-white bg-secondary px-10 py-2 sm:w-fit transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-black">
                Write a review
            </div>
        </div>
      </div>

      {feedbackOpen && <Feedback feedbackOpen={feedbackOpen} toggleFeedbackOpen={toggleFeedbackOpen} />}
    </div>
  );
};

export default GiftDescription;
