import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AboutSectionProps } from "../types/components";

export default function DetailedAboutSection({
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
  ctaText
}: AboutSectionProps) {
  const TitleTag = titleTag;

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="reveal">
            <TitleTag className="font-display text-4xl md:text-5xl font-semibold">
              {title}
            </TitleTag>
            <p className={`mt-4 ${descClassName}`}>
              {description}
            </p>
            {bullets && bullets.length > 0 && (
              <ul className="mt-6 space-y-2">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-tlp-forest mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
            {ctaHref && ctaText && (
              <Link href={ctaHref} className="inline-block mt-6 px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">
                {ctaText}
              </Link>
            )}
          </div>
          <div className="reveal">
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              width={imageWidth} 
              height={imageHeight} 
              className={imageClassName}
            />
          </div>
        </div>
      </div>
    </section>
  );
}