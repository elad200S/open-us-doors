import { motion } from "framer-motion";

const benefits = [
  { title: "ליווי מלא", desc: "אנחנו לא עוזבים אותך אחרי ההרשמה. מהמסמכים ועד הנחיתה." },
  { title: "עבודות סרוויס אמיתיות", desc: "מסעדות, בתי מלון, אירועים — תפקידים שמשלמים טוב." },
  { title: "חוויה שמשנה", desc: "שנה בחו״ל שתספר עליה שנים." },
];

const BenefitsSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-16 text-center"
      >
        למה Garage Door
      </motion.p>
      <div className="grid md:grid-cols-3 gap-12 md:gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="border-t-2 border-gold pt-6"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">{b.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
