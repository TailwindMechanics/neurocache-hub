//path: src\components\dashboard\newProductsThisWeek.tsx

import NewProductsChart from "../charts/newProductsChart";
import Datepicker from "./datepicker";
import { FC } from "react";

const NewProductsThisWeek: FC = () => {
	return (
		<div className="rounded-lg p-4 shadow sm:p-6 xl:p-8">
			<div className="flex items-center">
				<div className="shrink-0">
					<span className="text-2xl font-bold leading-none dark:text-white sm:text-3xl">
						2,340
					</span>
					<h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
						New products this
						week
					</h3>
				</div>
				<div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold text-green-600 dark:text-green-400">
					14.6%
					<svg
						className="h-5 w-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</div>
			<NewProductsChart />
			<div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">
				<Datepicker />
				<div className="shrink-0">
					<a
						href="#"
						className="text-primary-700 dark:text-primary-500 inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase hover:bg-gray-100 dark:hover:bg-gray-700 sm:text-sm"
					>
						Products Report
						<svg
							className="ml-1 h-4 w-4 sm:h-5 sm:w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={
									2
								}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewProductsThisWeek;
