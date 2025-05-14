"use client";

import React from "react";
import Image from "next/image";

import borderImg from "../../../../public/images/digital-marketing/border1.png";

const funFactsData = [
  {
    iconName: "fa-solid fa-list-check",
    number: "5",
    title: "Projects completed",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-users",
    number: "5",
    title: "Happy Clients",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-people-group",
    number: "2",
    title: "Qualified Staffs",
    aosDelay: "300",
  },
  {
    iconName: "fa-solid fa-trophy",
    number: "01",
    title: "Winning Awards",
    aosDelay: "400",
  },
];

const FunFacts: React.FC = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {funFactsData &&
              funFactsData.map((value, i) => (
                <div className="col-lg-3 col-sm-6 col-md-6" key={i}>
                  <div
                    className="dm-funfacts-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>{value.number}</h3>
                    <span className="sub-title">{value.title}</span>
                    <Image
                      src={borderImg}
                      alt="image"
                      className="shape"
                      width={90}
                      height={165}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
