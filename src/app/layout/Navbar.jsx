"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

  return (
    <>
      <nav>
        <div className={pc.nav_menu}>
          <Link href="/" className={pc.menu_icon}>
            *menu icon
          </Link>
          <Link href="/section_one" className={pc.nav_link}>
            section one
          </Link>
          <Link href="/section_two" className={pc.nav_link}>
            section two
          </Link>
          <Link href="/section_three" className={pc.nav_link}>
            section three
          </Link>
          <Link href="/section_four" className={pc.nav_link}>
            section four
          </Link>
          <Link href="/section_five" className={pc.nav_link}>
            section five
          </Link>
        </div>

        {/* mobile navigation menu below */}

        <section className={pc.mobile_nav}>
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
        <Link href="/" role="heading" className={mobile.nav_link}>
          Home
        </Link>
        <Link href="/section_one" role="heading" className={mobile.nav_link}>
          section one
        </Link>
        <Link href="/section_two" role="heading" className={mobile.nav_link}>
          section two
        </Link>
        <Link href="/section_three" role="heading" className={mobile.nav_link}>
          section three
        </Link>
        <Link href="/section_four" role="heading" className={mobile.nav_link}>
          section four
        </Link>
        <Link href="/section_five" role="heading" className={mobile.nav_link}>
          section five
        </Link>
      </menu>
    </>
  );
}
