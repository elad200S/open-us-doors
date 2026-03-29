import { motion } from "framer-motion";

const whatsappScreenshots = [
  { id: 1, placeholder: true },
  { id: 2, placeholder: true },
  { id: 3, placeholder: true },
  { id: 4, placeholder: true },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-navy text-3xl md:text-4xl font-black mb-14 text-center font-serif"
      >
        קצת פירגונים
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {whatsappScreenshots.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.10)] bg-card group cursor-pointer"
          >
            {/* Placeholder for WhatsApp screenshots — replace with real images */}
            <div className="w-full aspect-[3/4] bg-[#e5ddd5] flex items-center justify-center relative">
              {/* WhatsApp-style header */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#075e54] flex items-center px-3">
                <div className="w-6 h-6 rounded-full bg-white/30" />
                <div className="mr-2 h-3 w-20 bg-white/40 rounded" />
              </div>

              {/* Chat bubbles placeholder */}
              <div className="space-y-3 w-full px-3 mt-12">
                <div className="bg-white rounded-lg p-3 mr-auto max-w-[85%] shadow-sm">
                  <div className="h-2.5 w-full bg-muted rounded mb-1.5" />
                  <div className="h-2.5 w-3/4 bg-muted rounded mb-1.5" />
                  <div className="h-2.5 w-1/2 bg-muted rounded" />
                  <div className="text-[8px] text-text-gray text-left mt-1">16:01</div>
                </div>
                <div className="bg-[#dcf8c6] rounded-lg p-3 ml-auto max-w-[85%] shadow-sm">
                  <div className="h-2.5 w-full bg-green-200 rounded mb-1.5" />
                  <div className="h-2.5 w-2/3 bg-green-200 rounded" />
                  <div className="text-[8px] text-text-gray text-left mt-1">16:05</div>
                </div>
                <div className="bg-white rounded-lg p-3 mr-auto max-w-[85%] shadow-sm">
                  <div className="h-2.5 w-4/5 bg-muted rounded mb-1.5" />
                  <div className="h-2.5 w-1/2 bg-muted rounded" />
                  <div className="text-[8px] text-text-gray text-left mt-1">16:12</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-text-secondary text-sm mt-8">
        * צילומי מסך אמיתיים מהוואטסאפ של המשתתפים שלנו
      </p>
    </div>
  </section>
);

export default TestimonialsSection;
