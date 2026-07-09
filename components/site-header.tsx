import Link from "next/link";
import { primaryNavigation, siteName } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${siteName} home`}>
          <span className="brand-mark">HIRI</span>
          <span className="brand-text">
            <strong>{siteName}</strong>
            <span>Guided creative writing</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href="https://app.hiri.uk"
            className="button header-secondary-cta"
          >
            Continue Lessons
          </a>
          <Link href="/enrolment" className="button button-primary header-cta">
            Enroll Now
          </Link>
        </div>
      </div>
    </header>
  );
}
