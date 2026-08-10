import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-orange-red text-white hover:bg-orange-red-dark active:bg-orange-red-dark",
  secondary:
    "bg-transparent text-black border border-black hover:border-orange-red hover:text-orange-red",
  ghost: "bg-transparent text-white border border-white/40 hover:border-orange-red hover:text-orange-red",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-button px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-red focus-visible:outline-offset-2";

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
  variant?: Variant;
}

interface ButtonAsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {props.children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {buttonProps.children}
    </button>
  );
}
