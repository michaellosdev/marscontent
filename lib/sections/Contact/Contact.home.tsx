"use client";

import * as React from "react";
import { Typography } from "@/lib/components/Typography";
import Container from "@/lib/components/Container";
import { AnimateOnView } from "@/lib/utils/AnimateOnView/AnimateOnView";
import Carousel from "@/lib/components/Carousel";
import { Card, CardBody, CardHeader } from "@/lib/components/Card";
import Form from "@/lib/components/Form";
import Link from "next/link";
import Image from "next/image";
import instagram from "@/public/instagram.png";
import StarryBackground from "@/lib/components/StarryBackground";
import phoneIcon from "@/public/phone-icon.png";

export interface IAppProps {}

export default function Contact(props: IAppProps) {
  return (
    <div
      className="bg-primary flex justify-center flex-col lg:flex-row items-center h-fit py-16  px-8  md:px-16 lg:h-screen   2xl:px-48 relative "
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(10,10,10,1) 0%,rgba(0,0,0,1) 100%)",
      }}
    >
      <StarryBackground />
      <AnimateOnView
        type="fadeInLeft"
        className="w-full lg:w-1/2 h-full flex flex-col items-start justify-center px-2"
      >
        <Typography
          variant="display"
          type="h1"
          className="text-gray-300 !text-[3rem] md:!text-7xl  mb-4 !font-source-sans !font-semibold"
        >
          Say hello!
        </Typography>

        <AnimateOnView type="fadeInLeft" className="my-4 flex items-center  ">
          <Image
            src={phoneIcon}
            width={36}
            height={36}
            alt="logo"
            className="mr-4"
          />
          <Typography
            variant="h4"
            type="p"
            className="text-gray-200  !font-light !font-source-sans"
          >
            +1 (123) 456-7890
          </Typography>
        </AnimateOnView>

        <a href="https://www.instagram.com/marscontentusa">
          <AnimateOnView type="fadeInLeft" className="my-4 flex items-center  ">
            <Image
              src={instagram}
              width={36}
              height={36}
              alt="logo"
              className="mr-4"
            />
            <Typography
              variant="h4"
              type="p"
              className="text-gray-200  !font-light !font-source-sans"
            >
              @marscontentusa
            </Typography>
          </AnimateOnView>
        </a>
      </AnimateOnView>
      <AnimateOnView
        type="fadeIn"
        className="w-full lg:w-1/2 h-full flex items-center justify-center mt-2"
      >
        <Form />
      </AnimateOnView>
    </div>
  );
}
