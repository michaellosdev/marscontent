"use client";

import * as React from "react";
import HeroPortfolio from "@/lib/sections/Hero/Hero.portfolio";
import Portfolio from "@/lib/sections/Portfolio/Portfiolio";
import Contact from "@/lib/sections/Contact/Contact.home";

export interface IAppProps {}

export default function PortfolioPage(props: IAppProps) {
  return (
    <div className="h-fit">
      <HeroPortfolio />
      <Portfolio />
      <Contact />
    </div>
  );
}
