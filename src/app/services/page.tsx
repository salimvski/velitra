import React from "react";
import type { Metadata } from "next";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import ServicesStyleFour from "../../components/Services/ServicesStyleFour";
import CtaArea from "../../components/Common/CtaArea";
import Footer from "../../components/Layouts/Footer";

export const metadata: Metadata = {
  title: "Our Services – SEO & Custom Web Design by Velitra",
  description:
    "Explore Velitra’s professional SEO services and custom web design solutions. We help businesses increase visibility, performance, and growth through strategy and execution.",
  alternates: {
    canonical: "https://www.velitra.com/services/",
  },
};

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Grow With Our Expertise"
        BGImage="/images/page-banner4.jpg"
      />

      <ServicesStyleFour />

      <CtaArea />

      <Footer />
    </>
  );
}
