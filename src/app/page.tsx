'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet, TrafficCone, Leaf } from 'lucide-react';
import { League_Spartan } from 'next/font/google';
import FAQ from '@/components/FAQ';
import HowItWorks from '@/components/HowItWorks';
import { label } from 'framer-motion/client';
/* --------------------------------------------------------------------------
   Speeedy Landing – polished hero (no side‑scroll, car fully visible)
   -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: 'easeOut' },
  }),
};

const league = League_Spartan({
  subsets: ['latin'],
  weight: ['700', '800'],     // bold weights only
  variable: '--font-league',  // CSS var for Tailwind
});

export default function LandingPage() {
  const [active, setActive] = useState<'rider' | 'driver' | 'other'>('rider');

  const formSrc: Record<'rider' | 'driver' | 'other', string> = {
    rider: 'https://docs.google.com/forms/d/e/1FAIpQLSfd_lPyMI7pVg5z2rbjOBTkfwnvvJXmr5a-sSOeUK6V-T3Udw/viewform?embedded=true',
    driver: 'https://docs.google.com/forms/d/e/1FAIpQLSdByiwRuzuzcmAR8LSVt_dTRSQMtpLykco9GRb94V39tMmdkw/viewform?embedded=true',
    other: 'https://docs.google.com/forms/d/e/1FAIpQLSd5GtZR89KEmRMY5GI7yNVIZ_b2hW5zxulKrMJODshgxizA5w/viewform?embedded=true',
  };

  const bgBase = '#fff7f0';
  const navy = '#00254d';
  const accent = '#e4312b';

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" style={{ backgroundColor: bgBase, color: navy }}>
      {/* ---------------- NAV ---------------- */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between py-6 lg:px-28 px-6 bg-white">
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: '"League Spartan", sans-serif', color: accent }}>
          Speeedy
        </h1>
        <nav className="hidden md:flex gap-12 text-lg lg:text-xl font-medium ">
          {[
            { href: '#signup', label: 'Sign up' },
          ].map(({ href, label }) => (
            <a key={label} href={href} className="hover:text-red-600">
              {label}
            </a>
          ))}
        </nav>
        <Button asChild className="md:hidden bg-red-600 text-white rounded-full px-4 py-2">
          <a href="#signup">Sign up</a>
        </Button>
      </header>
      {/* ---------------- HERO ---------------- */}
              {/* ---------------- HERO ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        className="relative flex items-center justify-start lg:px-28 px-6 pt-[120px] pb-40 min-h-[750px] overflow-hidden
                   bg-[url('/background-mobile.jpg')] md:bg-[url('/backgroundimg.jpg')]
                   bg-contain bg-top md:bg-cover md:bg-right-bottom"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', // fills width, no white bars
          backgroundPosition: 'right bottom',
        }}
      >
        
        
        {/* Copy block – directly on image (no gradient) */}
        <motion.div
          custom={0}
          variants={fadeUp}
          className="max-w-2xl space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-amber-400 text-shadow-amber-50 drop-shadow">
            Intercity Carpooling
            <br /> Made Easy
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-xl font-bold">
            Speeedy connects drivers and passengers looking to share rides between
            cities, providing a convenient and affordable travel solution.
          </p>
          <div className='flex flex-row'>
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-5 py-4 text-xl shadow-lg hover:shadow-xl mr-10"
          >
            <a href="#signup">Find a Ride</a>
          </Button>
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-5 py-4 text-xl shadow-lg hover:shadow-xl"
          >
            <a href="#signup">Offer a Ride</a>
          </Button>
          </div>
        </motion.div>
      </motion.section>

      {/* ---------------- WHY RIDE ---------------- */}
      <section id="about" className="py-24 px-6 lg:px-28 bg-red-50">
        <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-16" style={{ color: accent }}>
          Why ride with Speeedy?
        </motion.h3>
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            {
              icon: <Wallet className="w-10 h-10" />,
              title: 'Save Up to 60%',
              desc: 'Split real trip costs (fuel, tolls & parking) with fellow commuters,no hidden fees, no surge pricing. More people = more savings per seat.',
            },
            {
              icon: <TrafficCone className="w-10 h-10" />,
              title: 'Less Traffic, Faster Journeys',
              desc: 'Every 4 Carpools = 1 Less Car By sharing just one ride, you help cut traffic density by 25% on busy Jaipur–Delhi–Gurugram corridors.',
            },
            {
              icon: <Leaf className="w-10 h-10" />,
              title: 'Cut 75% of Emissions',
              desc: 'Every shared ride removes cars from the road and slashes your carbon footprint. Ride greener on major Jaipur–Delhi–Gurugram routes.',
            },
          ].map(({ icon, title, desc }, i) => (
            <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
              <Card className="rounded-3xl p-10 bg-white shadow-md border-t-4 border-red-600/50 hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-start gap-5">
                  <div className="p-4 bg-red-100 rounded-2xl text-red-700">{icon}</div>
                  <h4 className="text-2xl font-semibold" style={{ color: navy }}>
                    {title}
                  </h4>
                  <p className="opacity-80 text-lg leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <HowItWorks />

      {/* ---------------- SIGN‑UP ---------------- */}
      <section id="signup" className="py-24 px-6 lg:px-28 bg-red-50 ">
        <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-16" style={{ color: accent }}>
          Hop in – choose your role
        </motion.h3>
        <div className="flex justify-center gap-6 mb-10">
          {[
            { label: 'Rider', key: 'rider' },
            { label: 'Driver', key: 'driver' },
          ].map(({ label, key }) => (
            <button key={key} onClick={() => setActive(key as any)} className={`rounded-full px-8 py-3 text-base lg:text-lg transition-all border ${active === key ? 'bg-red-600 text-white shadow-lg border-red-600' : 'bg-white text-red-700 hover:bg-red-100 border-red-200'}`}>{label}</button>
          ))}
        </div>
        <motion.div key={active} custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }} className="w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-red-200">
          <iframe src={formSrc[active]} width="100%" height="500" className="border-0 bg-white" scrolling="no" title={`${active} sign-up form`} />
        </motion.div>
      </section>

      <FAQ/>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="mt-auto bg-white text-red-300 py-12 px-6 lg:px-28">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          <p>&copy; {new Date().getFullYear()} Speeedy. All rights reserved.</p>
          <nav className="flex flex-wrap gap-4 sm:gap-8 text-lg">
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/speeedyindia/' },
              { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61575249557194' },
              { label:'X', href:'https://x.com/Speeedyindia'},
              { label: 'Terms', href: '/terms' },
              { label: 'About Us', href: '/about' },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="hover:text-white transition-colors">
                {label}
              </a>
            ))}

            {/* phone number shown as static text */}
            <span className="text-red-300">+91&nbsp;89058&nbsp;23259</span>
          </nav>
        </div>
      </footer>
    </div>
  );
}
