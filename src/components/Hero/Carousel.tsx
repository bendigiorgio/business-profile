import { tinaField, useTina } from "tinacms/dist/react";
import { HomePageQuery, Exact } from "../../../tina/__generated__/types";
import { BuiltCarousel } from "../carousel";

const Carousel = (props: {
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
    <div
      data-tina-field={tinaField(data.homePage, "carousel")}
      className="relative flex w-full overflow-hidden"
    >
      {data.homePage.carousel?.image && (
        <BuiltCarousel images={data.homePage.carousel.image} />
      )}
    </div>
  );
};

export default Carousel;
