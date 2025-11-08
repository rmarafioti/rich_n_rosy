"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { icons } from "../data/photos";

/* naming conventions to define responsive design*/
import pc from "../styling/navbar.module.css";
import mobile from "../styling/mobile_nav.module.css";

function IconLightMode({ styles = pc }) {
  const iconLight = icons.find((p) => p.id === 1);
  return (
    <>
      {/* Light theme image */}
      <Image
        src={iconLight.photo}
        alt={iconLight.alt}
        width={iconLight.width}
        height={iconLight.height}
        className={`${styles.icon} ${styles.icon_light}`}
      />
    </>
  );
}

function IconDarkMode({ styles = pc }) {
  const iconDark = icons.find((p) => p.id === 2);
  return (
    <>
      {/* Dark theme image */}
      <Image
        src={iconDark.photo}
        alt={iconDark.alt}
        width={iconDark.width}
        height={iconDark.height}
        className={`${styles.icon} ${styles.icon_dark}`}
      />
    </>
  );
}

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
    { href: "/home", label: "Home" },
    { href: "/section_one", label: "Event" },
    /*{ href: "/section_two", label: "Details" },*/
    { href: "/section_three", label: "Our Story" },
    { href: "/section_four", label: "Gallery" },
    /*{ href: "/section_five", label: "FAQs" },*/
  ];

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <nav>
        <div className={pc.nav_menu}>
          <Link
            href="/home"
            className={`${pc.menu_icon} ${
              isActive("/home") ? pc.active_link : ""
            }`}
          >
            <IconLightMode styles={pc} />
            <IconDarkMode styles={pc} />
          </Link>
          <div className={pc.link_container}>
            {links
              .filter((link) => link.href !== "/home")
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
          <Link href="/home">
            <IconLightMode styles={mobile} />
            <IconDarkMode styles={mobile} />
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
          .filter((link) => link.href !== "/home")
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
