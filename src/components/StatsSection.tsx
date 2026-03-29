import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "$2K–$6K", label: "הכנסה שבועית ממוצעת" },
  { value: "+50", label: "ישראלים שכבר עברו את התוכנית" },
  { value: "2–4 שבועות", label: "הכשרה ויציאה לשטח" },
];

const StatsSection = () => (
  <section className="bg-cta-blue py-14 md:py-16">
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-0">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease }}
            className={`flex-1 text-center ${
              i < stats.length - 1
                ? "md:border-l md:border-cta-blue-foreground/20"
                : ""
            }`}
          >
            <p className="text-cta-blue-foreground font-black text-4xl md:text-5xl leading-none mb-2">
              {s.value}
            </p>
            <p className="text-cta-blue-foreground/70 text-sm md:text-base font-medium">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
