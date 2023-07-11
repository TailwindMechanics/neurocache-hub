//path: src\components\hub\mainContent.tsx

import { FC } from 'react'


interface MainContentProps {
    children?: React.ReactNode;
}

const MainContent: FC<MainContentProps> = ({ children }) => {
    return <>
        <div className={`flex w-full h-full scrollbar-none overflow-auto mt-10 shadow-2xl drop-shadow-2xl rounded-xl border bg-main-dark border-main-light`}>
            {children}
        </div>
    </>
}

export default MainContent