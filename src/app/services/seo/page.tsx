import React from "react";
import type { Metadata } from "next";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContent from "../../../components/Services/ServiceDetailsContent";
import CtaAreaTwo from "../../../components/Common/CtaAreaTwo";
import Footer from "../../../components/Layouts/Footer";

export const metadata: Metadata = {
  title: "SEO Services in Montreal – Velitra Digital Agency",
  description:
    "Boost your visibility and grow your traffic with Velitra’s certified SEO services. We offer technical SEO, content strategy, and performance tracking tailored to your business.",
};

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Search Engine Optimization (SEO)"
        BGImage="/images/page-banner1.jpg"
      />

      <ServiceDetailsContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
