import type { FC } from "react";
import DefaultPricingTable from "./default";
import HorizontalPricingTable from "./horizontal";
import FeatureListPricingCard from "./feature-list";
import ComparisonPricingTable from "./comparison-table";
import HighlightedPlanPricingTable from "./highlighted-plan";
import ToggleSwitchPricingTable from "./pricing-toggle";

const AllPricingTables: FC = function () {
  return (
    <>
      <DefaultPricingTable />
      <HorizontalPricingTable />
      <FeatureListPricingCard />
      <ComparisonPricingTable />
      <HighlightedPlanPricingTable />
      <ToggleSwitchPricingTable />
    </>
  );
};

export default AllPricingTables;
