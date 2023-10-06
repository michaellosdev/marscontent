"use client";

import * as React from "react";
import { Typography } from "@/lib/components/Typography";
import Container from "@/lib/components/Container";
import { AnimateOnView } from "@/lib/utils/AnimateOnView/AnimateOnView";
import StarryBackground from "@/lib/components/StarryBackground";
import { Card, CardBody, CardHeader, CardTitle } from "@/lib/components/Card";
import Image from "next/image";
import videoIcon from "@/public/video.png";
import videoEditingIcon from "@/public/videoediting.png";
import smmIcon from "@/public/smm.png";
import contentIcon from "@/public/content.png";
import targetedMarketingIcon from "@/public/targetedmarketing.png";
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
              Services
            </Typography>
          </AnimateOnView>
        </div>
      </Container>
      <div
        className="bg-primary flex flex-col lg:flex-row flex-wrap  justify-center items-center h-fit py-32 pb-0 px-8  md:px-16   2xl:px-48  "
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(10,10,10,1) 0%,rgba(0,0,0,1) 100%)",
        }}
      >
        <AnimateOnView
          type="fadeInUp"
          className="w-full lg:w-1/3 mb-8 lg:mr-8 h-fit lg:!h-80"
        >
          <Card className="w-full bg-transparent text-white h-full ">
            <CardHeader className="flex items-center mb-8 justify-between ">
              <Typography type="h3" variant="h3" className="mr-4 text-gray-300">
                Media Production
              </Typography>
              <Image src={videoIcon} width={48} height={48} alt="video icon" />
            </CardHeader>
            <CardBody>
              <Typography
                type="h4"
                variant="body-large"
                className="text-gray-300"
              >
                Enhance your brand{"'"}s visibility with our state-of-the-art
                media production services. From detailed product photography to
                corporate videography, we provide bespoke solutions that align
                with your business ethos and objectives.
              </Typography>
            </CardBody>
          </Card>
        </AnimateOnView>
        <AnimateOnView
          type="fadeInUp"
          className="w-full lg:w-1/3 mb-8 lg:mr-8 h-fit lg:!h-80"
        >
          <Card className="w-full h-full  bg-transparent text-white ">
            <CardHeader className="flex items-center mb-8 justify-between">
              <Typography type="h3" variant="h3" className="mr-8 text-gray-300">
                Video Editing
              </Typography>
              <Image
                src={videoEditingIcon}
                width={48}
                height={48}
                alt="video icon"
              />
            </CardHeader>
            <CardBody>
              <Typography
                type="h4"
                variant="body-large"
                className="text-gray-300"
              >
                Transform your raw footage into a powerful business tool. Our
                seasoned team meticulously edits videos, ensuring they not only
                engage but also drive actionable results, making every frame
                count in conveying your corporate narrative.
              </Typography>
            </CardBody>
          </Card>
        </AnimateOnView>
        <AnimateOnView
          type="fadeInUp"
          className="w-full lg:w-1/3 mb-8 lg:mr-8 h-fit lg:!h-80"
        >
          <Card className="w-full h-full  bg-transparent text-white ">
            <CardHeader className="flex items-center mb-8 justify-between">
              <Typography type="h3" variant="h3" className="mr-8 text-gray-300">
                SMM
              </Typography>
              <Image src={smmIcon} width={48} height={48} alt="video icon" />
            </CardHeader>
            <CardBody>
              <Typography
                type="h4"
                variant="body-large"
                className="text-gray-300"
              >
                Maximize your digital footprint with our strategic SMM
                campaigns. By understanding your business niche, we curate and
                disseminate content that not only boosts engagement but also
                fosters brand loyalty among your target demographic.
              </Typography>
            </CardBody>
          </Card>
        </AnimateOnView>
        <AnimateOnView
          type="fadeInUp"
          className="w-full lg:w-1/3 mb-8 lg:mr-8 h-fit lg:!h-80"
        >
          <Card className="w-full  bg-transparent text-white h-full ">
            <CardHeader className="flex items-center mb-8 justify-between">
              <Typography type="h3" variant="h3" className="mr-8 text-gray-300">
                Content Strategy
              </Typography>
              <Image
                src={contentIcon}
                width={48}
                height={48}
                alt="video icon"
              />
            </CardHeader>
            <CardBody>
              <Typography
                type="h4"
                variant="body-large"
                className="text-gray-300"
              >
                Effective content is the backbone of business communication. We
                devise robust content strategies that resonate with your target
                audience, positioning your brand as an industry thought leader
                and ensuring a consistent and impactful brand voice.
              </Typography>
            </CardBody>
          </Card>
        </AnimateOnView>
        <AnimateOnView
          type="fadeInUp"
          className="w-full lg:w-1/3 mb-8 lg:mr-8 h-fit lg:!h-80"
        >
          <Card className="w-full  bg-transparent text-white h-full ">
            <CardHeader className="flex items-center mb-8 justify-between">
              <Typography type="h3" variant="h3" className="mr-8 text-gray-300">
                Targeted Marketing
              </Typography>
              <Image
                src={targetedMarketingIcon}
                width={48}
                height={48}
                alt="video icon"
              />
            </CardHeader>
            <CardBody>
              <Typography
                type="h4"
                variant="body-large"
                className="text-gray-300"
              >
                Unlock the potential of precision marketing with our expertise.
                By harnessing data analytics and market insights, we design
                campaigns that pinpoint your desired audience, driving more
                conversions and ensuring optimal return on investment.
              </Typography>
            </CardBody>
          </Card>
        </AnimateOnView>
      </div>
      <Contact />
    </div>
  );
}
