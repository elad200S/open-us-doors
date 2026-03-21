import { motion } from "framer-motion";

const testimonials = [
  { text: "הגעתי לניו יורק בלי לדעת מה מחכה לי. חזרתי עם כסף, ניסיון וחברים לכל החיים.", name: "דניאל מ.", age: 23 },
  { text: "Garage Door טיפלו בהכל. אני רק ארזתי מזוודה ועפתי.", name: "שיר כ.", age: 24 },
  { text: "הכי טוב שעשיתי אחרי הצבא. ממליצה לכולם בלי שאלות.", name: "נועה ד.", age: 22 },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 bg-navy">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-navy-foreground text-3xl md:text-4xl font-bold mb-16 text-center"
      >
        מה אומרים אלה שכבר היו שם
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background rounded-lg p-6 border-t-[3px] border-usa-red"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <span key={j} className="text-gold text-lg">★</span>
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <p className="text-text-secondary text-sm font-semibold">— {t.name}, {t.age}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
