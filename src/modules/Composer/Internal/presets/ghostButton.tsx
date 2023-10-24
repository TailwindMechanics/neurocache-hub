//path: src\modules\Composer\Internal\presets\ghostButton.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { Button as ButtonAtom } from "../atoms/button";
import { AtomProps } from "@modules/Composer/types";

const Atom: React.FC<AtomProps> = (props) => (
    <ButtonAtom
        {...props}
        motion={{
            whileTap: {
                scale: 0.93,
                transition: { duration: 0.15, ease: "linear" },
            },
        }}
    />
);

export const GhostButton = new ComponentBuilder("ButtonPreset", Atom)
    .withStyle("text-night-title")
    .withStyle("hover:text-aqua")
    .withStyle("font-bold")
    .build();
