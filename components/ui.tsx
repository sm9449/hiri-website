import Link from "next/link";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
};

export function Container({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
}: SectionHeadingProps) {
  const TitleTag = as;

  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <TitleTag>{title}</TitleTag>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export function CalloutCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <article className="card callout-card">
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {children}
    </article>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <Link href={href} className={`button button-${variant}`}>
      {children}
    </Link>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}
