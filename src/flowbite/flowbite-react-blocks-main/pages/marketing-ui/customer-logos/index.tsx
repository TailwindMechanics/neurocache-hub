import type { FC } from "react";
import CardsWithCTACustomerLogos from "./cards-with-cta";
import CardsWithDescriptionCustomerLogos from "./cards-with-description";
import DefaultCustomerLogos from "./default";
import HeadingGridLayoutCustomerLogos from "./heading-grid-layout";

const AllCustomerLogos: FC = function () {
  return (
    <>
      <DefaultCustomerLogos />
      <CardsWithCTACustomerLogos />
      <CardsWithDescriptionCustomerLogos />
      <HeadingGridLayoutCustomerLogos />
    </>
  );
};

export default AllCustomerLogos;
