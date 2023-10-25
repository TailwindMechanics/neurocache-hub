//path: src\modules\Composer\Internal\presets\roundButton.tsx

import { Button as ButtonAtom } from "../atoms/button";
import { Composer } from "@modules/Composer";

interface AtomProps extends React.ComponentProps<typeof ButtonAtom> {}

const Atom: React.FC<AtomProps> = (props) => (
    <ButtonAtom
        {...props}
        motion={{
            whileTap: {
                scale: 0.1,
                transition: { duration: 0.3, ease: "linear" },
            },
        }}>
        {props.children}
    </ButtonAtom>
);

export const RoundButton = new Composer("RoundButton", Atom)
    .withStyle("hover:border-aqua-dark")
    .withStyle("text-night-title")
    .withStyle("hover:text-aqua")
    .withStyle("bg-night-dark")
    .withStyle("border-night")
    .withStyle("justify-center")
    .withStyle("items-center")
    .withStyle("text-center")
    .withStyle("font-bold")
    .withStyle("border-2")
    .withStyle("text-sm")
    .withStyle("flex")
    .withRoundedFull()
    .build();
