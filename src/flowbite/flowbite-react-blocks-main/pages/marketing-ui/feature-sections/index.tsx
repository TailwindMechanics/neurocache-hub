import type { FC } from "react";
import DefaultFeatureListSection from "./default";
import ImageWithFeatureListAndCTAsSection from "./image-list";
import FeatureListWithCTAsSection from "./cta-list";
import FeatureListWithIconsSection from "./icons-list";
import FeatureIconsAndCTASection from "./icon-list-cta";
import DescriptionWithFeatureListIconsSection from "./description-icon-list";
import FeatureListCardsSection from "./card-list";
import AlternateImageWithFeatureListSection from "./alternate";
import ComparisonCardsFeatureSection from "./comparison";
import RoundedIconsFeatureSection from "./rounded-icons";

const AllFeatureSections: FC = function () {
  return (
    <>
      <DefaultFeatureListSection />
      <ImageWithFeatureListAndCTAsSection />
      <FeatureListWithCTAsSection />
      <FeatureListWithIconsSection />
      <FeatureIconsAndCTASection />
      <DescriptionWithFeatureListIconsSection />
      <FeatureListCardsSection />
      <AlternateImageWithFeatureListSection />
      <ComparisonCardsFeatureSection />
      <RoundedIconsFeatureSection />
    </>
  );
};

export default AllFeatureSections;
