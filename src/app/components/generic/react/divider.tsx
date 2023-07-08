//path: src\app\components\generic\react\divider.tsx

interface DividerProps {
    tailwind?: string;
}

export const Divider: React.FC<DividerProps> = ({ tailwind }) => {
    return <div className={`${tailwind} divider h-0.5`}></div>
}
