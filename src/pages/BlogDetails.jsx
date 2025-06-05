import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import blogDetailImage from '../assets/dogbd.png';
import ContactForm from "../components/contactForm";

const BlogDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full mx-auto px-15 py-8 bg-[#EDEBE0] mt-16">
        {/* Back Button */}
        <div
          onClick={() => navigate(-1)} // Go back in history
          className="flex items-center text-sm text-gray-600 cursor-pointer mb-4 hover:text-orange-500"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') navigate(-1); }}
        >
          <FaArrowLeft className="mr-2" />
          BACK
        </div>

        {/* Title & Meta */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Precision and Perfection: Why Caninkart Stands Out as the Best Dog Collar Manufacturer
        </h1>
        <p className="text-sm text-gray-500 mb-4">May 14, 2025 · By Tatjana</p>

        {/* Image */}
        <img
          src={blogDetailImage}
          alt="Dog with toy"
          className="w-full h-auto rounded-lg mb-6 object-cover"
        />

        {/* Content */}
        <div className="space-y-6 text-sm sm:text-base text-black bg-[#EDEBE0]">
          <p>
            When it comes to selecting the perfect dog collar for your furry companion, quality and craftsmanship are key factors to consider. In a market flooded with options, Caninkart has emerged as a standout manufacturer of top-of-the-line dog collars that combine precision and perfection in every design. With a commitment to excellence and a dedication to providing pet owners with the highest quality products, we have earned a reputation as the industry leader in dog collar manufacturing. From durable materials to innovative designs, we've set the standard for reliability and style in the pet accessory market
          </p>
          <p>
            In this article, we will explore the reasons why we stand out as the best dog collar manufacturer in India, examining the company's attention to detail, commitment to quality, and innovative approach to pet accessories. Whether you're looking for a dog collar that's comfortable, stylish, or functional, we have a wide range of options to suit every pet owner's needs. Join us as we delve into the world of Caninkart and discover why our products are the go-to choice for discerning pet owners everywhere.
          </p>

          {[...Array(5)].map((_, idx) => (
            <div key={idx}>
              <h2 className="font-semibold text-base sm:text-lg mb-1">Meticulous attention to detail</h2>
              <p>
                Meticulous attention to detail
                Our commitment to maintaining meticulous attention to detail is evident in every aspect of our dog collar manufacturing process. From selecting high-quality materials to ensuring precise stitching and finishing, every step is executed with precision and care. This dedication to detail results in dog collars that not only look stylish but also provide durability and comfort for pets. By consistently upholding such high standards, Caninkart has set itself apart as the best dog collar manufacturer in the pet industry, trusted by pet owners and retailers alike for our exceptional craftsmanship.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      
      <ContactForm />
    </>
  );
};

export default BlogDetails;
