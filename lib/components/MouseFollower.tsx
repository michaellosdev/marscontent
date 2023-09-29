"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { psb } from "../utils/psb";
import useMousePosition from "../utils/useMousePosition";

const mouseFollowerVariants = cva(
  "absolute z-[999] pointer-events-none", // this represents the comet nucleus
  {
    variants: {
      type: {
        comet:
          "w-8 h-8 bg-white rounded-full relative overflow-hidden transition-transform duration-300 ease-out",
      },
    },
    defaultVariants: {
      type: "comet",
    },
  }
);

export interface MouseFollowerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mouseFollowerVariants> {}

const MouseFollower = React.forwardRef<HTMLDivElement, MouseFollowerProps>(
  ({ className, type, ...props }, ref) => {
    const { x, y } = useMousePosition();

    return (
      <div
        ref={ref}
        className={psb(mouseFollowerVariants({ className, type }))}
        style={{
          left: x - 15, // Adjust to center the nucleus on the cursor
          top: y - 15,
        }}
        {...props}
      >
        {type === "comet" && (
          <div
            style={{
              content: '""',
              width: "60%",
              height: "2px",
              top: "50%",
              left: "-65%",
              background:
                "linear-gradient(to right, rgba(255, 255, 255, 1), transparent)",
              transform: "rotate(45deg)",
            }}
          ></div>
        )}
      </div>
    );
  }
);

MouseFollower.displayName = "MouseFollower";
export default MouseFollower;
