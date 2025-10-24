"use client";

import { Fraunces } from "next/font/google";

import { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Access_Menu from "../components/Access_Menu";

const fraunces = Fraunces({
  variable: "--main-font",
  weight: ["300", "600"],
  subsets: ["latin"],
});

export default function AppWrapper({ children }) {
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

  return (
    <div>
      <Navbar />
      <Access_Menu
        accessibility={accessibility}
        toggleSetting={toggleSetting}
        adjustFontSize={adjustFontSize}
        resetAccessibility={resetAccessibility}
      />
      <article
        className={`
          appContainer
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
      <Footer />
    </div>
  );
}
