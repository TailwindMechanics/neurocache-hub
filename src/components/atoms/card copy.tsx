//path: src\components\atoms\card copy.tsx

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

const options = ["Option 1", "Option 2", "Option 3"];

interface CardProps {
	title: string;
	body: string;
	buttonLabel: string;
	onClick: () => void;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selectedOption, setSelectedOption] = useState(options[0]);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="max-w-md rounded-md border bg-slate-800 p-4">
			<button
				onClick={() => setIsCollapsed(!isCollapsed)}
				className="rounded text-white"
			>
				<div className="flex items-center">
					<div className="mr-4 h-6 w-6 rounded-full bg-blue-500"></div>
					<h3 className="text-2xl font-semibold">{props.title}</h3>
				</div>
			</button>

			{isCollapsed ? null : (
				<div className="mt-4">
					<p className="mb-4">{props.body}</p>
					<Listbox
						value={selectedOption}
						onChange={(value) => {
							setSelectedOption(value);
							setIsOpen(!isOpen);
						}}
					>
						<div className="relative">
							<Listbox.Button className="flex w-full items-center justify-between rounded border px-4 py-2">
								{selectedOption}{" "}
								{isOpen ? (
									<ChevronUpIcon className="h-5 w-5" />
								) : (
									<ChevronDownIcon className="h-5 w-5" />
								)}
							</Listbox.Button>
							<Transition
								as={Fragment}
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Listbox.Options className="absolute z-10 mt-2 w-full rounded border bg-white shadow-lg">
									{options.map((option, index) => (
										<Listbox.Option
											key={index}
											value={option}
											as="li"
											className="cursor-pointer p-4"
										>
											{option}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</Transition>
						</div>
					</Listbox>
					<button
						onClick={props.onClick}
						className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
					>
						{props.buttonLabel}
					</button>
				</div>
			)}
		</div>
	);
};

export default Card;
