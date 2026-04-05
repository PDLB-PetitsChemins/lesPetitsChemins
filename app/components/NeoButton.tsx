import Link from "next/link";
import { ReactNode } from "react";

type NeoButtonVariant = "primary" | "secondary";

type NeoButtonProps = {
  children: ReactNode;
  variant?: NeoButtonVariant;
  className?: string;
  href?: string;
};

const variantClasses: Record<NeoButtonVariant, string> = {
  primary:
    "bg-[#FF8A65] text-[#1A1A1A] hover:bg-[#ff754d] neo-shadow-lg border-4 border-[#1A1A1A]",
  secondary:
    "bg-white text-[#1A1A1A] hover:bg-[#FFF3E0] neo-shadow-lg border-4 border-[#1A1A1A]",
};

function ButtonContent({
  children,
  variant = "primary",
  className = "",
}: Pick<NeoButtonProps, "children" | "variant" | "className">) {
  return (
    <span
      className={`neo-button neo-hover inline-flex h-14 items-center justify-center rounded-xl px-8 text-lg font-black transition-transform ${variantClasses[variant]} ${className}`}
      style={{ fontFamily: "Nunito Sans, sans-serif" }}
    >
      {children}
    </span>
  );
}

export function NeoButton({
  children,
  variant = "primary",
  className = "",
  href,
}: NeoButtonProps) {
  if (href) {
    return (
      <Link href={href} className="inline-block">
        <ButtonContent variant={variant} className={className}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <ButtonContent variant={variant} className={className}>
      {children}
    </ButtonContent>
  );
}
