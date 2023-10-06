"use client";

import * as React from "react";
import { Typography } from "@/lib/components/Typography";
import Container from "@/lib/components/Container";
import { AnimateOnView } from "@/lib/utils/AnimateOnView/AnimateOnView";
import logo from "@/public/logo_notext.png";
import Image from "next/image";

import { Button } from "@/lib/components/Button";
import StarryBackground from "@/lib/components/StarryBackground";
import Link from "next/link";

export interface IAppProps {}

export default function HeroPortfolio(props: IAppProps) {
  return (
    <Container
      className="  flex  justify-center items-center snap-start !h-fit pt-48 pb-24 relative"
      style={{
        // backgroundImage:
        //   "linear-gradient(180deg, rgba(2,0,29,1) 0%, rgba(0,0,0,1) 80%, rgba(130,160,190,1) 100%)",
        backgroundColor: "black",
      }}
    >
      <StarryBackground />
      <div className="h-1/2 flex flex-col ">
        <AnimateOnView
          type="flash"
          className="z-50 w-full h-full flex justify-center items-center"
        >
          <Typography
            variant="display"
            type="h1"
            className="text-white font-zian  !text-[44px] md:!text-[8rem]     "
          >
            PORTFOLIO
          </Typography>
        </AnimateOnView>
      </div>
    </Container>
  );
}
