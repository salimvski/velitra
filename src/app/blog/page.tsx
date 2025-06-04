import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import BlogGridThree from "../../components/Blog/BlogGridThree";
import Footer from "../../components/Layouts/Footer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog | Velitra",
  description: "Explore digital growth insights with Velitra’s blog. Articles coming soon.",
  alternates: {
    canonical: "https://www.velitra.com/blog",
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

      <PageBanner pageTitle="Blog Grid" BGImage="/images/page-banner3.jpg" />

      <BlogGridThree />

      <Footer />
    </>
  );
}
