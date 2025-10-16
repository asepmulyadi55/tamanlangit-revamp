"use client";
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  
  return (
    <form className="reveal rounded-2xl border p-6 shadow-soft">
      <label className="block text-sm">{t('name')}
        <input type="text" className="mt-1 w-full rounded-lg border bg-transparent p-2" placeholder={t('name')} />
      </label>
      <label className="block text-sm mt-4">{t('email')}
        <input type="email" className="mt-1 w-full rounded-lg border bg-transparent p-2" placeholder="email@contoh.com" />
      </label>
      <label className="block text-sm mt-4">{t('message')}
        <textarea className="mt-1 w-full rounded-lg border bg-transparent p-2" rows={4} placeholder="Saya ingin tanya mengenai..."></textarea>
      </label>
      <button type="button" className="mt-4 px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">{t('submit')}</button>
    </form>
  );
}