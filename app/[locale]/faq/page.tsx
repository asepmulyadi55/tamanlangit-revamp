import FAQList from "../../../components/FAQList";
import { getFAQs } from "../../../lib/content";

interface FAQPageProps {
  params: {
    locale: string;
  };
}

export default async function FAQPage({ params: { locale } }: FAQPageProps) {
  const faqs = await getFAQs(locale);
  
  // Transform FAQ data to match FAQList component expectations
  const faqItems = faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <main className="pt-16">
      <FAQList items={faqItems} />
    </main>
  );
}