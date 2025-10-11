import { ReactNode } from "react";

export default function Section({ title, description, children }: { title?: string; description?: string; children: ReactNode; }) {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-6xl px-4">
        {title && (
          <div className="mb-8">
            <h2 className="text-3xl font-semibold">{title}</h2>
            {description && <p className="meta-text mt-2">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}