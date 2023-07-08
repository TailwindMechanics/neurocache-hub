//path: src\app\components\generic\react\btn.tsx

interface bootnProps {
    label: string;
    onClick?: () => void;
}

export const Btn = ({ label, onClick } : bootnProps) => {
    return <>
        {<button onClick={onClick} className={`btn bg-primary border-secondary text-fart hover:bg-secondary hover:text-accent`}>
            {label}
        </button>}</>
}