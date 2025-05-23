"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";

import logo from "../../../public/images/velitra_horizontal_no_bg.png";
import whiteLogo from "../../../public/images/velitra_logo_white_text.png";

const NavbarTwo: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <Link
              href="/"
              className="navbar-brand"
              style={{
                height: "40px",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                src={logo}
                className="black-logo"
                alt="Velitra Logo"
                width={160}
                height={80} // Slightly bigger for presence
                style={{ maxHeight: "120px", width: "auto" }}
              />
              <Image
                src={whiteLogo}
                className="white-logo"
                alt="Velitra Logo"
                width={160}
                height={80}
                style={{ maxHeight: "120px", width: "auto" }}
              />
            </Link>


            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                {menus.map((menuItem) => (
                  <MenuItem key={menuItem.label} {...menuItem} />
                ))}
              </ul>

              <div className="others-options">
                <Link href="/contact-us/" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarTwo;
