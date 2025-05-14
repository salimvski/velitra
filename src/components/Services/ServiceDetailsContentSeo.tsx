"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import singleServiceImg from "../../../public/images/services/seo-banner.png";

const ServiceDetailsContent: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=MYE6T_gd7H0"]}
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
                  height={700}
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
                <h2>SEO Services That Drive Organic Growth</h2>
                <p>At Velitra, we offer certified SEO services designed to improve your online visibility, drive qualified traffic, and increase conversions. Whether you are a local business or a growing brand, our approach focuses on long-term, sustainable results that align with your goals.</p>

                <p>Our methodology starts with an in-depth SEO audit — analyzing technical health, indexing issues, on-page performance, and keyword gaps. From there, we build a strategic roadmap based on your niche, competitors, and target audience.</p>

                <p>Our services cover every core SEO pillar:</p>
                <ul>
                  <li><strong>Technical SEO</strong>: Site speed, mobile usability, indexing, and structured data</li>
                  <li><strong>On-Page SEO</strong>: Optimized content, meta tags, URL structure, and internal linking</li>
                  <li><strong>Content Strategy</strong>: Keyword research, topical clusters, and SEO-friendly blogs</li>
                  <li><strong>Off-Page SEO</strong>: High-quality link building and brand mentions</li>
                  <li><strong>Analytics & Reporting</strong>: Transparent performance tracking and monthly KPIs</li>
                </ul>

                <p>As HubSpot certified SEO professionals, we bring industry best practices to every project and stay up-to-date with evolving algorithm changes — so you don’t have to.</p>

                <p>With Velitra, SEO isn’t a service. It’s a partnership built to grow your business from the ground up.</p>

              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <h3>Our Proven SEO Process</h3>
                <ul>
                  <li>
                    Comprehensive site and keyword audit
                  </li>
                  <li>
                    SEO strategy tailored to your business  .
                  </li>
                  <li>
                    On-page and technical optimization
                  </li>
                  <li>
                    Content optimization and blog planning
                  </li>
                  <li>
                    Ethical link-building campaigns
                  </li>
                  <li>
                    Transparent monthly reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
