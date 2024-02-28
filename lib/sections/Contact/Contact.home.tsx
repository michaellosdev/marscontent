"use client";

import * as React from "react";
import { Typography } from "@/lib/components/Typography";
import Container from "@/lib/components/Container";
import { AnimateOnView } from "@/lib/utils/AnimateOnView/AnimateOnView";
import Carousel from "@/lib/components/Carousel";
import { Card, CardBody, CardHeader, CardTitle } from "@/lib/components/Card";
import { Button } from "@/lib/components/Button";
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
          type="h2"
          className="text-gray-300 !text-h2  md:!text-7xl  mb-4 !font-source-sans !font-semibold"
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
            +1 (424) 666-9892
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
        <Card className="lg:w-[80%] w-[100%] h-[42rem]" elevation={2}>
          <CardHeader className="mb-4">
            <CardTitle>Contact us</CardTitle>
          </CardHeader>
          <CardBody className="h-[90%]  w-full">
            <form
              data-netlify="true"
              name="contact"
              netlify-honeypot="bot-field"
              method="POST"
              className="flex flex-col  w-full h-full"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="h-[20%]   ">
                <label className="sr-only">Name</label>
                <input
                  type="text"
                  className={`px-4 py-2 h-[65%]  rounded-[12px]   text-body border-2   w-full`}
                  id="fullName"
                  placeholder="Full Name"
                  name="fullName"
                />
              </div>
              <div className="h-[20%]">
                <label className="sr-only">Email</label>
                <input
                  type="text"
                  className={`px-4 py-2 h-[65%]  rounded-[12px]   text-body border-2  w-full`}
                  id="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="h-[20%]">
                <label className="sr-only">Phone</label>
                <input
                  type="number"
                  className={`px-4 py-2 h-[65%]  rounded-[12px]   text-body border-2   w-full`}
                  id="tel"
                  placeholder="Phone Number"
                  name="tel"
                />
              </div>
              <div className="h-[40%]">
                <label className="sr-only">Message</label>
                <textarea
                  placeholder="Message"
                  className={`px-4 py-2 h-[80%]  rounded-[12px]   text-body border-2  w-full`}
                  id="message"
                  name="message"
                />
              </div>
              <div className="w-full flex justify-end ">
                <Button
                  variant="filled"
                  size="lg"
                  className=""
                  elevation={4}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </AnimateOnView>
    </div>
  );
}
