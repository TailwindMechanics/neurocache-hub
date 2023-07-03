// src\app\components\layout\divider.tsx
interface DividerProps {
    tailwind?: string;
  }
  
  export const Divider: React.FC<DividerProps> = ({ tailwind }) => {
      return <div className={`${tailwind} bg-secondary m-0 divider h-0.5`}></div>
  }
  