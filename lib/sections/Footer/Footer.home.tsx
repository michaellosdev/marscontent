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
import logo from "@/public/logo_notext.png";

export interface IAppProps {}

export default function Footer(props: IAppProps) {
  return (
    <div className=" bg-primary flex justify-center flex-col items-center h-96 py-8  px-8  md:px-16 md:h-96   2xl:px-48 ">
      <Image
        src={logo}
        width={100}
        height={100}
        alt="logo"
        className="mr-4 mb-8"
      />
      <AnimateOnView
        type="fadeInUp"
        className="w-full flex items-center justify-center"
      >
        <Link href="/about">
          <Typography
            variant="h3"
            type="p"
            className="text-gray-200 !text-xl md:!text-2xl !font-light !font-source-sans mx-2"
          >
            About
          </Typography>
        </Link>
        <span>
          <Typography
            variant="h3"
            type="p"
            className="text-gray-200 !text-xl md:!text-2xl !font-light !font-source-sans mx-2"
          >
            |
          </Typography>
        </span>
        <Link href="/contact">
          <Typography
            variant="h3"
            type="p"
            className="text-gray-200 !text-xl md:!text-2xl !font-light !font-source-sans mx-2"
          >
            Contact
          </Typography>
        </Link>
        <span>
          <Typography
            variant="h3"
            type="p"
            className="text-gray-200 !text-xl md:!text-2xl !font-light !font-source-sans mx-2"
          >
            |
          </Typography>
        </span>
        <Link href="/portfolio">
          <Typography
            variant="h3"
            type="p"
            className="text-gray-200 !text-xl md:!text-2xl !font-light !font-source-sans mx-2"
          >
            Portfolio
          </Typography>
        </Link>
        <span>
          <Typography
            variant="h3"
            type="p"
            className="text-gray-200 !text-xl md:!text-2xl !font-light !font-source-sans mx-2"
          >
            |
          </Typography>
        </span>
        <Link href="/services">
          <Typography
            variant="h3"
            type="p"
            className="text-gray-200 !text-xl md:!text-2xl !font-light !font-source-sans mx-2"
          >
            Services
          </Typography>
        </Link>
      </AnimateOnView>
      <a href="https://www.instagram.com/marscontentusa">
        <AnimateOnView type="fadeInLeft" className="mt-8 flex items-center  ">
          <Image
            src={instagram}
            width={36}
            height={36}
            alt="logo"
            className="mr-4"
          />
        </AnimateOnView>
      </a>
    </div>
  );
}
