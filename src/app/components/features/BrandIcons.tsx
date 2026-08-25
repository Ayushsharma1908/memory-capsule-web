"use client";

import Image from "next/image";

interface IconProps {
  size?: number;
  className?: string;
  showBg?: boolean;
}

export function GoogleChromeIcon({ size = 20, className = "" }: IconProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/chrome-icon.svg"
        alt="Google Chrome"
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export function ChatGPTIcon({ size = 20, className = "" }: IconProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/chatgpt-icon.svg"
        alt="ChatGPT"
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export function ClaudeIcon({ size = 20, className = "" }: IconProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/claude-icon.svg"
        alt="Claude"
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
