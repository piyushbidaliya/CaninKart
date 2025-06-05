import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import dog1 from '../assets/pngwing.png';
import dog2 from '../assets/pngwing.png';
import dog3 from '../assets/pngwing.png';
import dog4 from '../assets/pngwing.png';

import ContactForm from '../components/contactForm';

const ProductDetail = () => {
  const images = [dog1, dog2, dog3, dog4];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[#F1FFEF] flex flex-col p-4 sm:p-6 md:px-16 relative top-18">
        {/* Back Button */}
        <button
          className="text-sm text-gray-600 hover:text-[16px] w-fit"
          onClick={() => navigate(-1)}
        >
          &larr; BACK
        </button>

        {/* Product Container */}
        <div className="w-full max-w-6xl rounded-lg flex flex-col md:flex-row gap-6 my-4">
          {/* Sidebar Thumbnails for Desktop */}
          <div className="hidden md:flex md:flex-col gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-md cursor-pointer hover:ring-2 ring-gray-400 bg-white p-1"
              />
            ))}
          </div>
          {/* Main Content (Image + Thumbnails) */}
          <div className="flex flex-col md:bg-white md:justify-center flex-1/2 gap-4">
            {/* Main Image */}
            <div className="flex justify-center bg-white p-4 rounded">
              <img
                src={selectedImage}
                alt="Main Product"
                className="w-full max-w-xs sm:max-w-sm h-auto object-contain rounded-md"
              />
            </div>

            {/* Mobile: Horizontal thumbnails */}
            <div className="flex md:hidden gap-3 overflow-x-auto py-2 px-1">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-md cursor-pointer hover:ring-2 ring-gray-400 bg-white p-1 shrink-0"
                />
              ))}
            </div>
          </div>



          {/* Product Info */}
          <div className="space-y-4 text-left flex-1/4">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 w-full">
              Trixie Classic H Harness for Dogs (Black)
            </h1>

            <p className="text-gray-700 text-sm sm:text-[14px] text-left">
              Keep your dog safe and secure with the Trixie classic H-harness.
              Made of high-quality colourful nylon, and you will love its durability.
              The harness has an adjustable bib, neck, and belly straps,
              with easy release side buckles.
              The H shape helps provide full body support to your dog
              as it distributes pressure throughout.
              The best fit for your dog.
            </p>

            <div className="py-4">
              <h2 className="font-semibold text-gray-800 text-left">Key Features:</h2>
              <ul className="list-disc list-inside text-sm sm:text-[14px] text-gray-700 mt-2 pl-2 text-left">
                <li>H shape provides full-body support</li>
                <li>Webbing tape</li>
                <li>Bib, neck, and belly straps</li>
                <li>Fully adjustable chest and belly straps</li>
                <li>Extra thick premium harness</li>
                <li>Perfect comfortable fit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
};

export default ProductDetail;
