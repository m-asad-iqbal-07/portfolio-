import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost";
type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode };

export function ButtonLink({ variant = "primary", className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={`editorial-button editorial-button-${variant} ${className ?? ""}`} {...props}>
      {children}
    </Link>
  );
}

