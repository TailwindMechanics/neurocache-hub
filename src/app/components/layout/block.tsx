// src\app\components\layout\block.tsx

interface BlockProps {
  left?: string;
  right?: string;
  top?: string;
  btm?: string;
  children: React.ReactNode;
}

export function Block({ left = "0", right = "0", top = "0", btm = "0", children }: BlockProps) {
  return (
    <div style={{ paddingLeft: left, paddingRight: right, paddingTop: top, paddingBottom: btm }}>
      {children}
    </div>
  );
}