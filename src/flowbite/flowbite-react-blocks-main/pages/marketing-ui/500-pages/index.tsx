import type { FC } from "react";
import BackgroundImage500Page from "./background-image";
import Default500Page from "./default";
import Illustration500Page from "./illustration";

const All500Pages: FC = function () {
  return (
    <>
      <Default500Page />
      <BackgroundImage500Page />
      <Illustration500Page />
    </>
  );
};

export default All500Pages;
