//path: src\components\z_deprecated\dashboard\latestCustomers.tsx

import Datepicker from "./datepicker";
import Image from "next/image";
import { FC } from "react";

const LatestCustomers: FC = () => {
	return (
		<div className="mb-4 h-full rounded-lg  sm:p-6">
			<div className="mb-4 flex items-center justify-between">
				<h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
					Latest Customers
				</h3>
				<a
					href="#"
					className="text-primary-700 dark:text-primary-500 inline-flex items-center rounded-lg p-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					View all
				</a>
			</div>
			<div className="flow-root">
				<ul className="divide-y divide-gray-200 dark:divide-gray-700">
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="shrink-0">
								<Image
									className="h-8 w-8 rounded-full"
									src="/images/users/neil-sims.png"
									alt=""
									width={
										40
									} // assuming "10" is equivalent to "40px", adjust as needed
									height={
										40
									} // assuming "10" is equivalent to "40px", adjust as needed
								/>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
									Neil
									Sims
								</p>
								<p className="truncate text-sm text-gray-500 dark:text-gray-400">
									email@flowbite.com
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$320
							</div>
						</div>
					</li>
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="shrink-0">
								<Image
									className="h-8 w-8 rounded-full"
									src="/images/users/bonnie-green.png"
									alt=""
									width={
										40
									} // assuming "10" is equivalent to "40px", adjust as needed
									height={
										40
									} // assuming "10" is equivalent to "40px", adjust as needed
								/>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
									Bonnie
									Green
								</p>
								<p className="truncate text-sm text-gray-500 dark:text-gray-400">
									email@flowbite.com
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$3467
							</div>
						</div>
					</li>
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="shrink-0">
								<Image
									className="h-8 w-8 rounded-full"
									src="/images/users/michael-gough.png"
									alt=""
									width={
										40
									} // assuming "10" is equivalent to "40px", adjust as needed
									height={
										40
									} // assuming "10" is equivalent to "40px", adjust as needed
								/>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
									Fart
									Man
								</p>
								<p className="truncate text-sm text-gray-500 dark:text-gray-400">
									email@flowbite.com
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$67
							</div>
						</div>
					</li>
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="shrink-0">
								<Image
									className="h-8 w-8 rounded-full"
									src="/images/users/thomas-lean.png"
									alt=""
									width={
										40
									} // assuming "10" is equivalent to "40px", adjust as needed
									height={
										40
									} // assuming "10" is equivalent to "40px", adjust as needed
								/>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
									Thomes
									Lean
								</p>
								<p className="truncate text-sm text-gray-500 dark:text-gray-400">
									email@flowbite.com
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$2367
							</div>
						</div>
					</li>
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="shrink-0">
								<Image
									className="h-8 w-8 rounded-full"
									src="/images/users/lana-byrd.png"
									alt=""
									width={
										40
									} // assuming "10" is equivalent to "40px", adjust as needed
									height={
										40
									} // assuming "10" is equivalent to "40px", adjust as needed
								/>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
									Lana
									Byrd
								</p>
								<p className="truncate text-sm text-gray-500 dark:text-gray-400">
									email@flowbite.com
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$367
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">
				<Datepicker />
				<div className="shrink-0">
					<a
						href="#"
						className="text-primary-700 dark:text-primary-500 inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase hover:bg-gray-100 dark:hover:bg-gray-700 sm:text-sm"
					>
						Sales Report
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

export default LatestCustomers;
