'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/* ─────────── animation helper (same as Terms) ─────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: 'easeOut' },
  }),
};

/* ─────────── content pulled from the PDF ─────────── */
const sections = [
  {
    id: 'story',
    title: 'Our Story',
    body: `What started as frustration with half-empty cars speeding down India’s highways turned into a bold idea. On a detour-filled road trip our founders realised there had to be a smarter, greener way to travel. Speeedy was born from that spark: a lean start-up on a mission to turn every empty seat into a shared ride.`,
  },
  {
    id: 'mission',
    title: 'Our Mission',
    body: `We aim to make intercity travel efficient, affordable, and joyful. By matching drivers and passengers, we help people share costs and shrink their carbon footprints—building a service that’s safe, dependable, and delightful for modern digital nomads.`,
  },
  {
    id: 'why',
    title: 'Why We Exist',
    body: `Across India hundreds of millions of car-seats go unused every day while traffic worsens and air quality suffers. Government data shows car-pooling could save ≈ 380 million L of fuel annually, cutting 1 600 kg CO₂ per vehicle each year. Speeedy bridges that gap, making shared travel easy, affordable, and planet-friendly.`,
  },
  {
    id: 'difference',
    title: 'What Makes Us Different',
    body: `• Smart Matching Tech — Intelligent algorithms pair riders and drivers on similar routes.
• Community & Safety — Verification plus post-trip reviews keep rides trustworthy.
• Flexible & Affordable — One-way, round trips, multi-stops… all with transparent cost-sharing.
• Eco-Friendly Focus — Rewards for greener choices mean fewer cars and cleaner air.
• Youthful Vibe — Vibrant UI, referral perks, and local events make travel fun.`,
  },
  {
    id: 'values',
    title: 'Our Values',
    body: `People First  •  Safety & Trust  •  Innovation  •  Sustainability  •  Community & Fun`,
  },
  {
    id: 'vision',
    title: 'Our Vision',
    body: `We envision road-trips as simple as tapping a button, with communities connected by shared travel. Industry forecasts show India’s shared fleet could hit 10 million vehicles by 2027—Speeedy plans to drive that growth, adding multi-stop routing and carbon-tracking tools while expanding beyond India.`,
  },
  {
    id: 'join',
    title: 'Join the Movement',
    body: `Speeedy isn’t just an app—it’s a movement. Riders and drivers can sign up today to save money and travel greener. Investors and partners, join us in reshaping intercity mobility for millions. Together we’re driving toward a connected, conscious future.`,
  },
];

export default function AboutPage() {
  return (
    <section className="relative pt-52 pb-24 overflow-x-hidden min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-white">
      {/* decorative blur like Terms page */}
      <div className="absolute -top-20 -right-32 h-96 w-96 rounded-full bg-red-300/30 blur-3xl" />

      {/* global heading */}
      <header className="text-center mb-16 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 tracking-tight">
          About&nbsp;Us
        </h1>
      </header>

      <div className="grid lg:grid-cols-[280px_1fr] gap-10 px-6 lg:px-20">
        {/* ───────── sidebar ───────── */}
        <aside
          className="sticky top-40 self-start hidden lg:block pr-4 border-r border-red-100"
          style={{ maxHeight: 'calc(100vh - 160px)' }}
        >
          <h3 className="font-semibold mb-6 text-red-600 tracking-wide">
            Contents
          </h3>
          <ul className="space-y-4 text-sm leading-snug">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-center justify-between text-gray-700 hover:text-red-600 transition-colors"
                >
                  <span>{s.title}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* ───────── main card ───────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/85 backdrop-blur-lg shadow-xl rounded-3xl p-8 sm:p-12 prose prose-red max-w-280 border border-red-100"
        >
          {sections.map((s, i) => (
            <motion.div
              key={s.id}
              id={s.id}
              custom={i}
              variants={fadeUp}
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-2xl font-semibold text-red-700/90 mb-4">
                {s.title}
              </h2>
              <p className="!text-gray-800 leading-relaxed whitespace-pre-line">
                {s.body}
              </p>
            </motion.div>
          ))}

          <p className="mt-20 font-semibold text-center text-red-600">
            Together, let’s move the world—one shared ride at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
