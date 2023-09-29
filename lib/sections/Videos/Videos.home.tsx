"use client";

import { AnimateOnView } from "@/lib/utils/AnimateOnView/AnimateOnView";
import * as React from "react";

export interface IAppProps {}

export default function Videos(props: IAppProps) {
  return (
    <div className="h-fit lg:h-96 w-full flex  flex-row flex-wrap">
      <AnimateOnView
        type="fadeIn"
        className="w-full lg:w-1/4 h-96 md:h-96 bg-white bg-opacity-30"
      >
        <video
          src={"/vids/1.mp4"}
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
          muted
          className="h-full w-full object-cover"
        />
      </AnimateOnView>
      <AnimateOnView
        type="fadeIn"
        delay={100}
        className="w-full lg:w-1/4 h-96 md:h-96 bg-white bg-opacity-30"
      >
        <video
          src={"/vids/2.mp4"}
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
          muted
          className="h-full w-full object-cover"
        />
      </AnimateOnView>
      <AnimateOnView
        type="fadeIn"
        delay={200}
        className="w-full lg:w-1/4 h-96 md:h-96 bg-white bg-opacity-30"
      >
        <video
          src={"/vids/3.mp4"}
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
          muted
          className="h-full w-full object-cover"
        />
      </AnimateOnView>
      <AnimateOnView
        type="fadeIn"
        delay={300}
        className="w-full lg:w-1/4 h-96 md:h-96 bg-white bg-opacity-30"
      >
        <video
          src={"/vids/4.mp4"}
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
          muted
          className="h-full w-full object-cover"
        />
      </AnimateOnView>
    </div>
  );
}
