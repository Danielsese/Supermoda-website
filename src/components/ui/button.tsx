"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
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
      "inline-flex items-center justify-center font-sans font-medium rounded-full transition-all duration-200 cursor-pointer active:scale-97 select-none outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

    const variants = {
      primary:
        "bg-cobalt-500 hover:bg-cobalt-600 text-white shadow-sm shadow-cobalt-500/10",
      secondary:
        "bg-card-bg hover:bg-card-border/50 text-fg border border-card-border",
      outline:
        "bg-transparent hover:bg-cobalt-500/5 text-cobalt-500 border border-cobalt-500/30 hover:border-cobalt-500/60 dark:text-cobalt-500 dark:border-cobalt-500/20",
      ghost: "bg-transparent hover:bg-card-border/30 text-fg",
      gold: "bg-gold-500 hover:bg-gold-600 text-foreground font-semibold shadow-sm shadow-gold-500/10",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2",
      lg: "text-base px-8 py-4 gap-2.5",
    };

    const content = (
      <>
        {children}
        {showArrow && (
          <ArrowRight
            weight="bold"
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
