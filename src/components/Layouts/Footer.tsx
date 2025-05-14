"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from '../../../public/images/velitra_horizontal_no_bg.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row justify-content-center">

          {/* Branding */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="logo" style={{ height: "40px", display: "flex", alignItems: "center" }}>
              <Link href="/">
                <Image src={logo} alt="Velitra Logo" width={150} height={40} />
              </Link>
            </div>
              <p>
                Velitra is a boutique agency helping businesses grow online through expert SEO services and custom web design. We turn visibility into measurable growth.
              </p>

              {/* <ul className="social-links">
                <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul> */}
            </div>
          </div>

          {/* Explore Section */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget ml-4 pl-5" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
              <h3>Explore</h3>
              <ul className="list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about/">About</Link></li>
                <li><Link href="/services/">Services</Link></li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget ml-4" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
              <h3>Quick Links</h3>
              <ul className="list">
                <li><Link href="/contact-us/">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">
              <h3>Get in Touch</h3>
              <ul className="get-in-touch">
                <li><i className="fa-solid fa-location-dot"></i> Montreal, Canada</li>
                {/* <li><i className="fa-solid fa-headset"></i> <a href="tel:+3249442515">+324-9442-515</a><br /><a href="tel:+3249442999">+324-9442-999</a></li> */}
                <li><i className="fa-solid fa-envelope"></i> <a href="mailto:salim.elrhilani@gmail.com">salim.elrhilani@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-area">
        <div className="container">
          <p>
            &copy; {currentYear} Velitra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
