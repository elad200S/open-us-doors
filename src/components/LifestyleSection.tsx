import { motion } from "framer-motion";

const blocks = [
  {
    headline: "ישראלים בדיוק כמוך כבר עושים את זה",
    text: "עשרות ישראלים כבר יצאו לעבוד, להרוויח ולחוות את החיים מעבר לים",
    image: "/placeholder.svg",
  },
  {
    headline: "עבודה מסודרת. מגורים מסודרים. הכנסה גבוהה",
    text: "בלי כאבי ראש, בלי בלגן – הכל בנוי ומסודר מראש",
    image: "/placeholder.svg",
  },
  {
    headline: "ליווי מלא – מהשלב הראשון ועד המשכורת הראשונה",
    text: "אנחנו איתך בכל שלב, עד שאתה נכנס לעבודה ומתחיל להרוויח",
    image: "/placeholder.svg",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const LifestyleSection = () => (
  <section className="py-24 md:py-32 bg-background border-t-[6px] border-cta-blue">
    <div className="max-w-6xl mx-auto px-6 space-y-20 md:space-y-28">
      {blocks.map((block, i) => {
        const reversed = i % 2 === 1;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}
          >
            {/* Text – always first on mobile */}
            <div className="w-full md:w-1/2 text-center md:text-right order-1 md:order-none">
              <h3 className="text-navy text-2xl md:text-3xl font-black leading-snug mb-4 font-serif">
                {block.headline}
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0 md:mr-0">
                {block.text}
              </p>
            </div>

            {/* Image – below text on mobile */}
            <div className="w-full md:w-1/2 order-2 md:order-none">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.10)] group">
                <img
                  src={block.image}
                  alt={block.headline}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default LifestyleSection;
