"use client";

import React from "react";
import Image from "next/image";

const marketingProcessData = [
  {
    image: "/images/digital-marketing/process1.png",
    title: "Audit & Strategy",
    shortText:
      "We begin with a deep analysis of your website and search visibility, then craft a personalized roadmap for SEO and design improvements.",
    aosDelay: "100",
  },
  {
    image: "/images/digital-marketing/process2.png",
    title: "Execution & Optimization",
    shortText:
      "From technical SEO to responsive web design, we build and optimize your platform for maximum reach, speed, and conversion potential.",
    aosDelay: "200",
  },
  {
    image: "/images/digital-marketing/process3.png",
    title: "Growth & Monitoring",
    shortText:
      "We scale your results through continuous optimization, detailed analytics, and monthly performance tracking tailored to your business goals.",
    aosDelay: "300",
  },
];

const MarketingProcess: React.FC = () => {
  return (
    <>
      <div className="dm-process-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title marketing-color">OUR METHOD</span>
            <h2>How We Deliver Measurable Digital Growth</h2>
          </div>

          <div className="row justify-content-center">
            {marketingProcessData &&
              marketingProcessData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                  <div
                    className="dm-process-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt="image"
                      width={280}
                      height={228}
                    />
                    <h3>{value.title}</h3>
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

export default MarketingProcess;
