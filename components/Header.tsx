"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/Icons";

const navigation = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner container-wide">
        <BrandMark />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <a
            className="header-whatsapp"
            href="https://wa.me/6586996868?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20enquire%20about%20a%20watch."
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={17} />
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            className="menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? " is-open" : ""}`} id="mobile-navigation">
        <nav aria-label="Mobile navigation" className="mobile-menu__nav container-wide">
          {navigation.map((item, index) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="mobile-menu__number">0{index + 1}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
          <a
            className="mobile-menu__contact"
            href="https://wa.me/6586996868?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20enquire%20about%20a%20watch."
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            Start a WhatsApp enquiry
          </a>
        </nav>
      </div>
    </header>
  );
}
