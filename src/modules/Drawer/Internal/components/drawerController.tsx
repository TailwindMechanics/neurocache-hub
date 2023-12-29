//path: src\modules\Drawer\Internal\components\drawerController.tsx

import { FC, useCallback, useContext, useEffect } from "react";
import React from "react";

import { DrawerContext } from "../hooks/useDrawer";

const DrawerController: FC = React.memo(() => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error(
            "Drawer Controller must be used within a DrawerProvider",
        );
    }
    const { toggleDrawer, closeDrawer } = context;

    const handleKeyPress = useCallback(
        (event: { key: string }) => {
            if (event.key === "`") {
                toggleDrawer();
            } else if (event.key === "Escape") {
                closeDrawer();
            }
        },
        [closeDrawer, toggleDrawer],
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);
    return null;
});

DrawerController.displayName = "DrawerController";
export { DrawerController };
