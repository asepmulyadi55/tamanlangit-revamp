import ContactInfo from "../../../components/ContactInfo";
import ContactForm from "../../../components/ContactForm";

interface ContactPageProps {
  params: {
    locale: string;
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  return (
    <main className="pt-16">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}