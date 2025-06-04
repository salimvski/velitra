import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import Footer from "../../../components/Layouts/Footer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog | Velitra",
  description: "Explore digital growth insights with Velitra’s blog. Articles coming soon.",
  alternates: {
    canonical: "https://www.velitra.com/blog/blog-details/",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Blog Details" BGImage="/images/page-banner2.jpg" />

      <BlogDetailsContent />

      <Footer />
    </>
  );
}
