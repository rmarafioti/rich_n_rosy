"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
    { href: "/section_one", label: "Event" },
    { href: "/section_two", label: "Details" },
    { href: "/section_three", label: "Our Story" },
    { href: "/section_four", label: "Gallery" },
    { href: "/section_five", label: "FAQs" },
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
            {/* Light theme image */}
            <Image
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1761257615/wedding_website/icons/monogram_maroon_vmlyu6.svg"
              alt="website icon and home page button"
              width={179}
              height={118}
              className={`${pc.icon} ${pc.icon_light}`}
            />
            {/* Dark theme image */}
            <Image
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1761257555/wedding_website/icons/monogram_blush_xospub.svg"
              alt="website icon and home page button"
              width={179}
              height={118}
              className={`${pc.icon} ${pc.icon_dark}`}
            />
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
          <Image
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1761257615/wedding_website/icons/monogram_maroon_vmlyu6.svg"
            alt="website icon and home page button"
            width={179}
            height={118}
            className={mobile.menu_icon}
          />
          {/* Dark theme image */}
          <Image
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1761257555/wedding_website/icons/monogram_blush_xospub.svg"
            alt="website icon and home page button"
            width={179}
            height={118}
            className={mobile.menu_icon_dm}
          />
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
        {links.map(({ href, label }) => (
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
