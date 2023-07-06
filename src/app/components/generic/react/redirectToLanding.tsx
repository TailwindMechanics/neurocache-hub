//path: src\app\components\generic\react\redirectToLanding.tsx

"use client"

import { Loading } from "./loading";
import { useEffect } from "react";


export default function RedirectToLanding() {
    useEffect(() => {
        window.location.href = process.env.NEXT_LANDING_URL || '/';
    }, []);

    return <Loading />;
}