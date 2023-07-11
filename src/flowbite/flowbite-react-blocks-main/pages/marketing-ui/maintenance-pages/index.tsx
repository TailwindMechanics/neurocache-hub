import type { FC } from "react";
import LogoMaintenancePage from "./branded";
import DefaultMaintenancePage from "./default";
import IllustrationMaintenancePage from "./illustration";

const AllMaintenancePages: FC = function () {
  return (
    <>
      <DefaultMaintenancePage />
      <LogoMaintenancePage />
      <IllustrationMaintenancePage />
    </>
  );
};

export default AllMaintenancePages;
