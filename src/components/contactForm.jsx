import React, { useEffect, useState } from 'react';
import dog from "../assets/ctf.png";

const ContactForm = () => {
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);

  useEffect(() => {
    // Check initial screen size
    const checkScreenSize = () => {
      setIsMdOrLarger(window.innerWidth >= 768);
    };

    checkScreenSize();

    // Listen for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const bgStyle = isMdOrLarger
    ? {
        backgroundImage: `url(${dog})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : { backgroundImage: "none" };

    const bgStyle2 = isMdOrLarger
    ? {
        backgroundImage: `url(${dog})`,
        
        backgroundRepeat: "no-repeat",
      }
    : { backgroundImage: "none" };

  return (
    <section className="py-20 px-4 bg-[#FDFDFD] text-center">
      <h2 className="text-sm font-semibold text-orange-500 mb-2">🧡 CONTACT</h2>
      <h3 className="text-lg font-bold mb-6">Contact Us</h3>

      <div
        className="w-full py-10 md:py-20 px-4 rounded-2xl min-h-[400px] md:min-h-[500px]"
        style={bgStyle}
      >
        <div className="max-w-7xl mx-auto flex justify-center md:justify-end">
          <form className="bg-[#F0F2F3] p-6 rounded shadow-md w-full max-w-sm text-left space-y-3 text-black">
            <h3 className='font-bold text-lg'>Do You Have Any Questions?</h3>
            <input className="w-full p-2 rounded bg-white" type="text" placeholder="Your Name" />
            <input className="w-full p-2 rounded bg-white" type="text" placeholder="Your Contact" />
            <input className="w-full p-2 rounded bg-white" type="email" placeholder="Your Email" />
            <textarea className="w-full p-2 rounded bg-white" placeholder="Your Message" rows="3" />
            <button className="w-full bg-orange-500 text-white py-2 rounded">SEND</button>
          </form>
        </div>
      </div>
      

      

    </section>
  );
};

export default ContactForm;
