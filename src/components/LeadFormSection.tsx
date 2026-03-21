import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LeadFormSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, boolean> = {};
    if (!name.trim()) errs.name = true;
    if (!phone.trim()) errs.phone = true;
    if (!country.trim()) errs.country = true;
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b ${errors[field] ? "border-destructive" : "border-border"} py-3 text-foreground placeholder:text-text-gray text-sm outline-none focus:border-gold transition-colors duration-200`;

  return (
    <section id="lead-form" className="py-24 md:py-32 bg-background">
      <div className="max-w-lg mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-6">מתחילים</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            השאר פרטים ונחזור אליך
          </h2>
          <p className="text-text-secondary text-sm mt-4">ללא עלות. ללא התחייבות. נציג יחזור תוך 24 שעות.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
            >
              <input
                type="text"
                placeholder="שם מלא"
                value={name}
                onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: false })); }}
                className={inputClass("name")}
                required
              />
              <input
                type="tel"
                placeholder="מספר טלפון"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setErrors(prev => ({ ...prev, phone: false })); }}
                className={inputClass("phone")}
                required
              />
              <input
                type="text"
                placeholder="מדינה"
                value={country}
                onChange={(e) => { setCountry(e.target.value); setErrors(prev => ({ ...prev, country: false })); }}
                className={inputClass("country")}
                required
              />
              <button
                type="submit"
                className="w-full bg-foreground text-background font-semibold text-sm py-4 rounded-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              >
                שלח ואחזור אליך ›
              </button>
              <p className="text-center text-text-gray text-xs mt-4">🔒 הפרטים שלך נשמרים אצלנו בלבד</p>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">תודה! ניצור איתך קשר בקרוב.</h3>
              <p className="text-text-secondary text-sm">בינתיים, אפשר לכתוב לנו בוואטסאפ</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LeadFormSection;
