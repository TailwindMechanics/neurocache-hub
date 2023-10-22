//path: src\modules\Agents\Internal\components\dropdown.tsx

import { FC } from "react";

interface dropdownProps {}

const dropdown: FC<dropdownProps> = ({}) => {
    return (
        <>
            <div
                id="dropdown-9"
                className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700">
                <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button-9">
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Show
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Edit
                        </a>
                    </li>
                </ul>
                <div className="py-1">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                        Delete
                    </a>
                </div>
            </div>
        </>
    );
};

export default dropdown;
