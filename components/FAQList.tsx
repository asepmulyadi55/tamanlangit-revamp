import FAQItem from "./FAQItem";
export default function FAQList({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-center">FAQ</h1>
        <div className="mt-10 space-y-4">
          {items.map((it, i) => (
            <FAQItem key={i} question={it.question} answer={it.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}