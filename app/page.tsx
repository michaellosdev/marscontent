import Image from "next/image";
import Hero from "@/lib/sections/Hero/Hero.home";
import About from "@/lib/sections/About/About.home";
import Footer from "@/lib/sections/Footer/Footer.home";
import Contact from "@/lib/sections/Contact/Contact.home";
import Videos from "@/lib/sections/Videos/Videos.home";
import { Suspense } from "react";

import LoskutechTag from "@/lib/sections/Loskutech.tag";

export default function Home() {
  return (
    <div className="h-fit">
      <Hero />
      <About />
      <Contact />
      <Videos />
    </div>
  );
}
