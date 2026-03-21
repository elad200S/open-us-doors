import { motion } from "framer-motion";

const testimonials = [
  { text: "הגעתי בלי ניסיון, תוך חודש סגרתי עסקאות לבד. ההכשרה שינתה לי את הגישה.", name: "רועי ש.", age: 24 },
  { text: "הלידים אמיתיים, הכסף אמיתי, והקידום אמיתי. לא האמנתי שזה קיים.", name: "עידו מ.", age: 23 },
  { text: "חזרתי עם חסכונות, ניסיון מכירות ותואר לא כתוב במנהל עסקים.", name: "תומר ג.", age: 25 },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 bg-usa-red">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-usa-red-foreground text-3xl md:text-4xl font-black mb-16 text-center"
      >
        מה אומרים אלה שכבר שם
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background rounded-lg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <span key={j} className="text-gold text-lg">★</span>
              ))}
            </div>
            <p className="text-navy text-sm leading-relaxed mb-6 font-medium">"{t.text}"</p>
            <p className="text-text-secondary text-sm font-bold">— {t.name}, {t.age}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
