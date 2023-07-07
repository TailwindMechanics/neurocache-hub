//path: src\app\components\Typography\HelperText.tsx

import React, { ReactNode } from 'react';

interface HelperTextProps {
    styleClass?: string;
    children: ReactNode;
}

const HelperText: React.FC<HelperTextProps> = ({ styleClass, children }) => {
    return (
        <div className={`text-slate-400 ${styleClass}`}>{children}</div>
    )
}

export default HelperText;
