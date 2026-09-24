import Link from "next/link";
import { ArrowUpRight, ArrowUp, Github, Linkedin } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { Brand } from "./brand";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-company"><Brand footer /><p>Apps, web platforms, and the systems behind them. Built with care, from first idea to release.</p><span className="footer-signature">Think it through. Build it right.</span></div>
      <div className="footer-column"><h2>Explore</h2><nav aria-label="Footer navigation">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/uses">My toolkit</Link></nav></div>
      <div className="footer-column"><h2>What I do</h2><nav aria-label="Footer services"><Link href="/services#production-mobile-delivery">Mobile applications</Link><Link href="/services#connected-product-engineering">Web platforms</Link><Link href="/services">Backend &amp; integrations</Link><Link href="/work">Selected projects</Link><a href={siteConfig.resume} target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={14} /></a></nav></div>
      <div className="footer-column footer-connect"><h2>Start a conversation</h2><a className="footer-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a><div className="footer-socials"><a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={siteConfig.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><Link href="/contact" aria-label="Contact Asad"><ArrowUpRight size={20} /></Link></div></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Muhammad Asad Iqbal</span><span>Designed &amp; developed with intention.</span><a href="#main">Back to top <ArrowUp size={15} /></a></div>
  </footer>;
}
