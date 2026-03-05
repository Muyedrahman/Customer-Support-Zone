import React from 'react';
import XIcon from "../assets/x.svg"
import LinkedinIcon from "../assets/linkedin.svg";
import fbIcon from "../assets/facebook.svg";
import Email from "../assets/email.svg";
import Container from './Container';


const Footer = () => {
    return (
      <footer className="bg-black text-gray-300 px-8 py-12 ">
        <Container>
          <div className="grid md:grid-cols-5 gap-8">
            {/* 1 */}
            <div>
              <h3 className="text-white font-semibold mb-2">
                CS — Ticket System
              </h3>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            {/* 2 */}
            <div>
              <h4 className="text-white font-semibold mb-2">Company</h4>
              <ul className="space-y-1 text-sm">
                <li>About Us</li>
                <li>Our Mission</li>
                <li>Contact Saled </li>
              </ul>
            </div>
            {/* 3 */}
            <div>
              <h4 className="text-white font-semibold mb-2">Services</h4>
              <ul className="space-y-1 text-sm">
                <li>Education & Services</li>
                <li>Student Stories</li>
                <li>Download Apps</li>
              </ul>
            </div>
            {/* 4 */}
            <div>
              <h4 className="text-white font-semibold mb-2">Information</h4>
              <ul className="space-y-1 text-sm">
                <li>Products & Services</li>
                <li>Customer Stories</li>
                <li>Download Apps </li>
              </ul>
            </div>
            {/* 5 */}
            <div>
              <h4 className="text-white font-semibold mb-2">Social Links </h4>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-1">
                  <img src={XIcon} alt="" />
                  @CS — Ticket System
                </li>

                <li className="flex gap-1">
                  <img src={LinkedinIcon} alt="" />
                  @CS — Ticket System
                </li>

                <li className="flex gap-1">
                  <img src={fbIcon} alt="" />
                  @CS — Ticket System
                </li>

                <li className="flex gap-1">
                  <img src={Email} alt="" />
                  support@cst.com
                </li>
              </ul>
            </div>
          </div>
          {/* 6 */}
          <div className="text-left md:text-center text-gray-500 text-sm mt-8">
            <div className='border-b mb-3'></div>
            © 2025 CS — Ticket System.
            <br className="block md:hidden" /> All rights reserved.
          </div>
        </Container>
      </footer>
    );
};

export default Footer;