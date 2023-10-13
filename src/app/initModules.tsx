//path: src\app\initModules.tsx

"use client";

import IGraph from "@modules/Graph";
import { FC } from "react";

console.log(`%c>> InitModules`, "color: #beefed; font-weight: bold;");

IGraph.Init();

const InitModules: FC = () => {
    return null;
};

export default InitModules;
