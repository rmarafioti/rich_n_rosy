"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Responsive_Image_Theme from "../components/Responsive_Image_Theme";
import { icons } from "../data/photos";

/* naming conventions to define responsive design*/
import pc from "../styling/navbar.module.css";
import mobile from "../styling/mobile_nav.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/big_day", label: "The Big Day" },
    /*{ href: "/section_two", label: "Details" },*/
    { href: "/our_story", label: "Our Story" },
    { href: "/gallery", label: "Gallery" },
    { href: "/rsvp", label: "Early RSVP" },
    /*{ href: "/section_five", label: "FAQs" },*/
  ];

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <nav>
        <div className={pc.nav_menu}>
          <Link
            href="/"
            className={`${pc.menu_icon} ${isActive("/") ? pc.active_link : ""}`}
          >
            <Responsive_Image_Theme photoData={icons} />
          </Link>
          <div className={pc.link_container}>
            {links
              .filter((link) => link.href !== "/")
              .map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${pc.nav_link} ${
                    isActive(href) ? pc.active_link : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
          </div>
        </div>

        {/* mobile navigation menu below */}
        <section className={pc.mobile_nav}>
          <Link href="/">
            <Responsive_Image_Theme photoData={icons} />
          </Link>
          {/*hamburger menu*/}
          <div id={mobile.hamMenuContainer} onClick={toggleMenu}>
            <div
              className={`${mobile.menuButtonBurger} ${
                menuOpen ? mobile.open : ""
              }`}
            ></div>
          </div>
        </section>
      </nav>

      {/* mobile menu */}
      <menu
        className={`${pc.menu} ${menuOpen ? pc.active : ""}`}
        aria-label="Mobile Navigation"
      >
        {links
          .filter((link) => link.href !== "/")
          .map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              role="heading"
              className={mobile.nav_link}
            >
              {label}
            </Link>
          ))}
      </menu>
    </>
  );
}
