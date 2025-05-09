"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const partnersData = [
  {
    id: "1",
    image: "/images/digital-marketing/theslstory_partner.jpeg",
    link: "https://www.theslstory.com/",
  },
  {
    id: "2",
    image: "/images/digital-marketing/focusco_partner.png",
    link: "https://focusco.info/home.html",
  },
  {
    id: "3",
    image: "/images/digital-marketing/cafeilcortile_partner.png",
    link: "https://cafeilcortile.com/",
  },
];

const Partner: React.FC = () => {
  return (
    <>
      <div className="partner-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Trusted by Clients Who Care About Results</span>
            <h2>Our Clients</h2>
            <p>
            From local startups to global brands, Velitra partners with ambitious companies looking to grow their digital presence. We’re proud to support businesses across industries with tailored SEO strategies and custom web design solutions that deliver real ROI.
            </p>
          </div>

          {partnersData && (
            <Swiper
              autoHeight={true}
              navigation={true}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="partner-slides"
            >
              {partnersData &&
                partnersData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="partner-item text-center">
                      <a
                        href={value.link}
                        className="d-inline-block"
                        target="_blank"
                      >
                        <Image
                          src={value.image}
                          alt="image"
                          width={155}
                          height={55}
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default Partner;
