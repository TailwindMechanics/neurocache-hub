"use client"

import { Vector3, CatmullRomCurve3 } from 'three';


export class Path {
    private curve: CatmullRomCurve3;

    constructor(input:number[][]) {
        this.curve = new CatmullRomCurve3(
            input.map(arr => new Vector3(...arr))
        );
    }

    public Sample(normalized: number) {
        if (normalized < 0) normalized = 0;
        if (this.curve === undefined) return [0, 0, 0];
        
        let point = this.curve.getPoint(normalized);
        return point ? point.toArray() as number[] : [0, 0, 0];  // return a default value if point is undefined
    }
}