import type { FC } from "react";
import CardsWithStatisticsSocialProof from "./card-statistics";
import CarouselSliderSocialProof from "./carousel-slider";
import DefaultSocialProof from "./default";
import HeadingWithStatisticsSocialProof from "./heading-statistics";
import StatisticsWithIconsAndCTASocialProof from "./icon-statistics";
import IllustrationWithStatisticsSocialProof from "./illustration";

const AllSocialProofs: FC = function () {
  return (
    <>
      <DefaultSocialProof />
      <CardsWithStatisticsSocialProof />
      <CarouselSliderSocialProof />
      <HeadingWithStatisticsSocialProof />
      <StatisticsWithIconsAndCTASocialProof />
      <IllustrationWithStatisticsSocialProof />
    </>
  );
};

export default AllSocialProofs;
