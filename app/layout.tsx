import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/lib/components/Nav";
import logo from "@/public/logo_notext.png";
import "@/lib/utils/AnimateOnView/animationStyles.css";
import MouseFollower from "@/lib/components/MouseFollower";
import Footer from "@/lib/sections/Footer/Footer.home";
import LoskutechTag from "@/lib/sections/Loskutech.tag";
import Contact from "@/lib/sections/Contact/Contact.home";

export const metadata: Metadata = {
  title: "MARS TEAM",
  description: "MARS TEAM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="no-scrollbar">
        {/* <MouseFollower type="comet" /> */}
        <Nav
          navLinks={[
            { path: "/", name: "home" },
            { path: "/about", name: "about" },
            { path: "/portfolio", name: "portfolio" },
            { path: "/services", name: "services" },
            { path: "/contact", name: "contact" },
          ]}
          logo={logo}
          fill="transparent"
          activeLink="extra"
          className="font-sans text-white"
          position="absolute"
        />
        {children}

        <Footer />
        <LoskutechTag />
      </body>
    </html>
  );
}
