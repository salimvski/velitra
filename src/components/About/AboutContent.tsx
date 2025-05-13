"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../public/images/about-img2.jpg";

const AboutContent: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      /> */}

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                {/* <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>Velitra is a digital agency dedicated to helping businesses grow online through SEO and web design. We craft strategies that increase visibility, improve user experience, and deliver measurable results.</p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>We’re a small team of passionate SEO experts and web designers based in Canada. With a focus on clarity, creativity, and conversion, we help our clients get found online and grow sustainably.
                  </p>
                </div>

                <div className="about-text">
                <h4>Our Story</h4>
                <p>Founded in 2025, Velitra was born out of a desire to make digital marketing simpler, smarter, and more accessible. 
                  We’ve helped startups and established brands boost their online presence through tailored solutions and personal attention.
                </p>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <ul>
                    <li><i className="fa-solid fa-circle-check"></i>Deliver clean, performance-driven websites tailored to your brand</li>
                    <li><i className="fa-solid fa-circle-check"></i>Help clients achieve long-term growth through ethical SEO</li>
                    <li><i className="fa-solid fa-circle-check"></i>Make design and strategy simple, transparent, and effective</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
