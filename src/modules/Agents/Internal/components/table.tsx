//path: src\modules\Agents\Internal\components\table.tsx

import React from "react";

interface TableProps {
    className?: string;
    children?: React.ReactNode;
}

export const Table: React.FC<TableProps> = (props) => {
    return (
        <>
            <table className={props.className}>{props.children}</table>
        </>
    );
};
