import type { FC } from "react";
import BackgroundImageAccountRecovery from "./background-image";
import DefaultAccountRecovery from "./default";
import DescriptionAccountRecovery from "./description";
import FeatureListAccountRecovery from "./feature-list";
import IllustrationAccountRecovery from "./illustration";

const AllAccountRecovery: FC = function () {
  return (
    <>
      <DefaultAccountRecovery />
      <BackgroundImageAccountRecovery />
      <DescriptionAccountRecovery />
      <FeatureListAccountRecovery />
      <IllustrationAccountRecovery />
    </>
  );
};

export default AllAccountRecovery;
