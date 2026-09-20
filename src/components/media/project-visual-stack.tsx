import Image from "next/image";

function isPhoneVisual(src: string) {
  return src.startsWith("/store/") || src.includes("/nujum/") || src.includes("/meerak/");
}

function getTone(title: string) {
  const normalized = title.toLowerCase();
  if (normalized.includes("quickworx")) return "tone-green";
  if (normalized.includes("iyurek")) return "tone-crimson";
  if (normalized.includes("nujum")) return "tone-blue";
  if (normalized.includes("meerak")) return "tone-brown";
  if (normalized.includes("closely")) return "tone-coral";
  if (normalized.includes("manhattan")) return "tone-cobalt";
  if (normalized.includes("arman")) return "tone-gold";
  return "tone-orange";
}

export function ProjectVisualStack({
  images,
  title,
  sizes = "(max-width: 760px) 92vw, 48vw",
}: {
  images: string[];
  title: string;
  sizes?: string;
}) {
  const visuals = images.slice(0, 3);
  const isPhoneComposition = visuals.length === 3 && visuals.every(isPhoneVisual);
  const className = "project-visual-stack " + (isPhoneComposition ? "has-phone-composition " : "has-web-composition ") + getTone(title);

  return (
    <div className={className} role="img" aria-label={title + " project visuals"}>
      {visuals.map((src) => (
        <span className={"project-visual-frame" + (isPhoneVisual(src) ? " is-phone" : "")} key={src}>
          <Image src={src} alt="" fill sizes={sizes} />
        </span>
      ))}
    </div>
  );
}