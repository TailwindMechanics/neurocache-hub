//path: src\app\components\virtualBackground\buildings.tsx

"use client";

import colors from 'src/app/data/colors.json';
import Building from './Building';



const generateBuildings = (count: number, side: number, positionZ: number, colorArray: string | any[], scaleArray: string | any[]) => {
    const buildings = [];
    for (let i = 0; i < count; i++) {
        buildings.push(<Building 
            key={`building-${i}`}
            color={colorArray[i % colorArray.length]} 
            position={[side, 0, positionZ * i]} 
            scale={scaleArray[i % scaleArray.length]} 
        />);
    }
    return buildings;
};

const generateCars = (count: number, positionZ: number, colorArray: string | any[], scaleArray: string | any[]) => {
    const cars = [];
    for (let i = 0; i < count; i++) {
        // randomize car position on the road
        const x = Math.random() > 0.5 ? 10 : -10; 
        cars.push(<Building 
            key={`car-${i}`}
            color={colorArray[i % colorArray.length]} 
            position={[x, 0, positionZ * i * Math.random() * 2]} // more variation on the Z
            scale={scaleArray[i % scaleArray.length]} 
        />);
    }
    return cars;
};

const generatePeople = (count: number, positionZ: number, colorArray: string | any[], scaleArray: string | any[]) => {
    const people = [];
    for (let i = 0; i < count; i++) {
        // place people closer to the buildings
        const x = Math.random() > 0.5 ? 35 : -35; 
        people.push(<Building 
            key={`person-${i}`}
            color={colorArray[i % colorArray.length]} 
            position={[x, 0, positionZ * i * Math.random()]} // more varied intervals
            scale={scaleArray[i % scaleArray.length]} 
        />);
    }
    return people;
};

export default function City() {
    const leftSide = -40;
    const rightSide = 40;
    const positionZ = -200;
    const colorArray = [colors.primary, colors.secondary, colors.accent, colors.background];

    const buildingScaleArray = [
        [30, 120, 80],
        [30, 180, 140],
        [40, 250, 160],
        [25, 200, 80],
        [35, 300, 160],
        [45, 220, 120],
        [30, 150, 100],
    ];
    const carScaleArray = [[5, 2, 3]];
    const personScaleArray = [[1, 2, 1]];

    const buildingCount = 24;
    const carCount = 50;
    const peopleCount = 100;

    const leftBuildings = generateBuildings(buildingCount, leftSide, positionZ, colorArray, buildingScaleArray);
    const rightBuildings = generateBuildings(buildingCount, rightSide, positionZ, colorArray, buildingScaleArray);
    const cars = generateCars(carCount, positionZ / 2, colorArray, carScaleArray);
    const people = generatePeople(peopleCount, positionZ / 4, colorArray, personScaleArray);

    return (
        <>
            {leftBuildings}
            {rightBuildings}
            {cars}
            {people}
        </>
    );
}