//path: src\components\generic\dataTable.tsx

import React from "react";

const DataTable: React.FC = () => {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<div className="bg-white pb-4 dark:bg-gray-900">
				<label
					htmlFor="table-search"
					className="sr-only"
				>
					Search
				</label>
				<div className="relative mt-1">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							className="h-4 w-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="text"
						id="table-search"
						className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						placeholder="Search htmlFor items"
					></input>
				</div>
			</div>
			<table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
				<thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th
							scope="col"
							className="p-4"
						>
							<div className="flex items-center">
								<input
									id="checkbox-all-search"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
								></input>
								<label
									htmlFor="checkbox-all-search"
									className="sr-only"
								>
									checkbox
								</label>
							</div>
						</th>
						<th
							scope="col"
							className="px-6 py-3"
						>
							Product
							name
						</th>
						<th
							scope="col"
							className="px-6 py-3"
						>
							Color
						</th>
						<th
							scope="col"
							className="px-6 py-3"
						>
							Category
						</th>
						<th
							scope="col"
							className="px-6 py-3"
						>
							Price
						</th>
						<th
							scope="col"
							className="px-6 py-3"
						>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input
									id="checkbox-table-search-1"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
								></input>
								<label
									htmlFor="checkbox-table-search-1"
									className="sr-only"
								>
									checkbox
								</label>
							</div>
						</td>
						<th
							scope="row"
							className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							Apple
							MacBook
							Pro
							17&quot;
						</th>
						<td className="px-6 py-4">
							Silver
						</td>
						<td className="px-6 py-4">
							Laptop
						</td>
						<td className="px-6 py-4">
							$2999
						</td>
						<td className="px-6 py-4">
							<a
								href="#"
								className="font-medium text-blue-600 hover:underline dark:text-blue-500"
							>
								Edit
							</a>
						</td>
					</tr>
					<tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input
									id="checkbox-table-search-2"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
								></input>
								<label
									htmlFor="checkbox-table-search-2"
									className="sr-only"
								>
									checkbox
								</label>
							</div>
						</td>
						<th
							scope="row"
							className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							Microsoft
							Surface
							Pro
						</th>
						<td className="px-6 py-4">
							White
						</td>
						<td className="px-6 py-4">
							Laptop PC
						</td>
						<td className="px-6 py-4">
							$1999
						</td>
						<td className="px-6 py-4">
							<a
								href="#"
								className="font-medium text-blue-600 hover:underline dark:text-blue-500"
							>
								Edit
							</a>
						</td>
					</tr>
					<tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input
									id="checkbox-table-search-3"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
								></input>
								<label
									htmlFor="checkbox-table-search-3"
									className="sr-only"
								>
									checkbox
								</label>
							</div>
						</td>
						<th
							scope="row"
							className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							Magic
							Mouse 2
						</th>
						<td className="px-6 py-4">
							Black
						</td>
						<td className="px-6 py-4">
							Accessories
						</td>
						<td className="px-6 py-4">
							$99
						</td>
						<td className="px-6 py-4">
							<a
								href="#"
								className="font-medium text-blue-600 hover:underline dark:text-blue-500"
							>
								Edit
							</a>
						</td>
					</tr>
					<tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input
									id="checkbox-table-3"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
								></input>
								<label
									htmlFor="checkbox-table-3"
									className="sr-only"
								>
									checkbox
								</label>
							</div>
						</td>
						<th
							scope="row"
							className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							Apple
							Watch
						</th>
						<td className="px-6 py-4">
							Silver
						</td>
						<td className="px-6 py-4">
							Accessories
						</td>
						<td className="px-6 py-4">
							$179
						</td>
						<td className="px-6 py-4">
							<a
								href="#"
								className="font-medium text-blue-600 hover:underline dark:text-blue-500"
							>
								Edit
							</a>
						</td>
					</tr>
					<tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input
									id="checkbox-table-3"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
								></input>
								<label
									htmlFor="checkbox-table-3"
									className="sr-only"
								>
									checkbox
								</label>
							</div>
						</td>
						<th
							scope="row"
							className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							iPad
						</th>
						<td className="px-6 py-4">
							Gold
						</td>
						<td className="px-6 py-4">
							Tablet
						</td>
						<td className="px-6 py-4">
							$699
						</td>
						<td className="px-6 py-4">
							<a
								href="#"
								className="font-medium text-blue-600 hover:underline dark:text-blue-500"
							>
								Edit
							</a>
						</td>
					</tr>
					<tr className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input
									id="checkbox-table-3"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
								></input>
								<label
									htmlFor="checkbox-table-3"
									className="sr-only"
								>
									checkbox
								</label>
							</div>
						</td>
						<th
							scope="row"
							className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							Apple iMac
							27&quot;
						</th>
						<td className="px-6 py-4">
							Silver
						</td>
						<td className="px-6 py-4">
							PC Desktop
						</td>
						<td className="px-6 py-4">
							$3999
						</td>
						<td className="px-6 py-4">
							<a
								href="#"
								className="font-medium text-blue-600 hover:underline dark:text-blue-500"
							>
								Edit
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;
