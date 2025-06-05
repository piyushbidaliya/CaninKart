import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus(res.data.message);
      setFormData({ name: '', contact: '', email: '', message: '' });
    } catch (error) {
      setStatus(error.response?.data?.error || 'Something went wrong.');
    }
  };
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white py-10 px-6 md:px-20 mt-16">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-orange-500 font-semibold">📍CONTACT</p>
        <h2 className="text-2xl font-bold">Contact Us</h2>
      </div>

      {/* Form and Contact Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-md space-y-4 shadow">
          <h3 className="font-semibold text-lg mb-4">Do You Have Any Questions?</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4 bg-[#F0F2F3]">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-2 rounded border w-full bg-[#FFFAEF]"
                required
              />
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Your Contact"
                className="p-2 rounded border w-full bg-[#FFFAEF]"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-2 rounded border w-full bg-[#FFFAEF]"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-2 rounded border w-full h-28 bg-[#FFFAEF]"
              required
            />

            <button
              type="submit"
              className="bg-[#BC5E38] text-white px-6 py-2 rounded hover:bg-orange-700"
            >
              SEND
            </button>

            {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
          </form>
        </div>

        {/* Get in Touch Info */}
        <div className="bg-gray-100 p-6 rounded-md shadow">
          <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>

          <p className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-black bg-[#FDDF82] p-2 rounded-full text-4xl" />
            <strong>Email:</strong> support@caninkart.com
          </p>

          <p className="flex items-center gap-2 mb-2">
            <FaPhone className="text-black bg-[#FDDF82] p-2 rounded-full text-4xl" />
            <strong>Phone:</strong> +91 95209 57250
          </p>

          <p className="flex items-start gap-2 mb-4">
            <FaMapMarkerAlt className="text-black bg-[#FDDF82] p-2 rounded-full text-4xl" />
            <strong>Address:</strong> 2220 Colorado Avenue, 5th Floor, Santa Monica California, USA
          </p>

          <div className="flex gap-4 mt-4 text-xl text-black">
            <a className="bg-[#FDDF82] p-2 rounded-full text-4xl" href="#"><FaFacebookF /></a>
            <a className="bg-[#FDDF82] p-2 rounded-full text-4xl" href="#"><FaYoutube /></a>
            <a className="bg-[#FDDF82] p-2 rounded-full text-4xl" href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mb-10">
        <iframe
          title="Caninkart Location"
          className="w-full h-64 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.394351706669!2d78.03218811512935!3d30.316495481775175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929bbf6e60c45%3A0x61b36a48fda759a1!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1627887884973!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
