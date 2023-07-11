import type { FC } from "react";
import FinancialExchangeCryptoHero from "./crypto";
import AppScreenshotWithCTAsHero from "./cta-app-preview";
import InformationalCTAWithAppScreenshotHero from "./cta-screenshot-download";
import DefaultHero from "./default";
import EmailSignUpWithVideoHero from "./email-signup-video";
import BackgroundImageCardsHero from "./grid-cards";
import IllustrationWithEmailSignupHero from "./illustration";
import CoverImageWithCTAsHero from "./image-cover";
import HeroSectionWithSearchBar from "./search-bar";
import SignUpFormWithCTAHero from "./signup-cta";
import VideoEmbedWithCTAHero from "./video-embed-cta";
import VisualImageWithHeadingHero from "./video-image-heading";

const AllHeroSections: FC = function () {
  return (
    <>
      <DefaultHero />
      <FinancialExchangeCryptoHero />
      <AppScreenshotWithCTAsHero />
      <InformationalCTAWithAppScreenshotHero />
      <EmailSignUpWithVideoHero />
      <BackgroundImageCardsHero />
      <IllustrationWithEmailSignupHero />
      <CoverImageWithCTAsHero />
      <HeroSectionWithSearchBar />
      <SignUpFormWithCTAHero />
      <VideoEmbedWithCTAHero />
      <VisualImageWithHeadingHero />
    </>
  );
};

export default AllHeroSections;
