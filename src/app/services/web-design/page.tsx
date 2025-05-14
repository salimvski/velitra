import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContentWebDesign from "../../../components/Services/ServiceDetailsContentWebDesign";
import CtaAreaWebDesign from "../../../components/Common/CtaAreaWebDesign";
import Footer from "../../../components/Layouts/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Services – Clean & Responsive Sites | Velitra",
  description:
    "Get a fast, modern, and responsive website built by Velitra. We craft user-centered designs optimized for performance, branding, and SEO.",
};


export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Web Design & Development"
        BGImage="/images/page-banner1.jpg"
      />

      <ServiceDetailsContentWebDesign />

      <CtaAreaWebDesign />

      <Footer />
    </>
  );
}
