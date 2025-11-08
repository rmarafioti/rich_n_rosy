"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ResponsiveImage from "../components/Responsive_Image";
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
    { href: "/event", label: "Event" },
    /*{ href: "/section_two", label: "Details" },*/
    { href: "/our_story", label: "Our Story" },
    { href: "/gallery", label: "Gallery" },
    /*{ href: "/section_five", label: "FAQs" },*/
  ];

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  const iconLight = icons.find((p) => p.id === 1);
  const iconDark = icons.find((p) => p.id === 2);

  return (
    <>
      <nav>
        <div className={pc.nav_menu}>
          <Link
            href="/"
            className={`${pc.menu_icon} ${isActive("/") ? pc.active_link : ""}`}
          >
            <ResponsiveImage
              pcPhoto={iconLight}
              mobilePhoto={iconDark}
              pcClass={`${pc.icon} ${pc.icon_light}`}
              mobileClass={`${pc.icon} ${pc.icon_dark}`}
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
          <Link href="/">
            <ResponsiveImage
              pcPhoto={iconLight}
              mobilePhoto={iconDark}
              pcClass={`${mobile.icon} ${mobile.icon_light}`}
              mobileClass={`${mobile.icon} ${mobile.icon_dark}`}
            />
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
