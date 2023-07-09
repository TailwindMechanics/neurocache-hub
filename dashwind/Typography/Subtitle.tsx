//path: src\app\components\Typography\Subtitle.tsx

import React, { ReactNode } from 'react';

interface SubtitleProps {
    styleClass?: string;
    children: ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ styleClass, children }) => {
    return (
        <div className={`text-xl font-semibold ${styleClass}`}>{children}</div>
    )
}

export default Subtitle;
