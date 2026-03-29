import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import oregonImg from "@/assets/locations/oregon.jpg";
import orangeCountyImg from "@/assets/locations/orange-county.jpg";
import tampaImg from "@/assets/locations/tampa.jpg";
import sanDiegoImg from "@/assets/locations/san-diego.jpg";
import hawaiiImg from "@/assets/locations/hawaii.jpg";

const states = [
  { name: "ALABAMA", abbr: "AL" },
  { name: "ALASKA", abbr: "AK" },
  { name: "ARIZONA", abbr: "AZ" },
  { name: "ARKANSAS", abbr: "AR" },
  { name: "CALIFORNIA", abbr: "CA" },
  { name: "COLORADO", abbr: "CO" },
  { name: "CONNECTICUT", abbr: "CT" },
  { name: "DELAWARE", abbr: "DE" },
  { name: "FLORIDA", abbr: "FL" },
  { name: "GEORGIA", abbr: "GA" },
  { name: "HAWAII", abbr: "HI" },
  { name: "IDAHO", abbr: "ID" },
  { name: "ILLINOIS", abbr: "IL" },
  { name: "INDIANA", abbr: "IN" },
  { name: "IOWA", abbr: "IA" },
  { name: "KANSAS", abbr: "KS" },
  { name: "KENTUCKY", abbr: "KY" },
  { name: "LOUISIANA", abbr: "LA" },
  { name: "MAINE", abbr: "ME" },
  { name: "MARYLAND", abbr: "MD" },
  { name: "MASSACHUSETTS", abbr: "MA" },
  { name: "MICHIGAN", abbr: "MI" },
  { name: "MINNESOTA", abbr: "MN" },
  { name: "MISSISSIPPI", abbr: "MS" },
  { name: "MISSOURI", abbr: "MO" },
  { name: "MONTANA", abbr: "MT" },
  { name: "NEBRASKA", abbr: "NE" },
  { name: "NEVADA", abbr: "NV" },
  { name: "NEW\nHAMPSHIRE", abbr: "NH" },
  { name: "NEW\nJERSEY", abbr: "NJ" },
  { name: "NEW\nMEXICO", abbr: "NM" },
  { name: "NEW\nYORK", abbr: "NY" },
  { name: "NORTH\nCAROLINA", abbr: "NC" },
  { name: "NORTH\nDAKOTA", abbr: "ND" },
  { name: "OHIO", abbr: "OH" },
  { name: "OKLAHOMA", abbr: "OK" },
  { name: "OREGON", abbr: "OR" },
  { name: "PENNSYLVANIA", abbr: "PA" },
  { name: "RHODE\nISLAND", abbr: "RI" },
  { name: "SOUTH\nCAROLINA", abbr: "SC" },
  { name: "SOUTH\nDAKOTA", abbr: "SD" },
  { name: "TENNESSEE", abbr: "TN" },
  { name: "TEXAS", abbr: "TX" },
  { name: "UTAH", abbr: "UT" },
  { name: "VERMONT", abbr: "VT" },
  { name: "VIRGINIA", abbr: "VA" },
  { name: "WASHINGTON", abbr: "WA" },
  { name: "WEST\nVIRGINIA", abbr: "WV" },
  { name: "WISCONSIN", abbr: "WI" },
  { name: "WYOMING", abbr: "WY" },
];

// Map specific states to their real images
const stateImages: Record<string, string> = {
  OR: oregonImg,
  CA: orangeCountyImg,
  FL: tampaImg,
  HI: hawaiiImg,
};

// Generate a consistent gradient for states without images
const gradients = [
  "from-blue-400 to-cyan-500",
  "from-emerald-400 to-teal-500",
  "from-orange-400 to-red-500",
  "from-violet-400 to-purple-500",
  "from-rose-400 to-pink-500",
  "from-amber-400 to-yellow-500",
  "from-sky-400 to-indigo-500",
  "from-lime-400 to-green-500",
];

const LocationsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
    direction: "rtl",
    slidesToScroll: 3,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 text-cta-blue hover:text-cta-blue/70 disabled:opacity-30 transition-colors"
            aria-label="Previous"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 text-cta-blue hover:text-cta-blue/70 disabled:opacity-30 transition-colors"
            aria-label="Next"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-6" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {states.map((state, i) => {
                const img = stateImages[state.abbr];
                const gradient = gradients[i % gradients.length];

                return (
                  <div
                    key={state.abbr}
                    className="flex-[0_0_20%] md:flex-[0_0_18%] lg:flex-[0_0_16%] min-w-0"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-full aspect-square rounded-full border-[3px] border-border p-1.5 group cursor-pointer">
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                          {img ? (
                            <img
                              src={img}
                              alt={state.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                              width={512}
                              height={512}
                            />
                          ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-110`} />
                          )}
                          <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                            <span className="text-white text-[10px] md:text-sm lg:text-base font-black text-center whitespace-pre-line leading-tight tracking-wide">
                              {state.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsCarousel;
