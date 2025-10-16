import { getTranslations } from 'next-intl/server';

interface ContactInfoProps {
  locale: string;
}

export default async function ContactInfo({ locale }: ContactInfoProps) {
  const t = await getTranslations({ locale, namespace: 'contact' });
  
  return (
    <div className="reveal">
      <h1 className="font-display text-4xl md:text-5xl font-semibold">{t('title')}</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">Hubungi kami untuk reservasi atau informasi lebih lanjut.</p>
      <ul className="mt-6 space-y-2 text-sm">
        <li>Email: info@tamanlangitpangalengan.com</li>
        <li>WhatsApp: 08xx-xxxx-xxxx</li>
        <li>Alamat: Pangalengan, Bandung</li>
      </ul>
    </div>
  );
}