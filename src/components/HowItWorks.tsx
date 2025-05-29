'use client';

import { motion } from 'framer-motion';
import { Car, SmilePlus, Handshake } from 'lucide-react';

const steps = [
  {
    title: '1. Post or Find a Ride',
    text: 'Drivers list empty seats on their planned route; riders search by city & date.',
    icon: Car,
  },
  {
    title: '2. Book & Split Costs',
    text: 'Agree on the fair fuel-share up-front. No hidden fees, only cost sharing.',
    icon: Handshake,
  },
  {
    title: '3. Meet, Ride, Review',
    text: 'Hop in, enjoy the journey, then rate each other for a safer community.',
    icon: SmilePlus,
  },
];

const fadeStagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6 lg:px-28 bg-white relative">
      <h3 className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-16">
        How It Works
      </h3>

      <div className="grid lg:grid-cols-3 gap-10">
        {steps.map(({ title, text, icon: Icon }, i) => (
          <motion.div
            key={title}
            variants={fadeStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            className="bg-white rounded-3xl p-8 shadow-xl border border-t-4 border-red-600/50 flex flex-col items-start gap-6 hover:shadow-2xl transition-shadow"
          >
            <div className="p-4 bg-red-100 text-red-600 rounded-2xl">
              <Icon className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-semibold text-navy">{title}</h4>
            <p className="text-gray-700 leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
