"use client";

import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "Search Engine Optimization (SEO)",
    shortText:
      "We improve your Google rankings with targeted SEO strategies — including technical optimization, keyword research, and link building — to help you get found by the right people.",
    viewDetails: "/services/seo/",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Web Design & Development",
    shortText:
      "We build fast, mobile-responsive, and visually stunning websites that reflect your brand and drive real conversions. Every design is optimized for both user experience and SEO.",
    viewDetails: "/services/web-design/",
    aosDelay: "200",
  },
];

const ServicesStyleFour: React.FC = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {servicesData &&
              servicesData.map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one white-bg text-center">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyleFour;
