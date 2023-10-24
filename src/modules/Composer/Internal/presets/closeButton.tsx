//path: src\modules\Composer\Internal\presets\closeButton.tsx

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
        }}
    />
);

export const CloseButton = new Composer("TableButton", Atom)
    .withStyle("hover:border-aqua-dark")
    .withStyle("border-night-light")
    .withStyle("text-night-title")
    .withStyle("hover:text-aqua")
    .withStyle("justify-center")
    .withStyle("items-center")
    .withStyle("text-center")
    .withStyle("bg-night")
    .withStyle("border-1.5")
    .withStyle("font-bold")
    .withStyle("-mt-[3%]")
    .withStyle("absolute")
    .withStyle("ml-[89%]")
    .withStyle("text-sm")
    .withStyle("w-9p")
    .withStyle("h-5p")
    .withStyle("flex")
    .withStyle("z-20")
    .withRoundedFull()
    .build();
