import React from "react";
import type { Metadata } from "next";

import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
// import ContactForm from "../../components/Contact/ContactForm";
// import Newsletter from "../../components/Common/Newsletter";
import Footer from "../../components/Layouts/Footer";

export const metadata: Metadata = {
  title: "Contact Velitra – Let's Build Your Online Presence",
  description:
    "Get in touch with Velitra, your Montreal-based partner in SEO and web design. Reach out today to schedule a consultation or request a free audit.",
  alternates: {
    canonical: "https://www.velitra.com/contact-us/",
  },
  };

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Contact Us" BGImage="/images/page-banner1.jpg" />

      <ContactInfo />

      {/* <ContactForm /> */}

      {/* <div className="ptb-100">
        <Newsletter />
      </div> */}

      <Footer />
    </>
  );
}
