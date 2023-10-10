import React from "react";
import { HomePageFeaturesLinkFeature } from "../../../tina/__generated__/types";
import { ChevronRight } from "lucide-react";
import { Button } from "@nextui-org/react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import AnimatedHeader from "../ui/animated-header";
import Link from "next/link";

type Props = {
  feature: HomePageFeaturesLinkFeature;
};

const FeatureBlock = ({ feature }: Props) => {
  return (
    <section className="lg:pt-36 pt-24 lg:pb-16 pb-20 relative z-10 bg-gray-200 text-black">
      <div className="container">
        <div className="grid gap-16 lg:gap-[3.57143%] grid-cols-1 lg:grid-cols-[42.85714%_1fr]">
          <div data-tina-field={tinaField(feature, "title")}>
            <AnimatedHeader subHeading={feature?.subtitle}>
              {feature?.title}
            </AnimatedHeader>
          </div>
          <div>
            <h3
              data-tina-field={tinaField(feature, "catch")}
              className="lg:mt-[-0.5em] lg:text-[2.5rem] text-[1.875rem] leading-[1.4]"
            >
              {feature?.catch}
            </h3>
            <div
              data-tina-field={tinaField(feature, "body")}
              className="lg:mt-10 mt-[1.875rem] text-muted-light font-light font-karla tracking-wider break-words"
            >
              <TinaMarkdown content={feature.body} />
            </div>
            <div className="pb-5 mt-12 text-white">
              <Link href={feature?.link?.url ?? "#"}>
                <Button
                  data-tina-field={tinaField(feature, "link")}
                  className="self-start text-xs w-44 h-14 flex flex-row items-center justify-between"
                  size="lg"
                  color={feature?.link?.style as "primary" | "secondary"}
                  radius="full"
                >
                  <span>{feature?.link?.title}</span>
                  <ChevronRight className="h-4 w-4 -mr-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
