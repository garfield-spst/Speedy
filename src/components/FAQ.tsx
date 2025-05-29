"use client";

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ---------------------------------------------------------------
   FAQ section – centred card, no sidebar, subtle motion
--------------------------------------------------------------- */

const faqs = [
  {
    q: 'What is Speedy?',
    a: 'A community-powered intercity carpooling platform. We connect riders and drivers going the same way.',
  },
  {
    q: 'How do I join a ride?',
    a: 'Fill out the Speeedy rider google form. Just enter your route & date.',
  },
  {
    q: 'What cities does Speeedy cover?',
    a: 'We are live across major intercity routes: Jaipur-Delhi, Delhi-Chandigarh, and more.',
  },
  {
    q: 'Can I cancel a booking?',
    a: 'Yes free up to 1 hour before pickup. Later cancellations may incur a small fee.',
  },
  {
    q: 'Is speedy safe?',
    a: 'Yes, all users are verified. Ratings, reviews & trip history ensure trust.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 lg:px-0 bg-gradient-to-b from-white via-red-50/40 to-white">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Frequently Asked Questions
        </h3>
        <p className="text-gray-600 md:text-lg">
          Everything you need to know before hopping in a Speeedy ride.
        </p>
      </div>

      {/* Accordion card */}
      <div className="mx-auto max-w-3xl rounded-3xl bg-white/90 backdrop-blur-lg shadow-2xl border border-red-100 p-6 sm:p-10">
        <Accordion
          type="single"
          collapsible
          className="space-y-4 [&_svg]:transition-transform"
        >
          {faqs.map(({ q, a }) => (
            <AccordionItem key={q} value={q} className="border border-red-100 rounded-2xl">
              <AccordionTrigger className="text-left px-6 py-4 md:text-lg font-medium hover:bg-red-50/60 rounded-2xl">
                {q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}