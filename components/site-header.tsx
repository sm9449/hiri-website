"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNavigation, siteName } from "@/lib/site";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label={`${siteName} home`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <img className="brand-mark" src="/HIRI_logo.jpg" alt="" />
          <span className="brand-text">
            <strong>{siteName}</strong>
            <span>Guided creative writing</span>
          </span>
        </Link>

        <nav className="site-nav desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{mobileMenuOpen ? "✕" : "☰"}</span>
        </button>

        {mobileMenuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="https://app.hiri.uk" className="nav-link mobile-nav-secondary">
              Continue Lessons
            </a>
          </nav>
        )}

        <div className="header-actions">
          <a
            href="https://app.hiri.uk"
            className="button header-secondary-cta"
          >
            Continue Lessons
          </a>
          <Link href="https://app.hiri.uk/enroll" className="button button-primary header-cta">
            Enroll Now
          </Link>
        </div>
      </div>
    </header>
  );
}
