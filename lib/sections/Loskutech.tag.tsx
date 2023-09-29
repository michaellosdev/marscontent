"use client";

import * as React from "react";
import { Typography } from "@/lib/components/Typography";
import Container from "@/lib/components/Container";
import { AnimateOnView } from "@/lib/utils/AnimateOnView/AnimateOnView";
import Carousel from "@/lib/components/Carousel";
import { Card, CardBody, CardHeader } from "@/lib/components/Card";
import loskutechLogoBlack from "@/public/logo_black.png";
import Image from "next/image";

export interface IAppProps {}

export default function LoskutechTag(props: IAppProps) {
  return (
    <a href="https://loskutech.com" target="_blank">
      <div className="h-36 bg-gray-300 w-full flex flex-col items-center justify-center ">
        <Image
          src={loskutechLogoBlack}
          width={48}
          height={48}
          alt="logo"
          className="mb-2"
        />
        <div className="flex flex-col justify-center items-center">
          <Typography variant="h3" type="p" className="text-gray-900 !text-xl">
            POWERED BY LOSKUTECH
          </Typography>
          <Typography variant="h5" type="p" className="text-gray-500 !text-md">
            © 2023
          </Typography>
        </div>
      </div>
    </a>
  );
}
