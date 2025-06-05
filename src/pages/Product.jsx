import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img11 from '../assets/pngwing.png';
import ContactForm from '../components/contactForm';

const Product = () => {
  const navigate = useNavigate();
  const productImages = [img11];

  const Productss = Array.from({ length: 28 }, (_, index) => ({
    id: index + 1,
    image: productImages[index % productImages.length],
    name: 'Lounge',
  }));
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>
  <div className="bg-[#ecf2e7] px-4 sm:px-10 md:px-16 lg:px-10  py-6 sm:py-10 mt-15">
  <p className="text-center font-semibold text-lg mb-6">Products</p>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
    {Productss.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded shadow p-4 lg:py-8 sm:p-3 text-center cursor-pointer hover:ring-2 ring-orange-300 transition duration-200"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt="product"
          className="mx-auto w-35 h-20 md:w-40 sm:h-24 object-contain"
        />
        <p className="mt-2 text-sm">{product.name}</p>
      </div>
    ))}
  </div>
</div>


      {/* Contact Section */}
      
    
    <ContactForm />
    </>
  );
};

export default Product;
