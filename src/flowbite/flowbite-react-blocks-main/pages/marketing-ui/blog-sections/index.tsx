import type { FC } from "react";
import DefaultBlogSection from "./default";
import ListWithHeadingBlogSection from "./list-with-heading";
import CenteredPostsBlogSection from "./centered-posts";
import CardWithImageBlogSection from "./card-with-image";
import FeaturedPostBlogSection from "./featured-post";

const AllBlogSections: FC = function () {
  return (
    <>
      <DefaultBlogSection />
      <ListWithHeadingBlogSection />
      <CenteredPostsBlogSection />
      <CardWithImageBlogSection />
      <FeaturedPostBlogSection />
    </>
  );
};

export default AllBlogSections;
