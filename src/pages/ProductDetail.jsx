import React, { useState } from 'react';
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

  return (
    <>
      <div className="min-h-screen bg-[#F1FFEF] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative top-18">
        {/* Back Button */}
        <button
          className="text-sm text-gray-600 hover:text-[16px] absolute top-4 left-8 sm:top-8 sm:left-12 lg:left-25 lg:top-30 z-10"
          onClick={() => navigate(-1)}
        >
          &larr; BACK
        </button>

        {/* Product Container */}
        <div className="w-full max-w-6xl rounded-lg flex flex-col md:flex-row gap-6 mt-12 sm:mt-16">
          {/* Sidebar Thumbnails */}
          <div className="flex md:flex-col gap-4 w-20 h-20 sm:w-24 sm:h-24">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-md cursor-pointer hover:ring-1 ring-gray-400 bg-white p-1 shrink-0"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex justify-center bg-white flex-1/2 h-[430px]">
            <img
              src={selectedImage}
              alt="Main Product"
              className="w-full max-w-xs sm:max-w-sm h-auto object-contain rounded-md"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4 text-center md:text-left flex-1/4">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Trixie Classic H Harness for Dogs (Black)
            </h1>

            {/* Paragraph with center alignment and line breaks */}
            <p className="text-gray-700 text-sm sm:text-[14px] ">
              Keep your dog safe and secure with the Trixie classic H-harness.
              Made of high-quality colourful nylon, and you will love its durability.
              The harness has an adjustable bib, neck, and belly straps,
              with easy release side buckles.
              The H shape helps provide full body support to your dog
              as it distributes pressure throughout.
              The best fit for your dog.
            </p>

            <div className='py-4'>
              <h2 className="font-semibold text-gray-800 text-center md:text-left">Key Features:</h2>
              <ul className="list-disc list-inside text-sm sm:text-[14px] text-gray-700 mt-2 pl-2">
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
