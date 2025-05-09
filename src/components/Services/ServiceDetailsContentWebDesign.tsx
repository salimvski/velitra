"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import singleServiceImg from "../../../public/images/services/web-design-banner.svg";

const ServiceDetailsContentWebDesign: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=vzdA66d6xDs"]}
      />

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="services-details-image">
                <Image
                  src={singleServiceImg}
                  alt="image"
                  width={1250}
                  height={500}
                />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h2>Beautiful, Fast & SEO-Friendly Websites</h2>
                <p>At Velitra, we design and build websites that are not just visually stunning, but also built to perform. Whether you need a modern landing page, a custom business site, or a conversion-optimized portfolio — we craft responsive, SEO-ready experiences that reflect your brand and help you grow online.</p>
                <p>Our web design process blends aesthetics, usability, and performance. From strategic layout planning to lightning-fast page speeds, we build with both your users and search engines in mind.</p>

                <p>What you get with our web design service:</p>
                <ul>
                  <li><strong>Custom Design</strong> – Tailored to your brand, no templates</li>
                  <li><strong>Responsive Layout</strong> – Optimized for mobile, tablet, and desktop</li>
                  <li><strong>Clean Code</strong> – Built for performance, accessibility, and SEO</li>
                  <li><strong>CMS Integration</strong> – WordPress, Headless, or static site options</li>
                  <li><strong>Conversion-Focused</strong> – Every page built with user journeys in mind</li>
                </ul>
                <p>Our developers and designers collaborate with you to ensure your site meets business goals, reflects your visual identity, and is ready to scale. Whether you’re starting from scratch or need a redesign, we bring your vision to life with precision and care.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
              <h3>Our Web Design Process</h3>
              <ul>
                <li>Discovery & Requirements Gathering</li>
                <li>Wireframes & Layout Planning</li>
                <li>Visual Design and Branding Integration</li>
                <li>Development & Mobile Optimization</li>
                <li>SEO and Performance Enhancements</li>
                <li>Launch & Post-Launch Support</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContentWebDesign;
