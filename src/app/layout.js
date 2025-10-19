import App_Wrapper from "./components/App_Wrapper";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rosy & Rich Get Hitched",
  description: "All you need to know about our wedding July 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* fonts should be loaded in through app wrapper in order 
      to remove font styles by way of access menu*/}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <App_Wrapper>{children}</App_Wrapper>
      </body>
    </html>
  );
}
