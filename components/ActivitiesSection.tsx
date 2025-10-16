"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function ActivitiesSection() {
  const t = useTranslations('activities');

  const activities = [
    {
      title: t('hiking.title'),
      description: t('hiking.description'),
      image: '/images/activity 1.jpg',
      alt: t('hiking.alt')
    },
    {
      title: t('campfire.title'),
      description: t('campfire.description'),
      image: '/images/activity 2.jpg',
      alt: t('campfire.alt')
    },
    {
      title: t('stargazing.title'),
      description: t('stargazing.description'),
      image: '/images/activity 3.jpg',
      alt: t('stargazing.alt')
    }
  ];

  return (
    <section id="activities" className="py-16 md:py-20 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-center">Aktivitas</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {activities.map((activity, index) => (
            <article
              key={index}
              className="rounded-3xl border border-black/5 overflow-hidden shadow-soft hover:-translate-y-1 hover:shadow-lg transition reveal"
            >
              <Image 
                src={activity.image} 
                alt={activity.alt} 
                width={800}
                height={600}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold">{activity.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                  {activity.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}