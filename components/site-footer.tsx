import Link from "next/link";
import { footerNavigation, siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-title">{siteName}</p>
          <p className="footer-copy">
            Guided Creative English with Shaanzae Shahid — expert teaching,
            structured practice and personalised support for developing writers.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {footerNavigation.map((item) => (
            item.href.startsWith("http") ? (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <p className="footer-meta">Copyright {new Date().getFullYear()} {siteName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
