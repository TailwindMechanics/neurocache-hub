import type { FC } from "react";
import BackgroundImageLoginForm from "./background-image";
import DefaultLoginForm from "./default";
import LoginFormWithDescription from "./description";
import LoginFormWithIllustration from "./illustration";
import SocialMediaLoginForm from "./social-media";

const AllLoginForms: FC = function () {
  return (
    <>
      <DefaultLoginForm />
      <BackgroundImageLoginForm />
      <LoginFormWithDescription />
      <LoginFormWithIllustration />
      <SocialMediaLoginForm />
    </>
  );
};

export default AllLoginForms;
