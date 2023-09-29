"use  client";

import * as React from "react";
import { Typography } from "@/lib/components/Typography";
import { AnimateOnView } from "@/lib/utils/AnimateOnView/AnimateOnView";
import { Card, CardBody, CardHeader, CardTitle } from "@/lib/components/Card";
import Image from "next/image";
import sample from "@/public/sample.jpg";
import team from "@/public/team.jpg";
import team2 from "@/public/team2.jpg";

export interface IAppProps {}

export default function AboutAbout(props: IAppProps) {
  return (
    <div className="bg-primary flex flex-col  justify-center items-center h-fit py-16 pb-0   ">
      <AnimateOnView
        className="w-full h-fit lg:h-[1000px]  flex flex-col justify-between items-center "
        type="fadeInUp"
      >
        <div className=" border-none h-full  lg:w-[75%] px-8 flex flex-col justify-center item-start my-8  lg:text-center">
          {/* <Typography type="h3" variant="h3" className="text-gray-300 mb-8">
            {" "}
            Crafting Visual Excellence{" "}
          </Typography> */}

          <div className="text-gray-200  ">
            <Typography
              variant="h3"
              type="h3"
              className="!font-thin !font-source-sans !text-2xl lg:!text-4xl"
            >
              Welcome to <span className="font-zian !font-bold ">MARS</span>. In
              today{"'"}s digitally-driven world, the power of high-quality
              visual content is paramount. It isn{"'"}t just about taking a
              pretty picture or shooting a video; it{"'"}s about weaving a
              narrative that resonates, captivates, and engages. <br />
            </Typography>
          </div>
        </div>
        <div className="  h-[500px] w-full">
          <video
            src={"/vids/4.mp4"}
            autoPlay={true}
            loop={true}
            controls={false}
            playsInline
            muted
            className="h-full w-full object-cover object-center"
          />
        </div>
      </AnimateOnView>
      <AnimateOnView
        className="w-full h-fit   flex flex-col justify-between items-center "
        type="fadeInUp"
      >
        <div className=" border-none h-full  lg:w-[75%] px-8 flex flex-col flex-wrap justify-center item-start mt-8 lg:text-center">
          {/* <Typography type="h3" variant="h3" className="text-gray-300 mb-8">
            {" "}
            Crafting Visual Excellence{" "}
          </Typography> */}

          <div className="text-gray-200 my-16 ">
            <Typography
              variant="h3"
              type="h3"
              className="!font-thin !font-source-sans !text-2xl lg:!text-4xl text-left"
            >
              Whether you{"'"}re in the embryonic stages of a fresh startup or
              navigating the complex terrains of an established enterprise, we
              understand the uniqueness of every brand. Our services are crafted
              to cater to these diverse needs, ensuring that every piece of
              content is both distinct and echoes your brand{"'"}s voice. <br />
              <br />
              We are a team of proficient ensemble, composed of adept
              photographers, imaginative videographers, and savvy social media
              marketers, come together with a shared vision: to create. Each
              project, under our skilled hands, is more than just work – it{"'"}
              s art. <br />
              <br />
            </Typography>
          </div>
          <AnimateOnView
            className="w-full h-fit  flex flex-col justify-between items-center my-16"
            type="fadeInUp"
          >
            <Typography
              type="h2"
              variant="h2"
              className="text-gray-300 mb-8 !font-zian"
            >
              OUR TEAM
            </Typography>
            <div className="w-full flex flex-col lg:flex-row justify-between items-center">
              <div className="w-full lg:w-[49%] h-[800px] relative mb-4">
                <Image
                  src={team2}
                  className="w-full h-full object-cover object-top  "
                  alt="team01"
                />
                <div className="absolute bottom-0 left-0 w-full h-36 bg-white bg-opacity-50 flex flex-col justify-center items-center px-4 ">
                  <Typography
                    type="h3"
                    variant="h3"
                    className="text-gray-900  font-zian"
                  >
                    Arsen
                  </Typography>
                  <Typography type="h3" variant="h5" className="text-gray-900 ">
                    Founder, Digital Creator
                  </Typography>
                </div>
              </div>
              <div className="w-full lg:w-[49%] h-[800px] relative mb-4">
                <Image
                  src={team}
                  className="w-full h-full object-cover object-top "
                  alt="team01"
                />
                <div className="absolute bottom-0 left-0 w-full h-36 bg-white bg-opacity-50 flex flex-col justify-center items-center px-4 ">
                  <Typography
                    type="h3"
                    variant="h3"
                    className="text-gray-900  font-zian"
                  >
                    Maria
                  </Typography>
                  <Typography type="h3" variant="h5" className="text-gray-900 ">
                    Marketing, Social Media
                  </Typography>
                </div>
              </div>
            </div>
          </AnimateOnView>
          <Typography
            variant="h3"
            type="h3"
            className="!font-thin !font-source-sans !text-2xl lg:!text-4xl text-left text-white mb-16"
          >
            So, if you{"'"}re ready to redefine your brand{"'"}s visual
            narrative and etch an indelible mark in the digital arena, let{" "}
            <span className="font-zian !font-bold ">MARS</span> be your compass.
            Reach out today, and let{"'"}s begin this journey of visual
            excellence together.
          </Typography>
        </div>

        {/* <div className="flex w-full">
          <div className="h-[500px]   w-full ">
            <video
              src={"/vids/1.mp4"}
              autoPlay={true}
              loop={true}
              controls={false}
              playsInline
              muted
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div> */}
      </AnimateOnView>
    </div>
  );
}
