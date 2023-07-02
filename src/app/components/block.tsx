// src\app\components\block.tsx


interface BlockProps {
    left: string;
    right: string;
    children: React.ReactNode;
  }
  
  export function Block({ left, right, children }: BlockProps) {
    return (
      <div style={{ paddingLeft: left, paddingRight: right }}>
        {children}
      </div>
    );
  }
  