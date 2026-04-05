import { ReactNode } from "react";

type NeoCardProps = {
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
};

export function NeoCard({
  children,
  backgroundColor = "bg-white",
  className = "",
}: NeoCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 neo-border-thick neo-shadow-lg ${backgroundColor} ${className}`}
    >
      {children}
    </div>
  );
}
