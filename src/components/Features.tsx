"use client";

import { Exact, HomePageQuery } from "../../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import AnimatedHeader from "./ui/animated-header";
import AnimatedLink from "./ui/animated-link";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import Blocks from "./Hero/Blocks";

const Features = (props: {
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

  return (
    <section className="pb-48 w-full relative container ">
      <div className="grid grid-cols-1 lg:grid-cols-[max-content_max-content] lg:gap-x-48 justify-center">
        <motion.div
          data-tina-field={tinaField(data.homePage)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex lg:flex-col flex-row lg:space-y-12 w-full justify-between lg:justify-normal lg:w-40 lg:pb-0 pb-12 "
        >
          <div>
            <AnimatedHeader
              subHeading="お知らせ"
              className="md:text-4xl text-3xl"
            >
              News
            </AnimatedHeader>
          </div>
          <AnimatedLink href="/">ニュース一覧</AnimatedLink>
        </motion.div>
        <ol className="grid grid-cols-1 gap-6">
          {data.homePage.news?.map((news, index) => (
            <li
              data-tina-field={tinaField(
                data.homePage.news![index]!,
                "article"
              )}
              key={`${news?.article?.id}-${index}`}
              className=" relative hover-card"
            >
              <Link
                href={`/news/${news?.article?._sys.breadcrumbs.join("/")}`}
                className="grid sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 hover-card-secondary"
              >
                <div className="relative sm:h-44 sm:w-64 w-full h-64 rounded-md overflow-hidden ">
                  <Image
                    className="object-cover"
                    fill
                    src={news?.article?.image ?? ""}
                    alt={news?.article?.title ?? "ニュース記事"}
                  />
                </div>
                <div className="flex flex-col py-3 space-y-6">
                  <div className="flex flex-row font-medium items-center text-xs">
                    <p>
                      {news?.article?.date &&
                        format(parseISO(news.article.date), "yyyy.MM.dd")}
                    </p>
                    <span className="bg-separator w-[1px] h-[60%] mx-4" />
                    <p>{news?.article?.category}</p>
                  </div>
                  <p className="font-medium">{news?.article?.title}</p>
                  <p className="text-xs text-muted">{news?.article?.author}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
        {data.homePage.blocks?.map((block, index) => {
          if (block?.__typename === "HomePageBlocksFeature") {
            return <Blocks key={`${block?.title}-${index}`} {...block} />;
          }
        })}
      </div>
    </section>
  );
};

export default Features;
