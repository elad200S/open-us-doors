import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Unique state images
import alabamaImg from "@/assets/locations/alabama.jpg";
import alaskaImg from "@/assets/locations/alaska.jpg";
import arizonaImg from "@/assets/locations/arizona.jpg";
import arkansasImg from "@/assets/locations/arkansas.jpg";
import californiaImg from "@/assets/locations/california.jpg";
import coloradoImg from "@/assets/locations/colorado.jpg";
import connecticutImg from "@/assets/locations/connecticut.jpg";
import delawareImg from "@/assets/locations/delaware.jpg";
import floridaImg from "@/assets/locations/florida.jpg";
import georgiaImg from "@/assets/locations/georgia.jpg";
import hawaiiImg from "@/assets/locations/hawaii-new.jpg";
import idahoImg from "@/assets/locations/idaho.jpg";
import illinoisImg from "@/assets/locations/illinois.jpg";
import indianaImg from "@/assets/locations/indiana.jpg";
import iowaImg from "@/assets/locations/iowa.jpg";
import kansasImg from "@/assets/locations/kansas.jpg";
import kentuckyImg from "@/assets/locations/kentucky.jpg";
import louisianaImg from "@/assets/locations/louisiana.jpg";
import maineImg from "@/assets/locations/maine.jpg";
import marylandImg from "@/assets/locations/maryland.jpg";
import massachusettsImg from "@/assets/locations/massachusetts.jpg";
import michiganImg from "@/assets/locations/michigan.jpg";
import minnesotaImg from "@/assets/locations/minnesota.jpg";
import mississippiImg from "@/assets/locations/mississippi.jpg";
import missouriImg from "@/assets/locations/missouri.jpg";
import montanaImg from "@/assets/locations/montana.jpg";
import nebraskaImg from "@/assets/locations/nebraska.jpg";
import nevadaImg from "@/assets/locations/nevada.jpg";
import newHampshireImg from "@/assets/locations/new-hampshire.jpg";
import newJerseyImg from "@/assets/locations/new-jersey.jpg";
import newMexicoImg from "@/assets/locations/new-mexico.jpg";
import newYorkImg from "@/assets/locations/new-york.jpg";
import northCarolinaImg from "@/assets/locations/north-carolina.jpg";
import northDakotaImg from "@/assets/locations/north-dakota.jpg";
import ohioImg from "@/assets/locations/ohio.jpg";
import oklahomaImg from "@/assets/locations/oklahoma.jpg";
import oregonImg from "@/assets/locations/oregon-new.jpg";
import pennsylvaniaImg from "@/assets/locations/pennsylvania.jpg";
import rhodeIslandImg from "@/assets/locations/rhode-island.jpg";
import southCarolinaImg from "@/assets/locations/south-carolina.jpg";
import southDakotaImg from "@/assets/locations/south-dakota.jpg";
import tennesseeImg from "@/assets/locations/tennessee.jpg";
import texasImg from "@/assets/locations/texas.jpg";
import utahImg from "@/assets/locations/utah.jpg";
import vermontImg from "@/assets/locations/vermont.jpg";
import virginiaImg from "@/assets/locations/virginia.jpg";
import washingtonImg from "@/assets/locations/washington.jpg";
import westVirginiaImg from "@/assets/locations/west-virginia.jpg";
import wisconsinImg from "@/assets/locations/wisconsin.jpg";
import wyomingImg from "@/assets/locations/wyoming.jpg";

