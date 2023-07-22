//path: src\components\threejs\virtualBackground\cityBackground.tsx

"use client";

import Buildings from "@src/components/threejs/virtualBackground/buildings";
import FreeFlyControls from "@src/threeComponents/freeFlyControls";
import Lights from "@src/components/threejs/virtualBackground/lights";
import CameraSetup from "@src/threeComponents/cameraSetup";
import SetBgColor from "@src/threeComponents/setBgColour";
import Road from "@src/components/threejs/geometry/road";
import colors from "src/data/colors.json";
import React from "react";

export default function CityBackground() {
	return (
		<>
			<SetBgColor color={colors.background} />
			<CameraSetup />
			<FreeFlyControls />
			<Lights />
			<Road />
			<Buildings />
		</>
	);
}
