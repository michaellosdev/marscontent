"use  client";

import * as React from "react";
import { Typography } from "@/lib/components/Typography";
import { AnimateOnView } from "@/lib/utils/AnimateOnView/AnimateOnView";
import { Card, CardBody, CardHeader, CardTitle } from "@/lib/components/Card";
import Image from "next/image";
import sample from "@/public/sample.jpg";
import team from "@/public/team.jpg";
import team2 from "@/public/team2.jpg";
import StarryBackground from "@/lib/components/StarryBackground";
import { Button } from "@/lib/components/Button";

export interface IAppProps {}

export default function Portfolio(props: IAppProps) {
  return (
    <div
      className="bg-primary flex flex-col  justify-center items-center h-fit py-32 pb-0 px-8  md:px-16   2xl:px-48  "
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(10,10,10,1) 0%,rgba(0,0,0,1) 100%)",
      }}
    >
      <AnimateOnView
        className="w-full h-fit lg:h-[1000px]  flex flex-col justify-between items-center  relative mb-16"
        type="fadeInUp"
      >
        <StarryBackground />
        <div className="flex w-full flex-col items-center justify-center">
          <div className="w-full lg:w-1/2 px-4">
            <Typography
              type="h3"
              variant="h4"
              className="text-gray-300 mb-2 text-center lg:!text-2xl"
            >
              #1 JAAAAAN RESTAURANT
            </Typography>
            <Typography
              type="h3"
              variant="h5"
              className="text-gray-300 mb-8 text-center "
            >
              GLENDALE, CA
            </Typography>
          </div>
          <div className="  h-[700px] w-full lg:w-1/2 mb-4 z-[999]">
            <video
              src={"/vids/3.mp4"}
              autoPlay={true}
              loop={true}
              controls={false}
              playsInline
              muted
              className="h-full w-full object-contain object-center"
            />
          </div>
          <a
            href="https://www.instagram.com/p/CxC_oISLq91/"
            className="z-[999]"
          >
            <Typography
              type="h3"
              variant="h5"
              className="text-gray-300  text-center lg:!text-xl "
            >
              Check it out on instagram
            </Typography>
          </a>
        </div>
      </AnimateOnView>
      <AnimateOnView
        className="w-full h-fit lg:h-[1000px]  flex flex-col justify-between items-center relative mb-16"
        type="fadeInUp"
      >
        <StarryBackground />
        <div className="flex w-full flex-col items-center justify-center">
          <div className="w-full lg:w-1/2 px-4">
            <Typography
              type="h3"
              variant="h4"
              className="text-gray-300 mb-2 text-center lg:!text-2xl"
            >
              #2 BEAUTY SALON
            </Typography>
            <Typography
              type="h3"
              variant="h5"
              className="text-gray-300 mb-8 text-center "
            >
              GLENDALE, CA
            </Typography>
          </div>
          <div className="  h-[700px] w-full lg:w-1/2 mb-4 z-[999]">
            <video
              src={"/vids/1.mp4"}
              autoPlay={true}
              loop={true}
              controls={false}
              playsInline
              muted
              className="h-full w-full object-contain object-center"
            />
          </div>
          <a
            href="https://www.instagram.com/p/Cwo7Ok-uahx/"
            className="z-[999]"
          >
            <Typography
              type="h3"
              variant="h5"
              className="text-gray-300 mb-8 text-center lg:!text-xl "
            >
              Check it out on instagram
            </Typography>
          </a>
        </div>
      </AnimateOnView>
      <AnimateOnView
        className="w-full h-fit lg:h-[1000px]  flex flex-col justify-between items-center relative mb-16"
        type="fadeInUp"
      >
        <StarryBackground />
        <div className="flex w-full flex-col items-center justify-center">
          <div className="w-full lg:w-1/2 px-4">
            <Typography
              type="h3"
              variant="h4"
              className="text-gray-300 mb-2 text-center lg:!text-2xl"
            >
              #3 SEVAN
            </Typography>
            <Typography
              type="h3"
              variant="h5"
              className="text-gray-300 mb-8 text-center "
            >
              GLENDALE, CA
            </Typography>
          </div>
          <div className="  h-[700px] w-full lg:w-1/2 mb-4 z-[999]">
            <video
              src={"/vids/5.mp4"}
              autoPlay={true}
              loop={true}
              controls={false}
              playsInline
              muted
              className="h-full w-full object-contain object-center"
            />
          </div>
          <a
            href="https://www.instagram.com/p/CvcTvfWALTd/"
            className="z-[999]"
          >
            <Typography
              type="h3"
              variant="h5"
              className="text-gray-300 mb-8 text-center lg:!text-xl "
            >
              Check it out on instagram
            </Typography>
          </a>
        </div>
      </AnimateOnView>
      <AnimateOnView
        className="w-full  flex flex-col justify-between items-center relative mb-16"
        type="fadeIn"
      >
        <a href="https://www.instagram.com/marscontentusa/">
          <Button variant="outlined-extra">See More on instagram</Button>
        </a>
      </AnimateOnView>
    </div>
  );
}
