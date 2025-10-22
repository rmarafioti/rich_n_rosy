import App_Wrapper from "./components/App_Wrapper";

import "./globals.css";

export const metadata = {
  title: "Rosy & Rich Get Hitched",
  description: "All you need to know about our wedding July 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <App_Wrapper>{children}</App_Wrapper>
      </body>
    </html>
  );
}
