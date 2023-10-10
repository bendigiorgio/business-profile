"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import { Exact, HomePageQuery } from "../../../tina/__generated__/types";
import { Button } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import splineInterpolation from "@/uitls/splineInterpolation";
import { motion } from "framer-motion";

const Hero = (props: {
  data: HomePageQuery;
  variables: Exact<{
    relativePath: string;
  }>;
  query: string;
}) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const hero = data.homePage.hero;

  const [blur, setBlue] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [saturation, setSaturation] = useState(100);

  function handleScroll(e: Event) {
    setBlue(
      splineInterpolation(
        window.scrollY,
        [0, window.innerHeight / 2.4, window.innerHeight],
        [0, 0, 30]
      )
    );
    setSaturation(
      splineInterpolation(
        window.scrollY,
        [0, window.innerHeight / 2.4, window.innerHeight],
        [100, 100, 0]
      )
    );
    setOpacity(
      splineInterpolation(
        window.scrollY,
        [0, window.innerHeight / 2.4, window.innerHeight],
        [0, 0, 1]
      )
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!hero) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed w-full top-0 h-screen"
      >
        <video
          className="h-full w-full object-cover "
          playsInline
          muted
          autoPlay
          loop
          src="/smoke.mp4"
        />
      </motion.div>
      {hero.image && (
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              initial={{ y: "101%", borderRadius: "10vw 0 0 0" }}
              animate={{ y: 0, borderRadius: 0 }}
              transition={{
                y: { duration: 1.8, ease: [0.26, 0.06, 0, 1] },
                borderRadius: {
                  duration: 1.8,
                  delay: 0.8,
                  ease: [0.47, 0.16, 0.24, 1],
                },
              }}
              className="bg-neutral-800 block h-full w-full left-0 top-0 absolute opacity-50"
            />
            <motion.div
              initial={{ y: "101%", borderRadius: "10vw 0 0 0" }}
              animate={{ y: 0, borderRadius: 0 }}
              transition={{
                y: { duration: 2.4, ease: [0.26, 0.06, 0, 1] },
                borderRadius: {
                  duration: 1.8,
                  delay: 0.8,
                  ease: [0.47, 0.16, 0.24, 1],
                },
              }}
              className="bg-neutral-800 block h-full w-full left-0 top-0 absolute"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.8,
              ease: [0.43, 0.05, 0.17, 1],
            }}
            className="w-full h-full"
            style={{
              filter: `blur(${blur}px) saturate(${saturation}%)`,
            }}
          >
            {!hero.video ? (
              <Image
                fill
                unoptimized
                data-tina-field={tinaField(hero, "image")}
                className="object-cover z-0 h-full w-full "
                src={hero.image!}
                alt=""
              />
            ) : (
              <video
                data-tina-field={tinaField(hero, "video")}
                className="object-cover h-full w-full transform-gpu"
                playsInline
                muted
                autoPlay
                loop
                src={hero.video}
              />
            )}
            <div className="absolute inset-0 bg-black opacity-30" />
            <div
              className="absolute inset-0 opacity-0"
              style={{
                opacity: opacity,
              }}
            >
              <Image
                src="/blur.webp"
                className="opacity-80 absolute w-full h-full object-cover inset-0"
                alt="mask"
                fill
              />
              <div className="absolute inset-0 bg-black opacity-50" />
            </div>
          </motion.div>
        </div>
      )}
      <div className="absolute top-[calc(var(--site-main-margin)+var(--kv-margin))] inset-x-0 container h-[var(--kv-header-h)]">
        <div className="xl:ml-[calc(6/28*100%)] h-full flex flex-col justify-between">
          <motion.div>
            <h1
              data-tina-field={tinaField(hero, "title")}
              className="lg:text-[5rem] lg:leading-[1.5] text-[2.5rem] leading-[1.4] font-semibold tracking-[0.08em] font-cezanne mt-[-2.2em] md:mt-[-2.35em]"
            >
              {hero?.title.split(" ").map((line, index) => (
                <span
                  className="block overflow-hidden relative"
                  key={`title-hero-${index}`}
                >
                  <span className="inline-block relative">
                    <motion.span
                      className="inline-block whitespace-nowrap"
                      initial={{ y: "102%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 1.5,
                        ease: [0.43, 0.05, 0.17, 1],
                        delay: 0.1,
                      }}
                    >
                      {line}
                    </motion.span>
                    <motion.span
                      initial={{ y: "101%" }}
                      animate={{ y: "-101%" }}
                      transition={{
                        duration: 1.2,
                        ease: [0.43, 0.05, 0.17, 1],
                      }}
                      style={{ borderRadius: "0.7em 0 0.7em 0" }}
                      className="bg-gray-200 h-full w-full absolute top-0 left-0 inline-block opacity-50"
                    />
                    <motion.span
                      initial={{ y: "101%" }}
                      animate={{ y: "-101%" }}
                      transition={{
                        duration: 1.5,
                        ease: [0.43, 0.05, 0.17, 1],
                      }}
                      style={{ borderRadius: "0.7em 0 0.7em 0" }}
                      className="bg-gray-200 h-full w-full absolute top-0 left-0 inline-block "
                    />
                  </span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.35,
                duration: 1.5,
                ease: [0.43, 0.05, 0.17, 1],
              }}
              data-tina-field={tinaField(hero, "description")}
              className="md:font-medium md:text-base font-karla text-sm mt-2 md:mt-8 leading-9 tracking-wide"
            >
              {hero?.description}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.8,
              duration: 1.5,
              ease: [0.43, 0.05, 0.17, 1],
            }}
            className="mt-14 md:mb-28 mb-14 "
          >
            {hero.link && (
              <Link href={hero.link.url ?? "#"}>
                <Button
                  data-tina-field={tinaField(hero, "link")}
                  className="self-start text-xs w-44 h-14 flex flex-row items-center justify-between"
                  size="lg"
                  color={hero.link.style as "primary" | "secondary"}
                  radius="full"
                >
                  <span>{hero.link.title}</span>
                  <ChevronRight className="h-4 w-4 -mr-2" />
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
