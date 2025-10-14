import Image from "next/image";
import type { AboutSectionProps } from "../types/components";

export default function AboutSection({
  title,
  titleTag = "h2",
  description,
  descClassName,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageClassName,
  bullets,
  ctaHref,
  ctaText,
}: AboutSectionProps) {
  const TitleTag = titleTag;
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} className={imageClassName} />
        <div className="reveal">
          <TitleTag className="font-display text-4xl md:text-5xl font-semibold">{title}</TitleTag>
          <p className={`mt-4 ${descClassName}`}>{description}</p>
          {bullets && bullets.length > 0 ? (
            <ul className="mt-6 list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}
          {ctaHref && ctaText ? (
            <a href={ctaHref} className="inline-block mt-6 px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">
              {ctaText}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}