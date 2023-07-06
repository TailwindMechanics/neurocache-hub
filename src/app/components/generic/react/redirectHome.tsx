//path: src\app\components\generic\react\redirectHome.tsx

// path: src/app/components/generic/react/redirectHome.tsx

"use client"

import { Loading } from "./loading";
import { useEffect } from "react";

export default function RedirectHome() {
    useEffect(() => {
        window.location.href = process.env.NEXT_PUBLIC_URL || '/';
    }, []);

    return <Loading />;
}