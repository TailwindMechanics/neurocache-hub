//path: src\modules\Colors\index.tsx

import { flatColors } from './Internal/colors';

interface Colors {
    Colors: typeof flatColors;
}

const IColors: Colors = {
    Colors: flatColors,
};

export default IColors;