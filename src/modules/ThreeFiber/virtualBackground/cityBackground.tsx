//path: src\modules\ThreeFiber\virtualBackground\cityBackground.tsx

"use client";

import Data from "@shared/data";
import {
	FreeFlyControls,
	SetupCamera,
	SetBgColor,
	Buildings,
	Lights,
	Road,
} from "..";

export default function CityBackground() {
	return (
		<>
			<SetBgColor color={Data.Colors.night} />
			<SetupCamera />
			<FreeFlyControls />
			<Lights />
			<Road />
			<Buildings />
		</>
	);
}
