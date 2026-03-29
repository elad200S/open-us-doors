import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Region images
import oregonImg from "@/assets/locations/oregon.jpg";
import orangeCountyImg from "@/assets/locations/orange-county.jpg";
import tampaImg from "@/assets/locations/tampa.jpg";
import sanDiegoImg from "@/assets/locations/san-diego.jpg";
import hawaiiImg from "@/assets/locations/hawaii.jpg";
import desertImg from "@/assets/locations/desert.jpg";
import snowMountainsImg from "@/assets/locations/snow-mountains.jpg";
import greenHillsImg from "@/assets/locations/green-hills.jpg";
import southernTownImg from "@/assets/locations/southern-town.jpg";
import citySkylineImg from "@/assets/locations/city-skyline.jpg";
import plainsImg from "@/assets/locations/plains.jpg";
import rockyMountainsImg from "@/assets/locations/rocky-mountains.jpg";
import newEnglandImg from "@/assets/locations/new-england.jpg";
import texasRanchImg from "@/assets/locations/texas-ranch.jpg";
import pacificNwImg from "@/assets/locations/pacific-nw.jpg";

// Map each state to a representative image
const stateImageMap: Record<string, string> = {
  AL: southernTownImg, AK: snowMountainsImg, AZ: desertImg, AR: greenHillsImg,
  CA: orangeCountyImg, CO: rockyMountainsImg, CT: newEnglandImg, DE: newEnglandImg,
  FL: tampaImg, GA: southernTownImg, HI: hawaiiImg, ID: rockyMountainsImg,
  IL: citySkylineImg, IN: greenHillsImg, IA: plainsImg, KS: plainsImg,
  KY: greenHillsImg, LA: southernTownImg, ME: newEnglandImg, MD: citySkylineImg,
  MA: newEnglandImg, MI: greenHillsImg, MN: greenHillsImg, MS: southernTownImg,
  MO: greenHillsImg, MT: rockyMountainsImg, NE: plainsImg, NV: desertImg,
  NH: newEnglandImg, NJ: citySkylineImg, NM: desertImg, NY: citySkylineImg,
  NC: greenHillsImg, ND: plainsImg, OH: greenHillsImg, OK: texasRanchImg,
  OR: oregonImg, PA: newEnglandImg, RI: newEnglandImg, SC: southernTownImg,
  SD: plainsImg, TN: southernTownImg, TX: texasRanchImg, UT: desertImg,
  VT: newEnglandImg, VA: greenHillsImg, WA: pacificNwImg, WV: greenHillsImg,
  WI: greenHillsImg, WY: rockyMountainsImg,
};

const states = [
  { name: "ALABAMA", abbr: "AL" }, { name: "ALASKA", abbr: "AK" },
  { name: "ARIZONA", abbr: "AZ" }, { name: "ARKANSAS", abbr: "AR" },
  { name: "CALIFORNIA", abbr: "CA" }, { name: "COLORADO", abbr: "CO" },
  { name: "CONNECTICUT", abbr: "CT" }, { name: "DELAWARE", abbr: "DE" },
  { name: "FLORIDA", abbr: "FL" }, { name: "GEORGIA", abbr: "GA" },
  { name: "HAWAII", abbr: "HI" }, { name: "IDAHO", abbr: "ID" },
  { name: "ILLINOIS", abbr: "IL" }, { name: "INDIANA", abbr: "IN" },
  { name: "IOWA", abbr: "IA" }, { name: "KANSAS", abbr: "KS" },
  { name: "KENTUCKY", abbr: "KY" }, { name: "LOUISIANA", abbr: "LA" },
  { name: "MAINE", abbr: "ME" }, { name: "MARYLAND", abbr: "MD" },
  { name: "MASSACHUSETTS", abbr: "MA" }, { name: "MICHIGAN", abbr: "MI" },
  { name: "MINNESOTA", abbr: "MN" }, { name: "MISSISSIPPI", abbr: "MS" },
  { name: "MISSOURI", abbr: "MO" }, { name: "MONTANA", abbr: "MT" },
  { name: "NEBRASKA", abbr: "NE" }, { name: "NEVADA", abbr: "NV" },
  { name: "NEW\nHAMPSHIRE", abbr: "NH" }, { name: "NEW\nJERSEY", abbr: "NJ" },
  { name: "NEW\nMEXICO", abbr: "NM" }, { name: "NEW\nYORK", abbr: "NY" },
  { name: "NORTH\nCAROLINA", abbr: "NC" }, { name: "NORTH\nDAKOTA", abbr: "ND" },
  { name: "OHIO", abbr: "OH" }, { name: "OKLAHOMA", abbr: "OK" },
  { name: "OREGON", abbr: "OR" }, { name: "PENNSYLVANIA", abbr: "PA" },
  { name: "RHODE\nISLAND", abbr: "RI" }, { name: "SOUTH\nCAROLINA", abbr: "SC" },
  { name: "SOUTH\nDAKOTA", abbr: "SD" }, { name: "TENNESSEE", abbr: "TN" },
  { name: "TEXAS", abbr: "TX" }, { name: "UTAH", abbr: "UT" },
  { name: "VERMONT", abbr: "VT" }, { name: "VIRGINIA", abbr: "VA" },
  { name: "WASHINGTON", abbr: "WA" }, { name: "WEST\nVIRGINIA", abbr: "WV" },
  { name: "WISCONSIN", abbr: "WI" }, { name: "WYOMING", abbr: "WY" },
];

const LocationsCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
      dragFree: false,
      direction: "rtl",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -right-1 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md flex items-center justify-center text-cta-blue hover:bg-background transition-colors"
            aria-label="Previous"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -left-1 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md flex items-center justify-center text-cta-blue hover:bg-background transition-colors"
            aria-label="Next"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-8 md:mx-12" ref={emblaRef}>
            <div className="flex">
              {states.map((state, i) => {
                const isActive = i === selectedIndex;
                const img = stateImageMap[state.abbr];

                return (
                  <div
                    key={state.abbr}
                    className="flex-[0_0_33.33%] md:flex-[0_0_20%] min-w-0 px-2 md:px-3"
                  >
                    <div
                      className={`flex flex-col items-center transition-all duration-500 ease-out ${
                        isActive ? "scale-110" : "scale-90 opacity-75"
                      }`}
                    >
                      <div
                        className={`w-full aspect-square rounded-full p-1.5 group cursor-pointer transition-shadow duration-500 ${
                          isActive
                            ? "border-[3px] border-cta-blue shadow-[0_0_24px_rgba(58,125,255,0.35)]"
                            : "border-[2px] border-border"
                        }`}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                          <img
                            src={img}
                            alt={state.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            width={512}
                            height={512}
                          />
                          {/* Dark overlay for readability */}
                          <div className="absolute inset-0 bg-navy/45 group-hover:bg-navy/35 transition-colors duration-300 flex items-center justify-center">
                            <span
                              className="text-white text-[10px] md:text-sm lg:text-base font-black text-center whitespace-pre-line leading-tight tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                            >
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
