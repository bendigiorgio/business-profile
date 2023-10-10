import { HomePageFeaturesMemberFeature } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import AnimatedHeader from "../ui/animated-header";
import Image from "next/image";

type Props = {
  feature: HomePageFeaturesMemberFeature;
};

const MemberBlock = ({ feature }: Props) => {
  return (
    <section className=" pt-24 lg:pb-16 pb-20 relative z-10 bg-gray-200 text-black">
      <div className="container">
        <div className="grid gap-16 lg:gap-[3.57143%] grid-cols-1 lg:grid-cols-[42.85714%_1fr]">
          <div data-tina-field={tinaField(feature, "title")}>
            <AnimatedHeader subHeading={feature?.subtitle}>
              {feature?.title}
            </AnimatedHeader>
          </div>

          <ul
            data-tina-field={tinaField(feature)}
            className="grid gap-x-1 gap-y-12 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 row-start-2 col-span-full font-ryo-gothic sm:pt-12"
          >
            {feature.members.map((member, index) => (
              <li
                data-tina-field={tinaField(member.member, "_values")}
                key={`${member.member.name}-${index}`}
              >
                <Image
                  width={400}
                  height={400}
                  className="object-cover w-full h-auto mb-6 aspect-[4/5]"
                  alt={member.member.name}
                  src={member.member.image}
                />
                <div className="space-y-2">
                  <p className=" text-xs ">{member.member.title}</p>
                  <p className="font-medium text-lg">{member.member.name}</p>
                  <p className="text-xs text-muted-light font-karla">
                    {member.member.englishName}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MemberBlock;
