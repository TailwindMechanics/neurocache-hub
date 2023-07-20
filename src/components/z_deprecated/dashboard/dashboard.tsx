//path: src\components\z_deprecated\dashboard\dashboard.tsx

import AcquisitionOverview from "./acquisitionOverview";
import NewProductsThisWeek from "./newProductsThisWeek";
import UserSignupsThisWeek from "./userSignupsThisWeek";
import SessionsByCountry from "./sessionsByCountry";
import VisitorsThisWeek from "./visitorsThisWeek";
import LatestCustomers from "./latestCustomers";
import SalesThisWeek from "./salesThisWeek";
import Transactions from "./transactions";
import { FC } from "react";

const Dashboard: FC = () => {
	return (
		<>
			<div className="px-10 grayscale">
				<div className="my-10 shadow-2xl drop-shadow-2xl ">
					<SessionsByCountry />
				</div>
				<div className="my-10 grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
					<div className="flex shadow-2xl drop-shadow-2xl">
						<NewProductsThisWeek />
					</div>
					<div className="shadow-2xl drop-shadow-2xl">
						<VisitorsThisWeek />
					</div>
					<div className="shadow-2xl drop-shadow-2xl">
						<UserSignupsThisWeek />
					</div>
				</div>
				<div className="shadow-2xl drop-shadow-2xl">
					<LatestCustomers />
				</div>
				<div className="my-10 grid h-full w-full grid-cols-1 xl:gap-10 2xl:grid-cols-3">
					<div className=" grid h-full w-full gap-10 sm:grid-cols-2 2xl:grid-cols-1">
						<SalesThisWeek />
						<div className="flex shadow-2xl drop-shadow-2xl">
							<AcquisitionOverview />
						</div>
					</div>
					<div className="shadow-2xl drop-shadow-2xl">
						<Transactions />
					</div>
					<span className="pb-1"></span>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
