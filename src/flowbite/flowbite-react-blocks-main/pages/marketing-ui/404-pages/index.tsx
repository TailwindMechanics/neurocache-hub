import type { FC } from "react";
import Default404Page from "./default";
import IllustrationLinks404Page from "./illustration-links";
import SearchBarCardLinks404Page from "./search-bar-card-links";

const All404Pages: FC = function () {
  return (
    <>
      <Default404Page />
      <IllustrationLinks404Page />
      <SearchBarCardLinks404Page />
    </>
  );
};

export default All404Pages;
