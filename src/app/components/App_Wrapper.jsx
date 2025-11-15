"use client";

import localFont from "next/font/local";
import { Fraunces } from "next/font/google";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Navbar from "../layout/Navbar";
import Access_Menu from "../components/Access_Menu";

const fraunces = Fraunces({
  variable: "--main-font",
  weight: ["300", "600"],
  subsets: ["latin"],
});

const summer_of_love = localFont({
  src: "../../app/fonts/SummerofLove.otf",
  variable: "--summer-of-love-font",
  display: "swap",
});

export default function AppWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/auth";

  const [accessibility, setAccessibility] = useState({
    isThemeDark: false,
    isRemoveFontStyle: false,
    fontSizeAdjust: 1,
  });

  useEffect(() => {
    setAccessibility((prev) => ({
      ...prev,
      isThemeDark: window.matchMedia("(prefers-color-scheme: dark)").matches,
    }));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      accessibility.isThemeDark ? "dark" : "light"
    );
  }, [accessibility.isThemeDark]);

  const adjustFontSize = (increment) => {
    setAccessibility((prev) => ({
      ...prev,
      fontSizeAdjust: Math.max(1, prev.fontSizeAdjust + increment),
    }));
  };

  const toggleSetting = (key) => {
    setAccessibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const resetAccessibility = () => {
    setAccessibility({
      isThemeDark: false,
      isRemoveFontStyle: false,
      fontSizeAdjust: 1,
    });
  };

  const showNavigation = !isAuthPage;

  return (
    <div>
      {showNavigation && <Navbar />}
      {showNavigation && (
        <Access_Menu
          accessibility={accessibility}
          toggleSetting={toggleSetting}
          adjustFontSize={adjustFontSize}
          resetAccessibility={resetAccessibility}
        />
      )}
      <article
        className={`
          appContainer
          ${summer_of_love.variable}
          ${
            accessibility.isRemoveFontStyle
              ? "accessible-font"
              : fraunces.className
          }
        `}
        style={{
          fontSize: `${1 * accessibility.fontSizeAdjust}rem`,
        }}
      >
        {children}
      </article>
    </div>
  );
}
