export default function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="rounded-2xl border p-5 shadow-soft reveal">
      <summary className="font-medium cursor-pointer">{question}</summary>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{answer}</p>
    </details>
  );
}