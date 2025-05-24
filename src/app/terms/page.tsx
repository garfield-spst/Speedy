'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.45, ease: 'easeOut' } })
};

const sections = [
    {
        id: 'what', title: '1. What is Carpooling?', body: ` Carpooling (also called ride-sharing) means sharing a private ride and splitting the trip’s costs. It is not a taxi or commercial service. In Speeedy, a driver (car owner) offers available seats along a planned route, and passengers join to share fuel, tolls, and other expenses. In other words, only the actual costs of the trip are divided – there is no profit or “hire or reward” charged beyond those expenses . (Charging extra money as a profit can violate Indian law – see below.) `},
    {
        id: 'who',
        title: '2. Who Can Use Speeedy',
        body: `Drivers must be registered Speeedy members with a valid driving license, vehicle registration, and vehicle insurance as required by law. The driver’s vehicle must be roadworthy, with a valid Fitness Certificate and insurance covering third parties and passengers. Passengers must be registered users as well. You should provide accurate contact details and, if requested, valid ID to the driver for safety verification. (Women riders may choose to travel with a female driver or co-rider when available, for comfort and security .)  Age: All users must be at least 18 years old (or the legal age of majority in your state) to create an account.  When signing up, everyone must give true, up-to-date information about yourself (name, contact, address, vehicle, etc.). We verify identities and vehicle documents when possible . You may only have one personal Speeedy account, and you must not impersonate anyone else. `
    },
    {
        id: 'booking',
        title: '3. Booking a Ride',
        body: ` When you agree to a ride (as driver or passenger), you form a private agreement for that trip. Speeedy helps you connect and communicate, but we are not a party to the ride agreement . Use Speeedy’s app to request or list a ride, see trip details, and coordinate with the other person.  Cost and Payment: Drivers set a cost contribution per passenger seat (covering fuel, tolls, etc.). You may pay this amount through Speeedy’s payment system or directly to the driver, as agreed. No additional fees, tips, or hidden charges are allowed beyond what’s stated. We disallow any profit making – drivers must not charge more than actual trip costs. Passengers should pay promptly (e.g. upon boarding or via the app) as agreed. Confirmation: Double-check the ride details before confirming – the driver’s name and car model, the pickup location/time, and the destination. As a rider, board only if these match your plan. As a driver, ensure your co-riders match who booked. `
    },
    { id: 'cancel', title: '4. Cancellation Policy', body: `Trips may be cancelled free of charge until 1 hour before the scheduled pickup. Later cancellations, no-shows, or habitual last-minute changes may trigger a modest cancellation fee and can lead to temporary suspension of the account.` },
    { id: 'safety', title: '5. Safety Standards & Rules', body: `Drivers must keep vehicles road-worthy (seat-belts, airbags, legal passenger capacity). All users must wear seat-belts, obey traffic laws, remain sober, and treat each other respectfully. An in-app SOS button is available for emergencies, and female users may request female-only carpools.` },
    {
        id: 'dos', title: "6. Do's and Don'ts", body: `Drivers: be punctual, keep the agreed route, no extra passengers without consent, no over-charging.  Riders: arrive on time, respect the vehicle, no smoking or disruptive behaviour, pay the agreed share. Any demand for additional money, abusive language, or unsafe driving can be reported and may lead to account termination.`},
    { id: 'insurance', title: '7. Insurance & Liability', body: `Each driver must maintain passenger-cover insurance as required by law. Speeedy is not an insurer and bears no liability for accidents. Claims, if any, are processed through the driver’s policy or appropriate legal channels.` },
    { id: 'disputes', title: '8. Dispute Resolution & Support', body: `Contact Speeedy Support first for any issue. If unresolved, the dispute proceeds to mediation, followed by binding arbitration under Indian law. Nothing removes your statutory consumer rights.` },
    { id: 'law', title: '9. Compliance with Law', body: `Speeedy operates as an “aggregator” under the Motor Vehicles Act and follows all central and state pooling rules, including fare-share limits and mandatory safety options for women.` },
    { id: 'updates', title: '10. Updates & Notices', body: `Speeedy may update these Terms; continued use after an update implies acceptance. If any provision is held unenforceable, the remainder of the Terms stays in effect.` }
];

export default function TermsPage() {
  return (
    <section className="relative pt-52 pb-24 overflow-x-hidden min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-white">
      {/* Decorative blur */}
      <div className="absolute -top-20 -right-32 h-96 w-96 rounded-full bg-red-300/30 blur-3xl" />

      {/* Global heading */}
      <header className="text-center mb-16 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 tracking-tight mb-2">
          Speeedy Carpool – Terms &amp; Conditions
        </h1>
        <p className="text-gray-500 text-base">Effective: 1&nbsp;June&nbsp;2025</p>
      </header>

      {/* Grid layout */}
      <div className="grid lg:grid-cols-[280px_1fr] gap-10 px-6 lg:px-20">
        {/* Sidebar full height on left */}
        <aside className="sticky top-40 self-start hidden lg:block pr-4 border-r border-red-100" style={{ maxHeight: 'calc(100vh - 160px)' }}>
          <h3 className="font-semibold mb-6 text-red-600 tracking-wide">Contents</h3>
          <ul className="space-y-4 text-sm leading-snug">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-center justify-between text-gray-700 hover:text-red-600 transition-colors"
                >
                  <span>{s.title.replace(/^[0-9]+\.\s/, '')}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content card occupies remaining width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-white/85 backdrop-blur-lg shadow-xl rounded-3xl p-8 sm:p-12 prose prose-red max-w-280 border border-red-100"
        >
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-semibold text-red-700/90 mb-4">
                {s.title}
              </h2>
              <p className="!text-gray-800 leading-relaxed whitespace-pre-line">
                {s.body}
              </p>
            </div>
          ))}

          <p className="mt-20 font-semibold text-center text-red-600">
            By using Speeedy, you acknowledge you have read and agree to these Terms, and you will ride
 responsibly and legally. Stay safe, and enjoy sharing the journey!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
