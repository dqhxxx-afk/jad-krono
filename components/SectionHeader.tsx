import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  linkHref?: string;
  linkLabel?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  linkHref,
  linkLabel,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`section-header section-header--${align}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {body && <p className="section-header__body">{body}</p>}
      </div>
      {linkHref && linkLabel && (
        <Link href={linkHref} className="text-link">
          {linkLabel} <ArrowIcon />
        </Link>
      )}
    </div>
  );
}
