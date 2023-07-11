import type { FC } from "react";
import DefaultCTASection from "./default";
import ImageWithCTAButtonSection from "./image-cta-button";
import HeadingWithCTAButtonSection from "./heading-cta";
import QRCodeCTASection from "./qr-code";
import CardCTAsWithIconsSection from "./cards-icons";
import FinancialTradingCTASection from "./finance-trading";
import EmailSignUpCTASection from "./email-signup";
import MobileAppDownloadCTASection from "./mobile-app";
import TwoCardsAndImagesCTASection from "./two-cards";

const AllCTASections: FC = function () {
  return (
    <>
      <DefaultCTASection />
      <ImageWithCTAButtonSection />
      <HeadingWithCTAButtonSection />
      <QRCodeCTASection />
      <CardCTAsWithIconsSection />
      <FinancialTradingCTASection />
      <EmailSignUpCTASection />
      <MobileAppDownloadCTASection />
      <TwoCardsAndImagesCTASection />
    </>
  );
};

export default AllCTASections;
