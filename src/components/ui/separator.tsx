import { cn } from "@/uitls/cn";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLHRElement> {}

const Separator = ({ className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn("bg-separator h-[1px] w-full my-48", className)}
    />
  );
};

export default Separator;
