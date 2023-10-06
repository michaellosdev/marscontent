"use client";

import * as React from "react";
import HeroPortfolio from "@/lib/sections/Hero/Hero.portfolio";
import Portfolio from "@/lib/sections/Portfolio/Portfiolio";

export interface IAppProps {}

export default function PortfolioPage(props: IAppProps) {
  return (
    <div className="h-fit">
      <HeroPortfolio />
      <Portfolio />
    </div>
  );
}
