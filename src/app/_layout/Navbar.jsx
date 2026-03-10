"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Responsive_Image_Theme from "../_components/Responsive_Image_Theme";
import { icons } from "../_data/photos";

/* naming conventions to define responsive design*/
import pc from "../_styling/navbar.module.css";
import mobile from "../_styling/mobile_nav.module.css";

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
    { href: "/wedding_info", label: "Wedding Info" },
    { href: "/rsvp", label: "RSVP" },
    { href: "/registry", label: "Registry" },
    { href: "/our_story", label: "Our Story" },
    { href: "/gallery", label: "Gallery" },
  ];

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  function DropDownMenu() {
    return (
      <section className={pc.dropdown}>
        <Link
          href="wedding_info#eventschedule"
          onClick={() => setMenuOpen(false)}
          className={pc.dd_link}
        >
          Event Schedule
        </Link>
        <Link
          href="wedding_info#directions"
          onClick={() => setMenuOpen(false)}
          className={pc.dd_link}
        >
          Directions
        </Link>
        <Link
          href="wedding_info#thingstodo"
          onClick={() => setMenuOpen(false)}
          className={pc.dd_link}
        >
          Things To Do
        </Link>
      </section>
    );
  }

  return (
    <>
      <nav>
        <div className={pc.nav_menu}>
          <Link
            href="/"
            className={`${pc.menu_icon} ${isActive("/") ? pc.active_link : ""}`}
          >
            <Responsive_Image_Theme photoData={icons} className={pc.icon} />
          </Link>
          <div className={pc.link_container}>
            {links
              .filter((link) => link.href !== "/")
              .map(({ href, label }) =>
                href === "/wedding_info" ? (
                  <div key={href} className={pc.dropdown_wrapper}>
                    <Link
                      href={href}
                      className={`${pc.nav_link} ${
                        isActive(href) ? pc.active_link : ""
                      }`}
                    >
                      {label}
                    </Link>
                    <DropDownMenu />
                  </div>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    className={`${pc.nav_link} ${
                      isActive(href) ? pc.active_link : ""
                    }`}
                  >
                    {label}
                  </Link>
                ),
              )}
          </div>
        </div>

        {/* mobile navigation menu below */}
        <section className={pc.mobile_nav}>
          <Link href="/">
            <Responsive_Image_Theme photoData={icons} className={mobile.icon} />
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
          .map(({ href, label }) =>
            href === "/wedding_info" ? (
              <div key={href} className={pc.dropdown_wrapper}>
                <Link
                  href={href}
                  role="heading"
                  className={mobile.nav_link_wrapped}
                >
                  {label}
                </Link>
                <DropDownMenu />
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                role="heading"
                className={mobile.nav_link}
              >
                {label}
              </Link>
            ),
          )}
      </menu>
    </>
  );
}
