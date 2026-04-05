"use client";

import Image from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export function ImageWithFallback({
  src,
  alt,
  className = "",
  width = 1200,
  height = 800,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#FFD54F] via-[#FF8A65] to-[#4DB6AC] ${className}`}
      >
        <p className="px-6 text-center text-lg font-bold text-[#1A1A1A]">
          Image indisponible
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
