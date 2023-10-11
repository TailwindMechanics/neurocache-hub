//path: src\modules\Composer\Internal\presets\card.tsx

import { Composer } from "..";

const Card = new Composer.Builder(Composer.Shell)
    .withStyle("space-y-0.5")
    .withStyle("font-mono")
    .withStyle("text-xs")
    .withStyle("p-1")
    .build();

export default Card;
