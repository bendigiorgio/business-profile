import { cn } from "@/uitls/cn";
import { ChevronRight } from "lucide-react";
import Link, { LinkProps } from "next/link";
import React from "react";

interface Props extends LinkProps, React.HTMLAttributes<HTMLAnchorElement> {}

const AnimatedLink = ({ children, className, ...props }: Props) => {
  return (
    <Link
      className={cn(
        "custom-link font-medium text-xs inline-flex items-center gap-12 justify-between pn-0 min-w-[10rem] min-h-[1.875rem] [--border-color:#fff] md:min-w-[12.5rem]",
        children
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronRight className="w-4 h-3 stroke-[3] shrink-0 relative" />
    </Link>
  );
};

export default AnimatedLink;
