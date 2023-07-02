// src\app\components\divider.tsx

interface DividerProps {
    color: string;
  }

export function Divider({ color }: DividerProps) {
    return<div className={`divider h-1 bg-${color}`}></div>
}