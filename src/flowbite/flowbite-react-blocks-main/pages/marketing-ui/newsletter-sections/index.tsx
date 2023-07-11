import type { FC } from "react";
import DefaultNewsletterSection from "./default";
import EmailSignUpCardNewsletterSection from "./email-signup-card";
import PopupEmailSignUpNewsletterSection from "./popup-email";
import ModalEmailSignUpNewsletterSection from "./modal-signup";

const AllNewsletterSections: FC = function () {
  return (
    <>
      <DefaultNewsletterSection />
      <EmailSignUpCardNewsletterSection />
      <PopupEmailSignUpNewsletterSection />
      <ModalEmailSignUpNewsletterSection />
    </>
  );
};

export default AllNewsletterSections;
