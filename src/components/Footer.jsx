import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#FFFEFA] border-t border-[#D2C8B6] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold text-[#2C3539]">Leadership Seminar 2024</h2>
            <p className="text-[#4A5459]">Empowering future leaders</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link to="/" className="text-[#2C3539] hover:text-[#4A5459]">Home</Link>
            <Link to="/registration" className="text-[#2C3539] hover:text-[#4A5459]">Registration</Link>
            <Link to="/profile" className="text-[#2C3539] hover:text-[#4A5459]">My Profile</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-[#4A5459]">
          <p>&copy; 2024 Leadership Seminar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;