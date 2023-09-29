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

export default function Hero(props: IAppProps) {
  return (
    <Container
      className="  flex  justify-center items-center snap-start h-screen relative"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(2,0,29,1) 0%, rgba(0,0,0,1) 80%, rgba(130,160,190,1) 100%)",
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
            className="text-white font-zian  !text-8xl md:!text-[12rem]  lg:!text-[20rem]   "
          >
            MARS
          </Typography>
        </AnimateOnView>
        <AnimateOnView type="fadeInUp" delay={500} className="w-full h-96 ">
          <Typography
            variant="h4"
            type="h2"
            className="text-gray-200 !uppercase  text-4xl md:!text-5xl  text-center z-99"
          >
            Media footages.
            <br /> anytime, anywhere
          </Typography>
        </AnimateOnView>
      </div>

      {/*   */}
      {/* <AnimateOnView
        type="flash"
        delay={500}
        className="w-[70%] h-96 bg-white bg-opacity-30"
      >
        <Typography
          variant="h4"
          type="h2"
          className="text-gray-200 !uppercase  text-4xl  text-center z-99"
        >
          Media footages.
          <br /> anytime, anywhere
        </Typography>
      </AnimateOnView>
      
      </AnimateOnView> 
      {/* <div className="w-full flex justify-center items-center h-24 mt-8">
        <AnimateOnView
          type="fadeIn"
          delay={2300}
          className="mx-2 w-1/2 flex justify-end items-center"
        >
          <Button
            variant="filled-extra"
            size="lg"
            className=" z-50     w-full md:w-auto justify-center items-center"
            elevation={4}
          >
            <Link href="/explore">Explore</Link>
          </Button>
        </AnimateOnView>
        <AnimateOnView type="fadeIn" delay={2600} className="mx-2 w-1/2">
          <Button
            variant="outlined"
            size="lg"
            className=" z-50   shadow-white w-full md:w-auto justify-center items-center"
          >
            contact
          </Button>
        </AnimateOnView>
      </div> */}
      {/* scroll down arrow */}
      <div className="absolute bottom-0 left-1/2 translate-x-[-50%] mb-8">
        <AnimateOnView
          type="fadeIn"
          delay={3000}
          className="
        flex justify-center items-center animate-bounce w-8 h-8"
        >
          {/* svg arrow */}
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
          </svg>
        </AnimateOnView>
      </div>
    </Container>
  );
}
