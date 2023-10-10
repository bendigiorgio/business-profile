import React from "react";
import { HomePageFeaturesGridFeature } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import AnimatedHeader from "../ui/animated-header";

type Props = {
  feature: HomePageFeaturesGridFeature;
};

const GridBlock = ({ feature }: Props) => {
  return (
    <section className=" pt-24 lg:pb-16 pb-20 relative z-10 bg-gray-200 text-black">
      <div className="container">
        <div className="grid gap-16 lg:gap-[3.57143%] grid-cols-1 lg:grid-cols-[42.85714%_1fr]">
          <div data-tina-field={tinaField(feature, "title")}>
            <AnimatedHeader subHeading={feature?.subtitle}>
              {feature?.title}
            </AnimatedHeader>
          </div>
          <ul className="row-start-2 col-span-full md:flex md:flex-wrap font-ryo-gothic sm:pt-12">
            {feature.items?.map((item, index) => (
              <li
                data-tina-field={tinaField(item!)}
                className="bg-white text-muted-light md:w-[calc((100%/2)-2.1px)] lg:w-[calc((100%/3)-2.1px)] mr-[2px] mb-[2px] pl-[52px] pb-[32px] pr-[28px] pt-[28px] box-border relative"
                key={`${item?.title}-${index}`}
              >
                <h3 className="font-medium text-lg mb-[21px] mt-[-3px] tracking-[0.05em] block text-black">
                  {item?.title}
                </h3>
                <div className="block">
                  <p className="text-sm mt-[-6px] mb-[22px] ">
                    <span className="text-xs text-muted absolute left-6 top-[30px] align-baseline font-karla">
                      {index + 1}
                    </span>{" "}
                    {item?.subtitle}
                  </p>
                  <ul className="[&>*:not(:first-child)]:mb-[-3px] [&>*:not(:first-child)]:mt-[9px]">
                    {item?.points?.map((point, index) => (
                      <li
                        className="text-xs leading-[1.5] mb-[-3px] mt-[-3px] pl-5 relative before:content-[''] before:w-2 before:h-[1px] before:bg-muted-light before:absolute before:inline-block before:left-0 before:top-[10px] "
                        key={`${item.title}-${index}-point`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GridBlock;
