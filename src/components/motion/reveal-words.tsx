import { Fragment } from "react";

export function RevealWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <Fragment key={index}>
          <span className="reveal-word">{word}</span>
          {index < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </>
  );
}
