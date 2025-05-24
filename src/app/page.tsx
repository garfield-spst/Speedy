'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Car, MapPin, Leaf } from 'lucide-react';
import FAQ from '@/components/FAQ';
import HowItWorks from '@/components/HowItWorks';
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
        <h1 className="text-3xl lg:text-4xl font-extrabold" style={{ color: accent }}>
          Speeedy
        </h1>
        <nav className="hidden md:flex gap-12 text-lg lg:text-xl font-medium ">
          {[
            { href: '#about', label: 'About' },
            { href: '#how', label: 'How it works' },
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
        className="relative flex items-center justify-start lg:px-28 px-6 py-60 min-h-[750px] overflow-hidden"
        style={{
          backgroundImage: "url('/backgroundimg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', // fills width, no white bars
          backgroundPosition: 'right bottom',
        }}
      >
        
        
        {/* Copy block – directly on image (no gradient) */}
        <motion.div
          custom={0}
          variants={fadeUp}
          className="relative z-10 max-w-2xl space-y-8 bg-[rgba(255,247,240,0.85)] p-6 rounded-3xl lg:bg-transparent lg:p-0 lg:backdrop-blur-0"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#00254d] drop-shadow-md">
            Intercity Carpooling,
            <br /> Made Easy
          </h2>
          <p className="text-xl md:text-2xl text-[white]/90 max-w-xl">
            Speeedy connects drivers and passengers looking to share rides between
            cities, providing a convenient and affordable travel solution.
          </p>
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-10 py-4 text-xl shadow-lg hover:shadow-xl"
          >
            <a href="#signup">Find a Ride</a>
          </Button>
        </motion.div>
      </motion.section>

      {/* ---------------- WHY RIDE ---------------- */}
      <section id="about" className="py-24 px-6 lg:px-28 bg-red-50">
        <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-16" style={{ color: accent }}>
          Why ride with Speeedy?
        </motion.h3>
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            { icon: <Car className="w-10 h-10" />, title: 'Save Money', desc: 'Split fuel costs and parking fees with fellow commuters.' },
            { icon: <Leaf className="w-10 h-10" />, title: 'Go Greener', desc: 'Fewer cars on the road means lower CO₂ emissions.' },
            { icon: <MapPin className="w-10 h-10" />, title: 'Flexible Routes', desc: 'Find rides that match your schedule and destination.' },
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
      <section id="signup" className="py-24 px-6 lg:px-28 bg-red-50">
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
          <iframe src={formSrc[active]} width="100%" height="900" className="border-0 bg-white" scrolling="no" title={`${active} sign-up form`} />
        </motion.div>
      </section>

      <FAQ/>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="mt-auto bg-white text-red-300 py-12 px-6 lg:px-28">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          <p>&copy; {new Date().getFullYear()} Speeedy. All rights reserved.</p>
          <nav className="flex gap-8 text-lg">
            {[
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
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
