"use client";

import Image from "next/image";

interface IconProps {
  size?: number;
  className?: string;
  showBg?: boolean;
}

/**
 * Google / Chrome Icon — Uses the exact same /chrome-icon.svg as the hover navbar
 */
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

/**
 * Authentic OpenAI ChatGPT Icon — Uses /chatgpt-icon.svg from public folder
 */
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

/**
 * Authentic Anthropic Claude Icon (Terracotta spark mark)
 */
export function ClaudeIcon({ size = 20, className = "" }: IconProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="#CC785C"
        className="shrink-0"
      >
        <path d="M13.827 1.555a.8.8 0 0 0-1.654 0l-.82 4.475a8.77 8.77 0 0 1-6.85 6.85l-4.475.82a.8.8 0 0 0 0 1.654l4.475.82a8.77 8.77 0 0 1 6.85 6.85l.82 4.475a.8.8 0 0 0 1.654 0l.82-4.475a8.77 8.77 0 0 1 6.85-6.85l4.475-.82a.8.8 0 0 0 0-1.654l-4.475-.82a8.77 8.77 0 0 1-6.85-6.85l-.82-4.475Z" />
      </svg>
    </div>
  );
}
