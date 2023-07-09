//path: src\components\generic\redirectToLanding.tsx

"use client"

import { Loading } from "./loading";
import { useEffect } from "react";


export default function RedirectToLanding() {
    useEffect(() => {
        window.location.href = process.env.NEXT_PUBLIC_URL || '/';
    }, []);

    return <Loading />;
}