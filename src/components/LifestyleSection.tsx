import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import lifestyle3 from "@/assets/lifestyle-3.jpg";
import lifestyle4 from "@/assets/lifestyle-4.jpg";
import lifestyleBg1 from "@/assets/lifestyle-bg-1.jpg";
import lifestyleBg2 from "@/assets/lifestyle-bg-2.jpg";
import lifestyleBg3 from "@/assets/lifestyle-bg-3.jpg";
import lifestyleBg4 from "@/assets/lifestyle-bg-4.jpg";

const sliderImages = [lifestyle1, lifestyle2, lifestyle3, lifestyle4];
const bgSliderImages = [lifestyleBg1, lifestyleBg2, lifestyleBg3, lifestyleBg4];

const blocks = [
  {
    headline: "ישראלים בדיוק כמוך כבר עושים את זה",
    text: "עשרות ישראלים כבר יצאו לעבוד, להרוויח ולחוות את החיים מעבר לים",
  },
  {
    headline: "עבודה מסודרת. מגורים מסודרים. הכנסה גבוהה",
    text: "בלי כאבי ראש, בלי בלגן – הכל בנוי ומסודר מראש",
  },
  {
    headline: "ליווי מלא – מהשלב הראשון ועד המשכורת הראשונה",
    text: "אנחנו איתך בכל שלב, עד שאתה נכנס לעבודה ומתחיל להרוויח",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const useAutoSlider = (length: number, interval = 3000) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % length), interval);
    return () => clearInterval(id);
  }, [length, interval]);
  return current;
};

const AutoFadeSlider = () => {
  const current = useAutoSlider(sliderImages.length);
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.10)]">
      {sliderImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`lifestyle ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          loading="eager"
        />
      ))}
    </div>
  );
};

const BgFadeSlider = ({ children }: { children: React.ReactNode }) => {
  const current = useAutoSlider(bgSliderImages.length);
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.10)]">
      {/* Background images */}
      {bgSliderImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          loading="eager"
        />
      ))}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Static content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const LifestyleSection = () => (
  <section className="relative py-24 md:py-32 border-t-[6px] border-cta-blue overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      poster="/placeholder.svg"
    >
      <source src="/videos/lifestyle-bg.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-20 md:space-y-28">
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
            <div className="w-full md:w-1/2 text-center md:text-right order-1 md:order-none">
              <h3 className="text-white text-2xl md:text-3xl font-black leading-snug mb-4 font-serif">
                {block.headline}
              </h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0 md:mr-0">
                {block.text}
              </p>
            </div>

            <div className="w-full md:w-1/2 order-2 md:order-none">
              {i === 0 ? (
                <AutoFadeSlider />
              ) : i === 1 ? (
                <BgFadeSlider>
                  <div className="w-full aspect-[4/3]" />
                </BgFadeSlider>
              ) : (
                <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.10)] group">
                  <img
                    src="/placeholder.svg"
                    alt={block.headline}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default LifestyleSection;
