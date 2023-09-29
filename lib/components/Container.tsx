import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { psb } from "../utils/psb";

const containerVariants = cva(
  "flex w-full h-[48rem] flex-col py-8  px-8   md:px-16 md:h-screen   2xl:px-48 shrink-0 snap-start",
  {
    variants: {},
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={psb(containerVariants({ className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
