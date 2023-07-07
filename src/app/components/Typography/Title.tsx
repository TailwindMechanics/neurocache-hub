//path: src\app\components\Typography\Title.tsx

import React, { ReactNode } from 'react';

interface TitleProps {
    className?: string;
    children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ className, children }) => {
    return (
        <p className={`text-2xl font-bold  ${className}`}>{children}</p>
    )
}

export default Title;
