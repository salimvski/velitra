"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ourServicesData = [
  {
    image: "/images/services/marketing-banner.svg",
    title: "SEO (Search Engine Optimization)",
    shortText:
      "We help you rank higher in Google, attract qualified traffic, and convert visitors through on-page optimization, keyword strategy, and technical SEO audits.",
    viewDetailsLink: "/services/seo/",
    aosDelay: "100",
  },
  {
    image: "/images/services/web-design-banner.svg",
    title: "Website Design & Development",
    shortText:
      "Our web design team creates visually stunning, high-performing websites built for fast loading, mobile responsiveness, and optimal UX.",
    viewDetailsLink: "/services/web-design/",
    aosDelay: "200",
  },
];

const OurServices: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">WHAT WE DO</span>
            <h2>Specialized SEO & Web Design Services</h2>
          </div>

          <div className="row justify-content-center">
            {ourServicesData &&
              ourServicesData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="dm-services-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Link href={value.viewDetailsLink}>
                      <div
                        style={{
                          width: "100%",
                          height: "300px", // set your desired uniform height
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={value.image}
                          alt="image"
                          width={600}
                          height={300}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover", // or "contain" if you don't want cropping
                          }}
                        />
                      </div>
                    </Link>

                    <div className="content">
                      <h3>
                        <Link href={value.viewDetailsLink}>{value.title}</Link>
                      </h3>
                      <p>{value.shortText}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
