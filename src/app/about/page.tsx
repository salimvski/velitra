import React from "react";
import type { Metadata } from "next";

import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import AboutContent from "../../components/About/AboutContent";
import FunFactsTwo from "../../components/Common/FunFactsTwo";
import TeamStyleThree from "../../components/Common/TeamStyleThree";
// import Feedback from "../../components/Common/Feedback";
// import Partner from "../../components/Common/Partner";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/Footer";

export const metadata: Metadata = {
  title: "About Velitra – SEO Expertise & Startup Background",
  description:
    "Velitra is a Montreal-based digital agency led by a certified SEO specialist with a background in computer science and startup ventures. Discover who we are.",
};

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="About Us" BGImage="/images/page-banner1.jpg" />

      <AboutContent />

      <FunFactsTwo />

      <TeamStyleThree />

      {/* <Feedback /> */}

      {/* <Partner /> */}

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
