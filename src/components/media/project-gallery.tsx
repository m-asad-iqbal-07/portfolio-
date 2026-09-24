"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";

export function ProjectGallery({ screens, title, landscape = false, caption }: { screens: string[]; title: string; landscape?: boolean; caption: string }) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const tabs = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const labels = landscape ? ["Live dashboard", "Dispatch concept", "Operations concept"] : screens.map((_, index) => `Screen ${index + 1}`);
  const provenance = landscape && active > 0 ? "Generated supporting concept" : landscape ? "Real product screenshot" : "Official product screenshot";
  const select = (index: number) => { setActive(Math.max(0, Math.min(screens.length - 1, index))); preview.current?.scrollTo({ top: 0, behavior: "instant" }); };
  useEffect(() => {
    if (!expanded) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden"; lenis?.stop();
    return () => { document.body.style.overflow = previousOverflow; lenis?.start(); };
  }, [expanded, lenis]);
  return <section className={`project-gallery ${landscape ? "gallery-web" : "gallery-mobile"}`} aria-label={`${title} product gallery`}>
    <div className="gallery-shell">
      <div className="gallery-toolbar"><p>{title}<span>{provenance}</span></p><button type="button" aria-label="Expand screenshot" onClick={() => { dialog.current?.showModal(); setExpanded(true); }}><Maximize2 size={17} /><span>Expand screenshot</span></button></div>
      <div className="gallery-stage" id="project-screen-panel" role="tabpanel" aria-labelledby={`project-screen-tab-${active}`}>
        {landscape ? <div ref={preview} className="gallery-web-scroll" tabIndex={0} data-lenis-prevent role="region" aria-label="Screenshot preview; scroll to see the full image"><Image key={screens[active]} src={screens[active]!} alt={`${title} — ${labels[active]}. ${provenance}.`} width={active === 0 ? 1275 : 1586} height={active === 0 ? 3194 : 992} sizes="(max-width: 700px) 90vw, 85vw" priority /></div> : <div className="gallery-phone-stage">
          {active > 0 && <button className="gallery-phone-peek gallery-phone-previous" type="button" onClick={() => select(active - 1)} aria-label="Show previous product screen"><Image src={screens[active - 1]!} alt="" fill sizes="25vw" /></button>}
          <div className="gallery-phone-active"><Image key={screens[active]} src={screens[active]!} alt={`${title} official product screen ${active + 1}`} fill priority sizes="(max-width: 700px) 65vw, 350px" /></div>
          {active < screens.length - 1 && <button className="gallery-phone-peek gallery-phone-next" type="button" onClick={() => select(active + 1)} aria-label="Show next product screen"><Image src={screens[active + 1]!} alt="" fill sizes="25vw" /></button>}
        </div>}
      </div>
      <div className="gallery-bottom"><div ref={tabs} className="gallery-tabs" role="tablist" aria-label="Choose a product screen">{screens.map((screen, index) => <button key={screen} id={`project-screen-tab-${index}`} type="button" role="tab" tabIndex={active === index ? 0 : -1} aria-selected={active === index} aria-controls="project-screen-panel" onClick={() => select(index)} onKeyDown={event => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % screens.length;
        else if (event.key === "ArrowLeft") next = (index - 1 + screens.length) % screens.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = screens.length - 1;
        else return;
        event.preventDefault(); select(next); (tabs.current?.children[next] as HTMLButtonElement)?.focus();
      }}>{labels[index]}</button>)}</div>
      <div className="gallery-controls"><button type="button" aria-label="Previous screenshot" disabled={active === 0} onClick={() => select(active - 1)}><ArrowLeft size={19} /></button><span aria-live="polite">{active + 1} / {screens.length}</span><button type="button" aria-label="Next screenshot" disabled={active === screens.length - 1} onClick={() => select(active + 1)}><ArrowRight size={19} /></button></div></div>
    </div>
    <div className="gallery-notes"><p>{caption}</p>{landscape && active === 0 && <span>Scroll the preview to see the complete dashboard.</span>}</div>
    <dialog ref={dialog} className="gallery-dialog" aria-label={`${title} expanded screenshot`} data-lenis-prevent onClose={() => setExpanded(false)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="gallery-dialog-header"><p>{labels[active]}<span>{provenance}</span></p><button type="button" onClick={() => dialog.current?.close()} aria-label="Close expanded screenshot"><X size={22} /></button></div>
      {expanded && <div className={`gallery-dialog-image${landscape ? "" : " gallery-dialog-phone"}`}><Image src={screens[active]!} alt={`${title} — ${labels[active]}. ${provenance}.`} width={landscape && active === 0 ? 1275 : 1586} height={landscape && active === 0 ? 3194 : 992} unoptimized style={{ width: "100%", height: "auto" }} /></div>}
    </dialog>
  </section>;
}
