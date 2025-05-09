"use client";

import React from "react";
import Link from "next/link";

const CtaAreaWebDesign: React.FC = () => {
  return (
    <>
      <div className="cta-area-two ptb-100">
        <div className="container">
          <div className="cta-content">
            <span
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Let’s Build Your Next Website
            </span>
            <h3
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Looking for a website that’s fast, elegant, and built to convert?
            </h3>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Link href="/contact-us/" className="custom-btn">
              Let’s Talk Web Design
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaWebDesign;
