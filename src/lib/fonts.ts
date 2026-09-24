import localFont from "next/font/local";
const display = localFont({ src: "../../public/fonts/inter-tight-latin-900.woff2", variable: "--type-display", weight: "900", display: "swap", adjustFontFallback: false, fallback: ["Portfolio Display Fallback"] });
const body = localFont({ src: [
  { path: "../../public/fonts/manrope-latin-400.woff2", weight: "400" },
  { path: "../../public/fonts/manrope-latin-700.woff2", weight: "700" },
], variable: "--type-body", display: "swap" });
export const fontVariables = `${display.variable} ${body.variable}`;
