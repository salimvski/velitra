"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/team/salim-elrhilani.jpeg",
    name: "Salim El Rhilani",
    designation: "CEO & Founder",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/salim-el-rhilani-3789231bb/",
      },
    ],
  },
];

const TeamStyleThree: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Expert Team</h2>
            <p>
              Behind every project at Velitra is a team of passionate professionals — from SEO strategists to front-end designers — dedicated to helping your business grow online. We bring together creativity, precision, and industry know-how to deliver results that matter.
            </p>
          </div>

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
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="team-slider"
          >
            {teamMemberData &&
              teamMemberData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="team-card text-center">
                    <div className="team-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={510}
                        height={550}
                      />

                      <div className="social-links">
                        <div className="d-table">
                          <div className="d-table-cell">
                            <ul>
                              {value.socialLinks.map((value, i) => (
                                <li key={i}>
                                  <a href={value.url} target="_blank">
                                    <i className={value.iconName}></i>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="team-caption">
                      <h3>{value.name}</h3>
                      <p>{value.designation}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TeamStyleThree;
