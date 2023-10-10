import { useTina } from "tinacms/dist/react";
import {
  HomePageQuery,
  Exact,
  HomePageFeaturesMemberFeature,
} from "../../../tina/__generated__/types";
import FeatureBlock from "./FeatureBlock";
import GridBlock from "./GridBlock";
import MemberBlock from "./MemberBlock";

const MoreInfo = (props: {
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
    <>
      {data.homePage.features?.map((feature, index) => {
        if (!feature) return null;
        switch (feature.__typename) {
          case "HomePageFeaturesLinkFeature":
            return (
              <FeatureBlock
                key={`${feature?.title}-${index}`}
                feature={feature}
              />
            );
          case "HomePageFeaturesGridFeature":
            return (
              <GridBlock key={`${feature?.title}-${index}`} feature={feature} />
            );
          case "HomePageFeaturesMemberFeature":
            return (
              <MemberBlock
                key={`${feature?.title}-${index}`}
                feature={feature as HomePageFeaturesMemberFeature}
              />
            );
        }
      })}
    </>
  );
};

export default MoreInfo;
