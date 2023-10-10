import React from "react";
import TextHoverAnimation from "./ui/text-hover-animation";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="h-24 fixed top-0 w-screen flex items-center justify-center">
      <ul className="flex flex-row w-full justify-between items-baseline mt-24 max-w-4xl h-full gap-x-4 font-cezanne ">
        <li>
          <Link href="/" className="uppercase font-bold font-karla text-4xl">
            ORIN
          </Link>
        </li>
        <div className="hidden md:flex w-[calc(24/32*100%)] justify-between gap-x-[calc(1/24*100%)] text-[0.8125rem]">
          <div className="grow shrink flex [&>li]:shrink-0 gap-x-[calc(1/24*100%)] justify-end xl:justify-start">
            <li>
              <Link href="/" className="">
                <TextHoverAnimation>企業</TextHoverAnimation>
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                <TextHoverAnimation>ニュース</TextHoverAnimation>
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                <TextHoverAnimation>EXPERTISE</TextHoverAnimation>
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                <TextHoverAnimation>採用情報</TextHoverAnimation>
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                <TextHoverAnimation>BLOG</TextHoverAnimation>
              </Link>
            </li>
          </div>
          <div></div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
