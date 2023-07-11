import type { FC } from "react";
import HeadingWithDescriptionContentSection from "./heading-description";
import ImagesWithHeadingAndDescriptionContentSection from "./heading-images";
import VideoEmbedContentSection from "./video-embed";
import ImageGalleryContentSection from "./image-gallery";
import SocialProofContentSection from "./social-proof";
import ContentCardImagesSection from "./card-images";
import TableOfContentsCardContentSection from "./table-contents";
import LogoCTALinksImageFeatureListContentSection from "./feature-list";
import HeadingWithDescriptionTwoColumnsContentSection from "./two-columns";

const AllContentSections: FC = function () {
  return (
    <>
      <HeadingWithDescriptionContentSection />
      <ImagesWithHeadingAndDescriptionContentSection />
      <VideoEmbedContentSection />
      <ImageGalleryContentSection />
      <HeadingWithDescriptionTwoColumnsContentSection />
      <SocialProofContentSection />
      <ContentCardImagesSection />
      <TableOfContentsCardContentSection />
      <LogoCTALinksImageFeatureListContentSection />
    </>
  );
};

export default AllContentSections;
