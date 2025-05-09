import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContentWebDesign from "../../../components/Services/ServiceDetailsContentWebDesign";
import CtaAreaWebDesign from "../../../components/Common/CtaAreaWebDesign";
import Footer from "../../../components/Layouts/Footer";

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
