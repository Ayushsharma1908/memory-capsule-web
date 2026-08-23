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
 * Authentic OpenAI ChatGPT Icon (matching user-provided emblem image)
 */
export function ChatGPTIcon({ size = 20, className = "", showBg = false }: IconProps) {
  const iconSvg = (
    <svg
      width={showBg ? Math.round(size * 0.58) : size}
      height={showBg ? Math.round(size * 0.58) : size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9 6.0651 6.0651 0 0 0-4.981-2.01 6.0094 6.0094 0 0 0-5.7604 4.0772 6.0125 6.0125 0 0 0-4.001 2.9238 6.045 6.045 0 0 0 .7415 7.0913 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.0768 6.0157 6.0157 0 0 0 3.9993-2.9246 6.0446 6.0446 0 0 0-.7491-7.1775ZM13.2599 22.428a4.4674 4.4674 0 0 1-2.876-1.0406l.1416-.0814 4.779-2.7588a.7842.7842 0 0 0 .3927-.6786v-6.7369l2.015 1.1633a.0717.0717 0 0 1 .0393.0552v5.5704a4.4952 4.4952 0 0 1-4.4916 4.5074ZM3.7432 17.5143a4.4754 4.4754 0 0 1-.5355-3.0116l.1425.0843 4.779 2.7589a.7788.7788 0 0 0 .7854 0l5.8344-3.3688v2.3267a.0717.0717 0 0 1-.0287.0617l-4.8317 2.7899a4.4947 4.4947 0 0 1-6.1454-1.6411Zm-1.13-9.914a4.4727 4.4727 0 0 1 2.3414-1.97l.0009.1657v5.5177a.787.787 0 0 0 .3927.6787l5.8344 3.3688-2.015 1.1633a.0717.0717 0 0 1-.0683.0075l-4.8317-2.79a4.4947 4.4947 0 0 1-1.6544-6.1421Zm13.5658 3.9925-5.8344-3.3688 2.015-1.1633a.0717.0717 0 0 1 .0683-.0075l4.8317 2.79a4.4952 4.4952 0 0 1 1.6544 6.142l-.1425-.0843-4.779-2.7588a.7842.7842 0 0 0-.3927-.6787Zm2.5973-3.0116a4.4754 4.4754 0 0 1 .5355 3.0116l-.1425-.0843-4.779-2.7589a.7888.7888 0 0 0-.7854 0L7.7347 12.119V9.7923a.0717.0717 0 0 1 .0287-.0617l4.8317-2.79a4.4947 4.4947 0 0 1 6.1454 1.6412ZM7.7347 6.4674a4.4674 4.4674 0 0 1 2.876 1.0406l-.1416.0814-4.779 2.7588a.7842.7842 0 0 0-.3927.6786v6.7369L3.2824 16.6004a.0717.0717 0 0 1-.0393-.0552V10.975a4.4952 4.4952 0 0 1 4.4916-4.5074Zm.7001 5.3789 2.5997-1.501 2.6008 1.501v3.002l-2.6008 1.501-2.5997-1.501v-3.002Z"
        fill="currentColor"
      />
    </svg>
  );

  if (showBg) {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-xl shrink-0 text-white ${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: "#10a37f",
          boxShadow: "0 2px 8px rgba(16,163,127,0.25)",
        }}
      >
        {iconSvg}
      </div>
    );
  }

  return iconSvg;
}

/**
 * Authentic Anthropic Claude Icon (Terracotta spark mark)
 */
export function ClaudeIcon({ size = 20, className = "", showBg = false }: IconProps) {
  const iconSvg = (
    <svg
      width={showBg ? Math.round(size * 0.58) : size}
      height={showBg ? Math.round(size * 0.58) : size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M13.827 1.555a.8.8 0 0 0-1.654 0l-.82 4.475a8.77 8.77 0 0 1-6.85 6.85l-4.475.82a.8.8 0 0 0 0 1.654l4.475.82a8.77 8.77 0 0 1 6.85 6.85l.82 4.475a.8.8 0 0 0 1.654 0l.82-4.475a8.77 8.77 0 0 1 6.85-6.85l4.475-.82a.8.8 0 0 0 0-1.654l-4.475-.82a8.77 8.77 0 0 1-6.85-6.85l-.82-4.475Z" />
    </svg>
  );

  if (showBg) {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-xl shrink-0 text-white ${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: "#CC785C",
          boxShadow: "0 2px 8px rgba(204,120,92,0.25)",
        }}
      >
        {iconSvg}
      </div>
    );
  }

  return iconSvg;
}