const states = [
  { name: "ALABAMA", abbr: "AL", img: alabamaImg },
  { name: "ALASKA", abbr: "AK", img: alaskaImg },
  { name: "ARIZONA", abbr: "AZ", img: arizonaImg },
  { name: "ARKANSAS", abbr: "AR", img: arkansasImg },
  { name: "CALIFORNIA", abbr: "CA", img: californiaImg },
  { name: "COLORADO", abbr: "CO", img: coloradoImg },
  { name: "CONNECTICUT", abbr: "CT", img: connecticutImg },
  { name: "DELAWARE", abbr: "DE", img: delawareImg },
  { name: "FLORIDA", abbr: "FL", img: floridaImg },
  { name: "GEORGIA", abbr: "GA", img: georgiaImg },
  { name: "HAWAII", abbr: "HI", img: hawaiiImg },
  { name: "IDAHO", abbr: "ID", img: idahoImg },
  { name: "ILLINOIS", abbr: "IL", img: illinoisImg },
  { name: "INDIANA", abbr: "IN", img: indianaImg },
  { name: "IOWA", abbr: "IA", img: iowaImg },
  { name: "KANSAS", abbr: "KS", img: kansasImg },
  { name: "KENTUCKY", abbr: "KY", img: kentuckyImg },
  { name: "LOUISIANA", abbr: "LA", img: louisianaImg },
  { name: "MAINE", abbr: "ME", img: maineImg },
  { name: "MARYLAND", abbr: "MD", img: marylandImg },
  { name: "MASSACHUSETTS", abbr: "MA", img: massachusettsImg },
  { name: "MICHIGAN", abbr: "MI", img: michiganImg },
  { name: "MINNESOTA", abbr: "MN", img: minnesotaImg },
  { name: "MISSISSIPPI", abbr: "MS", img: mississippiImg },
  { name: "MISSOURI", abbr: "MO", img: missouriImg },
  { name: "MONTANA", abbr: "MT", img: montanaImg },
  { name: "NEBRASKA", abbr: "NE", img: nebraskaImg },
  { name: "NEVADA", abbr: "NV", img: nevadaImg },
  { name: "NEW\nHAMPSHIRE", abbr: "NH", img: newHampshireImg },
  { name: "NEW\nJERSEY", abbr: "NJ", img: newJerseyImg },
  { name: "NEW\nMEXICO", abbr: "NM", img: newMexicoImg },
  { name: "NEW\nYORK", abbr: "NY", img: newYorkImg },
  { name: "NORTH\nCAROLINA", abbr: "NC", img: northCarolinaImg },
  { name: "NORTH\nDAKOTA", abbr: "ND", img: northDakotaImg },
  { name: "OHIO", abbr: "OH", img: ohioImg },
  { name: "OKLAHOMA", abbr: "OK", img: oklahomaImg },
  { name: "OREGON", abbr: "OR", img: oregonImg },
  { name: "PENNSYLVANIA", abbr: "PA", img: pennsylvaniaImg },
  { name: "RHODE\nISLAND", abbr: "RI", img: rhodeIslandImg },
  { name: "SOUTH\nCAROLINA", abbr: "SC", img: southCarolinaImg },
  { name: "SOUTH\nDAKOTA", abbr: "SD", img: southDakotaImg },
  { name: "TENNESSEE", abbr: "TN", img: tennesseeImg },
  { name: "TEXAS", abbr: "TX", img: texasImg },
  { name: "UTAH", abbr: "UT", img: utahImg },
  { name: "VERMONT", abbr: "VT", img: vermontImg },
  { name: "VIRGINIA", abbr: "VA", img: virginiaImg },
  { name: "WASHINGTON", abbr: "WA", img: washingtonImg },
  { name: "WEST\nVIRGINIA", abbr: "WV", img: westVirginiaImg },
  { name: "WISCONSIN", abbr: "WI", img: wisconsinImg },
  { name: "WYOMING", abbr: "WY", img: wyomingImg },
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
            className="absolute -right-1 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gold hover:bg-background transition-colors"
            aria-label="Previous"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -left-1 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gold hover:bg-background transition-colors"
            aria-label="Next"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-8 md:mx-12" ref={emblaRef}>
            <div className="flex">
              {states.map((state, i) => {
                const isActive = i === selectedIndex;

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
                        className={`w-full aspect-square rounded-full p-1.5 group cursor-pointer transition-shadow duration-500`}
                        style={{
                          border: isActive ? "3px solid #D4AF37" : "2px solid hsl(var(--border))",
                          boxShadow: isActive ? "0 0 24px rgba(212,175,55,0.35)" : "none",
                        }}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                          <img
                            src={state.img}
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
