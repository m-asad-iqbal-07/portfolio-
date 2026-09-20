import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/" className="footer-mark">{siteConfig.name}</Link>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="footer-socials">
          <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fi fi-brands-linkedin" aria-hidden="true" />
          </a>
          <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fi fi-brands-github" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Muhammad Asad Iqbal</span>
        <span>Designed and built by Muhammad Asad Iqbal</span>
        <a href="#main">
          Back to top
          <i className="fi fi-rr-arrow-small-up" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
