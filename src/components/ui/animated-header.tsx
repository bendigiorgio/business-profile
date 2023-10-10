import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/uitls/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
  subHeading?: string | null;
  theme?: "light" | "dark";
}

const AnimatedHeader = ({
  children,
  className,
  subHeading,
  theme = "dark",
  ...props
}: Props) => {
  const wrapperVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.2,
        staggerChildren: 0.04,
        delayChildren: 0.22,
      },
    },
  };
  const charVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: {
          duration: 0.4,
        },
      },
    },
  };

  const subHeadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.58,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={wrapperVariants}
      viewport={{ once: true, amount: "all", margin: "-20px" }}
      className={cn("uppercase text-4xl font-bold", className)}
      {...props}
    >
      {typeof children === "string" &&
        Array.from(children).map((char, index) => (
          <motion.span
            className="inline-block"
            key={`${char}-${index}`}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      {subHeading && (
        <motion.p
          variants={subHeadingVariants}
          viewport={{ once: true, amount: "all", margin: "-20px" }}
          className={cn(
            "lg:text-base text-sm font-normal",
            theme === "light" ? "text-muted-light" : "text-muted"
          )}
        >
          {subHeading}
        </motion.p>
      )}
    </motion.div>
  );
};

export default AnimatedHeader;
