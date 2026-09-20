import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.name + " — " + siteConfig.role;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#fafafa",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: "0.2em", textTransform: "uppercase", color: "#ff4b2b" }}>
          {siteConfig.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
          <span>I build apps and</span>
          <span>web platforms.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}>
          <span style={{ color: "#a1a1aa" }}>{siteConfig.name}</span>
          <span style={{ color: "#ff4b2b" }}>Mobile · Web · Backend · Data</span>
        </div>
      </div>
    ),
    size,
  );
}
