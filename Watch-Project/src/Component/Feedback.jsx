import React, { useState } from "react";
import { VscStarEmpty, VscStarFull, VscStarHalf } from "react-icons/vsc";

const Feedback = ({toggleFeedbackOpen,feedbackOpen}) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    console.log({
      rating,
      review,
      name,
      email,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg mt-10">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Write a Review
      </h1>

      {/* Rating Section */}
      <div className="flex justify-center gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-2xl ${
              rating >= star
                ? "text-secondary"
                : rating >= star - 0.5
                ? "text-secondary"
                : "text-gray-600"
            }`}
            onClick={() => handleRatingChange(star)}
          >
            {rating >= star ? (
              <VscStarFull />
            ) : rating >= star - 0.5 ? (
              <VscStarHalf />
            ) : (
              <VscStarEmpty />
            )}
          </span>
        ))}
      </div>

      {/* Review Section */}
      <div className="mb-4">
        <h2 className="text-lg font-medium font-font4">Your Review</h2>
        <textarea
          className="w-full p-3 mt-2 border border-secondary focus:ring-2 focus:ring-secondary focus:outline-none"
          rows="4"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
        ></textarea>
      </div>

      {/* Picture/Video Section */}
      <div className="mb-4">
        <h2 className="text-lg font-medium font-font4">Upload Picture/Video (Optional)</h2>
        <input
          type="file"
          accept="image/*, video/*"
          className="p-3 mt-2 border border-secondary focus:ring-2 focus:ring-secondary focus:outline-none"
        />
      </div>

      {/* Name and Email Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-lg font-medium font-font4">Your Name</label>
          <input
            type="text"
            className="w-full p-3 mt-2 border border-secondary focus:ring-2 focus:ring-secondary focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="text-lg font-medium font-font4">Your Email</label>
          <input
            type="email"
            className="w-full p-3 mt-2 border border-secondary focus:ring-2 focus:ring-secondary focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-between items-center">
        <button
          onClick={toggleFeedbackOpen}
          className="px-6 py-2 text-center text-sm md:text-sm cursor-pointer uppercase text-white bg-secondary sm:w-fit transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-black"
        >
          Cancel Review
        </button>
        <button
          className="px-6 py-2 text-center text-sm md:text-sm cursor-pointer uppercase text-white bg-secondary sm:w-fit transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-black"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Feedback;
