"use client";

import * as React from "react";
import { Typography } from "@/lib/components/Typography";
import Container from "@/lib/components/Container";
import { AnimateOnView } from "@/lib/utils/AnimateOnView/AnimateOnView";
import Carousel from "@/lib/components/Carousel";
import { Card, CardBody, CardHeader, CardTitle } from "@/lib/components/Card";
import Image from "next/image";
import smaple1 from "@/public/1.jpg";
import smaple2 from "@/public/2.jpg";
import smaple3 from "@/public/3.jpg";
import smaple4 from "@/public/4.jpg";
import smaple5 from "@/public/5.jpg";
import smaple6 from "@/public/6.jpg";

export interface IAppProps {}

export default function About(props: IAppProps) {
  return (
    <div className=" bg-white flex flex-col  justify-center items-center h-fit py-16  px-8  md:px-16 lg:h-screen   2xl:px-48 bg-[linear-gradient(to_bottom,rgba(130,160,190,1),rgba(0,0,0,0.6)),url('/labg2.jpg')] bg-cover bg-no-repeat bg-center ">
      <Typography
        variant="h1"
        type="h2"
        className="text-gray-300 !text-[3rem] md:!text-7xl  !font-source-sans !font-semibold"
      >
        <span className="font-zian !font-bold">WHY MARS</span>
      </Typography>

      <div className="w-full h-full flex flex-col md:!flex-row justify-between items-center flex-wrap  ">
        <AnimateOnView
          className="w-full lg:w-[31%] h-fit my-4  "
          type="fadeInUp"
        >
          <Card className="bg-opacity-20 border-none h-fit lg:h-96  ">
            <CardHeader>
              <CardTitle className="!text-gray-900"> #01 </CardTitle>
            </CardHeader>
            <CardBody className="text-gray-200  font-source-sans !font-semibold">
              <Typography variant="h4" type="h3">
                Our expertise lies in storytelling. We transform simple messages
                into compelling stories that resonate.
              </Typography>
            </CardBody>
          </Card>
        </AnimateOnView>
        <AnimateOnView
          className="w-full lg:w-[31%] h-fit my-4  "
          type="fadeInUp"
          delay={100}
        >
          <Card className=" bg-opacity-20 border-none h-fit lg:h-96 ">
            <CardHeader>
              <CardTitle className="!text-gray-900"> #02 </CardTitle>
            </CardHeader>
            <CardBody className="text-gray-200  font-source-sans !font-semibold">
              <Typography variant="h4" type="h3" className="text-">
                We embrace innovation. Our approaches are always fresh, ensuring
                your content stands out in today{"'"}s crowded digital
                landscape.
              </Typography>
            </CardBody>
          </Card>
        </AnimateOnView>
        <AnimateOnView
          className="w-full lg:w-[31%] h-fit my-4  "
          type="fadeInUp"
          delay={200}
        >
          <Card className="bg-opacity-20 border-none h-fit lg:h-96  ">
            <CardHeader>
              <CardTitle className="!text-gray-900"> #03 </CardTitle>
            </CardHeader>
            <CardBody className="text-gray-200 !text-3xl font-source-sans !font-semibold">
              <Typography variant="h4" type="h3">
                Proven results drive us. Our strategies have delivered
                measurable impacts for brands, ensuring a return on your
                investment.
              </Typography>
            </CardBody>
          </Card>
        </AnimateOnView>
      </div>
    </div>
  );
}
