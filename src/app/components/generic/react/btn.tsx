//path: src\app\components\generic\react\btn.tsx

interface bootnProps {
    btn?: string;
    onClick?: () => void;
}

export const Btn = ({ btn, onClick } : bootnProps) => {
    return <>
        {btn && <button onClick={onClick} className={`btn bg-primary text-background hover:bg-primary hover:text-accent`}>
            {btn}
        </button>}</>
}