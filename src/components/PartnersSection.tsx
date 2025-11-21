import { useEffect, useRef } from "react";
import { Handshake } from "lucide-react";
import WaodfLogo from "../assets/image/waodf_logo.png";
import Shomoro from "../assets/image/shomoro.png";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "WAKAS ORGANIC DEMO FARM",
    logo: WaodfLogo,
  },
  {
    id: 2,
    name: "Shomoro Farm Supplies Ltd",
    logo: Shomoro,
  },
  {
    id: 3,
    name: "Irigiro Avocado Farmers Association",
    logo: "https://panagrimedia.com/wp-content/uploads/2023/02/hass-2.jpg",
  },
];

const PartnersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section id="partners" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center">
              <Handshake
                className="text-[var(--fertile-green-600)] mr-2"
                size={28}
              />
              <h2 className="section-title text-[var(--fertile-green-800)] reveal">
                Our Partners
              </h2>
            </div>
            <p className="section-subtitle reveal">
              We collaborate with leading agricultural institutions and
              organizations to advance your farming.
            </p>
          </div>

          {/* Partner Logos */}
          <div
            ref={(el) => addToRefs(el)}
            className="flex flex-wrap justify-center gap-8"
          >
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className="flex flex-col items-center text-center transition-transform duration-500 ease-in-out hover:scale-105"
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <img
                  alt={partner.name}
                  src={partner.logo}
                  width={180}
                  height={60}
                  className="object-contain max-h-16 mb-3"
                />
                <p className="text-sm font-medium text-gray-700">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
