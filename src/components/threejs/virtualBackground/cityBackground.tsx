//path: src\components\threejs\virtualBackground\cityBackground.tsx

"use client";

import Buildings from "@src/components/threejs/virtualBackground/buildings";
import Lights from "@src/components/threejs/virtualBackground/lights";
import Road from "@src/components/threejs/geometry/road";
import colors from "src/data/colors.json";
import React from "react";
import SetBgColor from "../generic/setBgColour";
import FreeFlyControls from "../controllers/freeFlyControls";
import CameraSetup from "../generic/cameraSetup";

export default function CityBackground() {
	return (
		<>
			<SetBgColor color={colors.night.DEFAULT} />
			<CameraSetup />
			<FreeFlyControls />
			<Lights />
			<Road />
			<Buildings />
		</>
	);
}
