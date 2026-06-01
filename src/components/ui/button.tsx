"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      href,
      showArrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium rounded-full transition-all duration-300 cursor-pointer active:translate-y-[1px] select-none outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

    const variants = {
      primary:
        "bg-accent-600 hover:bg-accent-900 text-white shadow-sm",
      secondary:
        "bg-card-bg hover:bg-neutral-100 text-neutral-900 border border-card-border",
      outline:
        "bg-transparent hover:bg-accent-50 text-accent-900 border border-accent-900/30 dark:text-accent-50 dark:border-accent-50/30 dark:hover:bg-accent-900/20",
      ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-50",
    };

    const sizes = {
      sm: "text-xs px-5 py-2.5 gap-1.5",
      md: "text-sm px-7 py-3.5 gap-2",
      lg: "text-base px-10 py-5 gap-2.5",
    };

    const content = (
      <>
        {children}
        {showArrow && (
          <ArrowRight
            weight="bold"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </>
    );

    const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} group ${className}`;

    if (href) {
      return (
        <Link href={href} className={buttonClass}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={buttonClass} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
