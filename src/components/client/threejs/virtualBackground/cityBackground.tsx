//path: src\components\client\threejs\virtualBackground\cityBackground.tsx

"use client";

import colors from "@src/data/colors";
import FreeFlyControls from "../controllers/freeFlyControls";
import CameraSetup from "../generic/cameraSetup";
import SetBgColor from "../generic/setBgColour";
import Road from "../geometry/road";
import Buildings from "./buildings";
import Lights from "./lights";

export default function CityBackground() {
	return (
		<>
			<SetBgColor color={colors.night} />
			<CameraSetup />
			<FreeFlyControls />
			<Lights />
			<Road />
			<Buildings />
		</>
	);
}
