import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    emoji: "🚪",
    title: "Garage Door",
    short: "התקנה ותיקון דלתות מוסך",
    extended: "אחד התחומים הכי מבוקשים בארה״ב עם ביקוש גבוה לאורך כל השנה והכנסות גבוהות",
  },
  {
    emoji: "🔑",
    title: "Locksmith",
    short: "מנעולנות ומערכות אבטחה",
    extended: "עבודה עם ביקוש קבוע בכל שעה, מתאים למי שאוהב עבודה דינמית בשטח",
  },
  {
    emoji: "🌬️",
    title: "Air Duct",
    short: "ניקוי מערכות אוורור",
    extended: "תחום עם עונתיות חזקה, הכנסות גבוהות ופוטנציאל לעמלות",
  },
  {
    emoji: "🛒",
    title: "Shopping Carts",
    short: "ניהול עגלות קניות",
    extended: "כניסה קלה לשוק האמריקאי עם עבודה יציבה ופשוטה יחסית",
  },
  {
    emoji: "🏠",
    title: "Chimney",
    short: "ניקוי וחידוש ארובות",
    extended: "תחום מתמחה עם מרווח רווח גבוה ולקוחות קבועים",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const JobCard = ({ job, index }: { job: typeof jobs[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      onClick={() => setOpen((v) => !v)}
      className="group relative cursor-pointer border-r-4 border-navy bg-background rounded-2xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
    >
      <span className="text-4xl block mb-5">{job.emoji}</span>
      <h3 className="text-xl font-black text-navy mb-2">{job.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-1">{job.short}</p>

      {/* Desktop: show on hover */}
      <div className="hidden md:block overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-out">
        <p className="text-text-gray text-xs leading-relaxed pt-3 border-t border-border mt-3">
          {job.extended}
        </p>
      </div>

      {/* Mobile: accordion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden"
          >
            <p className="text-text-gray text-xs leading-relaxed pt-3 border-t border-border mt-3">
              {job.extended}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const JobTypesSection = () => (
  <section className="py-24 md:py-32 bg-background border-t-[6px] border-usa-red">
    <div className="max-w-6xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease }}
        className="text-navy text-xs font-bold tracking-[0.2em] uppercase mb-4 text-center"
      >
        מה עושים שם בדיוק?
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        className="text-navy text-3xl md:text-4xl font-black mb-16 text-center"
      >
        תחומי העבודה שלנו בארה״ב
      </motion.h2>

      {/* Top row: 3 cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
        {jobs.slice(0, 3).map((job, i) => (
          <JobCard key={i} job={job} index={i} />
        ))}
      </div>
      {/* Bottom row: 2 cards centered */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto gap-7">
        {jobs.slice(3).map((job, i) => (
          <JobCard key={i + 3} job={job} index={i + 3} />
        ))}
      </div>
    </div>
  </section>
);

export default JobTypesSection;
