"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../../public/images/digital-marketing/about-img.png";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="marketing-about-area overflow-hidden pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="marketing-about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  width={658}
                  height={591}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="marketing-about-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <span className="sub-title">ABOUT VELITRA</span>
                <h2>
                  We Build SEO-Optimized Websites That Get Results!
                </h2>
                <p>
                Velitra is a specialized SEO and web design studio focused on delivering measurable results. Our team combines search engine expertise with user-centered design to help businesses dominate search rankings and delight their visitors.
                </p>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Data-Driven SEO</h3>
                      <p>
                        Every strategy we build is rooted in research, performance tracking, and continuous refinement to keep you ahead of the competition.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Pixel-Perfect Design</h3>
                      <p>
                        We design sleek, responsive websites tailored to your brand and optimized for speed, UX, and mobile-first indexing.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Real-World Results</h3>
                      <p>
                        From startups to established businesses, our clients consistently see growth in traffic, leads, and revenue.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Reliable Support</h3>
                      <p>
                        We’re here when you need us — from launch to long-term growth support and reporting.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/about" className="default-btn-two">
                  Learn More <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
