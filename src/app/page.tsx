"use client";
import client from "../../tina/__generated__/client";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features";
import { useQuery } from "@tanstack/react-query";
import { BuiltCarousel } from "@/components/carousel";
import Carousel from "@/components/Hero/Carousel";
import MoreInfo from "@/components/Home/MoreInfo";

export default function Home() {
  const query = useQuery({
    queryKey: ["page"],
    queryFn: () => client.queries.homePage({ relativePath: "home.md" }),
  });

  if (!query.data) return null;
  return (
    <main className="w-screen max-w-full relative">
      <section className="w-screen min-h-screen max-w-full relative [--kv-margin:max(38.546vh,200px)] md:[--kv-margin:max(calc(333/876*100vh),20.8125rem)] [--kv-header-h:calc(var(--site-viewport-height)-var(--site-main-margin)-var(--kv-margin))] pt-[calc(var(--site-main-margin)+var(--kv-margin))]">
        <Hero {...query.data} />
        <Features {...query.data} />
        <div className="absolute right-0 -bottom-[0.0625rem] w-[57.846vw] md:w-[36.111vw] z-50">
          <svg
            className="w-full h-full"
            width="570"
            height="858"
            viewBox="0 0 570 858"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M885 0C885 473.884 488.797 858 0 858L885 858L885 0Z"
              className="fill-gray-200"
            ></path>
          </svg>
        </div>
        <Carousel {...query.data} />
      </section>
      <MoreInfo {...query.data} />
    </main>
  );
}
