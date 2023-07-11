import type { FC } from "react";
import DefaultFAQSection from "./default";
import SearchBarWithLinksFAQSection from "./help-center-search";
import FAQSectionAsAccordion from "./accordion";
import FAQSectionWithThreeColumns from "./grid-layout";
import HelpCenterFAQSection from "./help-center";

const AllFAQSections: FC = function () {
  return (
    <>
      <DefaultFAQSection />
      <SearchBarWithLinksFAQSection />
      <FAQSectionAsAccordion />
      <FAQSectionWithThreeColumns />
      <HelpCenterFAQSection />
    </>
  );
};

export default AllFAQSections;
