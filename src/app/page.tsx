import { PortfolioHome } from "@/components/sections/portfolio-home";
import { PageJsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ path: "/" });
export default function HomePage() { return <><PageJsonLd path="/" /><PortfolioHome /></>; }
