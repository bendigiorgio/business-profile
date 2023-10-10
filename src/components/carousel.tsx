"use client";
import { cn } from "@/uitls/cn";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "left" | "right";
  className?: string;
  children: React.ReactNode;
  speed: number;
}

const Carousel = ({
  className,
  direction = "left",
  speed = 30,
  children,
}: Props) => {
  return (
    <motion.div
      animate={{ x: direction === "left" ? "-50%" : "50%" }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
      className={cn("flex shrink-0 items-end", className)}
    >
      {children}
    </motion.div>
  );
};

const CarouselItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative shrink-0 w-[72.8vw] md:w-[32.638vw] px-[6vw] md:px-[2.77vw] overflow-hidden rounded-md aspect-[4/5]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BuiltCarousel = ({ images }: { images: (string | null)[] }) => {
  return (
    <Carousel>
      {images.map((image, index) => {
        if (!image) return null;
        return (
          <CarouselItem
            className={cn(
              "flex justify-center items-center overflow-hidden",
              index % 3 === 0 && "aspect-square"
            )}
            key={index}
          >
            <Image
              className="object-cover h-full w-full"
              width={500}
              height={500}
              alt=""
              src={image}
            />
          </CarouselItem>
        );
      })}
      {images.map((image, index) => {
        if (!image) return null;
        return (
          <CarouselItem
            className={cn(
              "flex justify-center items-center overflow-hidden",
              index % 3 === 0 && "aspect-square"
            )}
            key={`${index}-2`}
          >
            <Image
              className="object-cover h-full w-full"
              width={500}
              height={500}
              alt=""
              src={image}
            />
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};

export { Carousel, CarouselItem, BuiltCarousel };
