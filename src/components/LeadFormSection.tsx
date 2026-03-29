import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const visaOptions = ["כן", "לא", "בתהליכים"];
const citizenshipOptions = ["ישראלי", "אמריקאי", "אחר"];
const startOptions = ["עוד חודש", "עוד חודשיים", "שלושה חודשים", "מעל שלושה חודשים"];

const LeadFormSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [visa, setVisa] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [startTime, setStartTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, boolean> = {};
    if (!name.trim()) errs.name = true;
    if (!phone.trim()) errs.phone = true;
    if (!visa) errs.visa = true;
    if (!citizenship) errs.citizenship = true;
    if (!startTime) errs.startTime = true;
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const clearError = (field: string) => setErrors((p) => ({ ...p, [field]: false }));

  const inputClass = (field: string) =>
    `w-full bg-card border ${errors[field] ? "border-destructive" : "border-border"} rounded-xl py-3 px-4 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-cta-blue focus:ring-1 focus:ring-cta-blue/30 transition-all duration-200`;

  const selectClass = (field: string, value: string) =>
    `w-full bg-card border ${errors[field] ? "border-destructive" : "border-border"} rounded-xl py-3 px-4 text-sm outline-none focus:border-cta-blue focus:ring-1 focus:ring-cta-blue/30 transition-all duration-200 appearance-none cursor-pointer ${value ? "text-foreground" : "text-muted-foreground"}`;

  return (
    <section id="lead-form" className="py-20 md:py-28 bg-background">
      <div className="max-w-md mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-black text-foreground text-balance leading-tight">
            ענו על כמה שאלות קצרות ונבדוק יחד אם זה מתאים לכם
          </h2>
          <p className="text-muted-foreground text-sm mt-3">​</p>
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
              className="space-y-4"
              noValidate
            >
              <input
                type="text"
                placeholder="שם מלא"
                value={name}
                onChange={(e) => { setName(e.target.value); clearError("name"); }}
                className={inputClass("name")}
              />

              <input
                type="tel"
                placeholder="מספר טלפון"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); clearError("phone"); }}
                className={inputClass("phone")}
              />

              <div className="relative">
                <select
                  value={visa}
                  onChange={(e) => { setVisa(e.target.value); clearError("visa"); }}
                  className={selectClass("visa", visa)}
                >
                  <option value="" disabled>האם יש לי ויזה?</option>
                  {visaOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-xs">▼</span>
              </div>

              <div className="relative">
                <select
                  value={citizenship}
                  onChange={(e) => { setCitizenship(e.target.value); clearError("citizenship"); }}
                  className={selectClass("citizenship", citizenship)}
                >
                  <option value="" disabled>סוג האזרחות</option>
                  {citizenshipOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-xs">▼</span>
              </div>

              <div className="relative">
                <select
                  value={startTime}
                  onChange={(e) => { setStartTime(e.target.value); clearError("startTime"); }}
                  className={selectClass("startTime", startTime)}
                >
                  <option value="" disabled>מתי אני רוצה להתחיל לעבוד?</option>
                  {startOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-xs">▼</span>
              </div>

              <button
                type="submit"
                className="w-full bg-cta-blue text-cta-blue-foreground font-bold text-sm py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] shadow-[0_4px_16px_rgba(58,125,255,0.25)] mt-2"
              >
                בדקו התאמה
              </button>

              <p className="text-center text-muted-foreground/60 text-xs mt-3">🔒 הפרטים שלך לא מועברים לאף גורם חיצוני</p>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center py-10"
            >
              <div className="text-5xl mb-5">✅</div>
              <h3 className="text-xl font-bold text-foreground mb-3">!קיבלנו! נחזור אליך בקרוב</h3>
              <p className="text-muted-foreground text-sm mb-6">בינתיים אפשר לכתוב לנו בוואטסאפ:</p>
              <a
                href="https://wa.me/12164079325"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                דברו איתנו עכשיו בוואטסאפ
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LeadFormSection;
