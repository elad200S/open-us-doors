import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import oregonImg from "@/assets/locations/oregon.jpg";
import orangeCountyImg from "@/assets/locations/orange-county.jpg";
import tampaImg from "@/assets/locations/tampa.jpg";
import sanDiegoImg from "@/assets/locations/san-diego.jpg";
import hawaiiImg from "@/assets/locations/hawaii.jpg";

const locations = [
  { name: "OREGON", image: oregonImg },
  { name: "ORANGE\nCOUNTY", image: orangeCountyImg },
  { name: "TAMPA", image: tampaImg },
  { name: "SAN\nDIEGO", image: sanDiegoImg },
  { name: "HAWAII", image: hawaiiImg },
];

const LocationsCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 5;
  const canScrollPrev = startIndex > 0;
  const canScrollNext = startIndex + visibleCount < locations.length;

  const scrollPrev = useCallback(() => {
    if (canScrollPrev) setStartIndex((i) => i - 1);
  }, [canScrollPrev]);

  const scrollNext = useCallback(() => {
    if (canScrollNext) setStartIndex((i) => i + 1);
  }, [canScrollNext]);

  const visibleLocations = locations.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-navy text-3xl md:text-4xl font-black mb-14 text-center font-serif"
        >
          !הלוקיישנים השווים והרווחיים ביותר
        </motion.h2>

        <div className="relative flex items-center justify-center gap-4 md:gap-6">
          {/* Prev Arrow */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="shrink-0 text-cta-blue hover:text-cta-blue/70 disabled:opacity-30 transition-colors"
            aria-label="Previous"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Circles */}
          <div className="flex items-center justify-center gap-4 md:gap-8 flex-1 overflow-hidden">
            {visibleLocations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-[3px] border-border p-1.5 group cursor-pointer">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width={512}
                      height={512}
                    />
                    {/* Overlay with name */}
                    <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                      <span className="text-white text-sm md:text-lg lg:text-xl font-black text-center whitespace-pre-line leading-tight tracking-wide">
                        {loc.name}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="shrink-0 text-cta-blue hover:text-cta-blue/70 disabled:opacity-30 transition-colors"
            aria-label="Next"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationsCarousel;
