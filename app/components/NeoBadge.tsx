import { ReactNode } from "react";

type NeoBadgeColor = "yellow" | "orange" | "pink" | "turquoise";

type NeoBadgeProps = {
  children: ReactNode;
  color?: NeoBadgeColor;
  className?: string;
};

const colorClasses: Record<NeoBadgeColor, string> = {
  yellow: "bg-[#FFD54F]",
  orange: "bg-[#FF8A65]",
  pink: "bg-[#F48FB1]",
  turquoise: "bg-[#4DB6AC]",
};

export function NeoBadge({
  children,
  color = "yellow",
  className = "",
}: NeoBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-xl px-5 py-2 font-black text-[#1A1A1A] neo-border-thick neo-shadow ${colorClasses[color]} ${className}`}
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
      {children}
    </span>
  );
}
