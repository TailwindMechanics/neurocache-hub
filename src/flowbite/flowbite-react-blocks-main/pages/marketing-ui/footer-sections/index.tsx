import type { FC } from "react";
import SitemapLogoFooterSection from "./sitemap-logo";
import NewsletterSignUpFooterSection from "./newsletter-footer";
import PreFooterCTASection from "./pre-footer";
import DefaultFooterSection from "./default";
import SitemapLinksFooterSection from "./sitemap-links";
import FlowbiteFooterSection from "./flowbite-footer";
import SocialMediaIconsFooterSection from "./social-media";

const AllFooterSections: FC = function () {
  return (
    <>
      <DefaultFooterSection />
      <SitemapLogoFooterSection />
      <NewsletterSignUpFooterSection />
      <PreFooterCTASection />
      <SitemapLinksFooterSection />
      <FlowbiteFooterSection />
      <SocialMediaIconsFooterSection />
    </>
  );
};

export default AllFooterSections;
