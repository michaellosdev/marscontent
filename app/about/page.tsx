"use client";

import * as React from "react";
import { Typography } from "@/lib/components/Typography";
import { AnimateOnView } from "@/lib/utils/AnimateOnView/AnimateOnView";
import Footer from "@/lib/sections/Footer/Footer.home";
import Videos from "@/lib/sections/Videos/Videos.home";
import HeroAbout from "@/lib/sections/Hero/Hero.about";
import AboutAbout from "@/lib/sections/About/About.about";
import Contact from "@/lib/sections/Contact/Contact.home";

export interface IAppProps {}

export default function About(props: IAppProps) {
  return (
    <div className="h-fit">
      <HeroAbout />
      <AboutAbout />

      {/* <Videos /> */}
    </div>
  );
}
