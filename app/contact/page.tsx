"use client";

import * as React from "react";
import { Typography } from "@/lib/components/Typography";
import Container from "@/lib/components/Container";
import { AnimateOnView } from "@/lib/utils/AnimateOnView/AnimateOnView";
import StarryBackground from "@/lib/components/StarryBackground";
import Contact from "@/lib/sections/Contact/Contact.home";

export interface IAppProps {}

export default function ContactPage(props: IAppProps) {
  return (
    <div className="h-fit">
      <Container
        className="  flex  justify-center items-center snap-start !h-fit pt-48 pb-24 relative"
        style={{
          //   backgroundImage:
          //     "linear-gradient(0deg, rgba(10,10,10,1) 0%,rgba(0,0,0,1) 100%)",
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
              variant="h3"
              type="h1"
              className="text-white font-zian   md:!text-[8rem]     "
            >
              Contact us
            </Typography>
          </AnimateOnView>
        </div>
      </Container>
      <div
        className="bg-primary flex flex-col  justify-center items-center h-fit py-32 pb-0 px-8  md:px-16   2xl:px-48  "
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(10,10,10,1) 0%,rgba(0,0,0,1) 100%)",
        }}
      >
        <Typography
          type="h3"
          variant="body-large"
          className="text-gray-300 mb-2 text-center lg:!text-2xl"
        >
          We{"'"}re always eager to hear from you. Whether you have questions,
          need assistance with a service, or just want to give us some feedback,
          drop us a line.
        </Typography>
      </div>
      <Contact />
    </div>
  );
}
