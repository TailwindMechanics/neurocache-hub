//path: src\modules\Composer\Internal\presets\closeButton.tsx

import { Close as CloseIcon } from "@modules/Icons/External/icons";
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
        <CloseIcon />
    </ButtonAtom>
);

export const CloseButton = new Composer("TableButton", Atom)
    .withStyle("hover:border-aqua-dark")
    .withStyle("text-night-title")
    .withStyle("hover:text-aqua")
    .withStyle("bg-night-dark")
    .withStyle("border-night")
    .withStyle("justify-center")
    .withStyle("items-center")
    .withStyle("text-center")
    .withStyle("border-2")
    .withStyle("font-bold")
    .withStyle("-mt-[2%]")
    .withStyle("absolute")
    .withStyle("ml-[89%]")
    .withStyle("text-sm")
    .withStyle("w-9.5p")
    .withStyle("h-5p")
    .withStyle("flex")
    .withStyle("z-20")
    .withRoundedFull()
    .build();
