import type { FC } from "react";
import HeaderWithCenteredLogo from "./centered";
import DefaultHeaderNavigation from "./default";
import HeaderWithDropdownMenu from "./dropdown";
import HeaderWithSearchBar from "./search";
import HeaderWithSubNavbar from "./sub-navbar";
import HeaderWithUserDropdown from "./user-dropdown";

const AllHeaders: FC = function () {
  return (
    <>
      <DefaultHeaderNavigation />
      <HeaderWithCenteredLogo />
      <HeaderWithDropdownMenu />
      <HeaderWithSearchBar />
      <HeaderWithSubNavbar />
      <HeaderWithUserDropdown />
    </>
  );
};

export default AllHeaders;
