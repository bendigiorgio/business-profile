"use client";

import {
  Exact,
  HomePageBlocks,
  HomePageQuery,
} from "../../../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import Separator from "../ui/separator";
import AnimatedHeader from "../ui/animated-header";
import { BlockTemplate } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ChevronRight } from "lucide-react";
import { Button } from "@nextui-org/react";

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
const Blocks = (block: ArrayElement<HomePageQuery["homePage"]["blocks"]>) => {
  if (!block) return null;
  return (
    <>
      <Separator className="col-span-full" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex lg:flex-col flex-row lg:space-y-12 w-full justify-between lg:justify-normal lg:w-40 lg:pb-0 pb-12 "
      >
        <div data-tina-field={tinaField(block, "title")}>
          <AnimatedHeader
            subHeading={block?.subtitle ?? undefined}
            className="md:text-4xl text-3xl whitespace-nowrap"
          >
            {block?.title}
          </AnimatedHeader>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 gap-6 place-self-end max-w-xl space-y-4">
        <p
          data-tina-field={tinaField(block, "catch")}
          className="text-6xl max-w-md font-medium leading-normal"
        >
          {block?.catch}
        </p>
        <div
          data-tina-field={tinaField(block, "body")}
          style={{ fontFeatureSettings: "palt" }}
          className="text-muted font-light font-karla tracking-wider break-words"
        >
          <TinaMarkdown content={block?.body} />
        </div>
        {block?.link && (
          <Link href={block.link.url ?? "#"}>
            <Button
              data-tina-field={tinaField(block, "link")}
              className="self-start text-xs w-44 h-14 flex flex-row items-center justify-between"
              size="lg"
              color={block.link.style as "primary" | "secondary"}
              radius="full"
            >
              <span>{block.link.title}</span>
              <ChevronRight className="h-4 w-4 -mr-2" />
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Blocks;
