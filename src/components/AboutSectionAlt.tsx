import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Separator } from "./ui/Separator";

const AboutSection = () => {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-[var(--fertile-green-50)]"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-[var(--fertile-green-800)] reveal">
            About Monarky Concepts
          </h2>
          <p className="section-subtitle reveal">
            Founded with a mission to enhance agricultural productivity in
            Kenya, East Africa and Beyond, we provide high-quality fertilizers tailored to local soil
            conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={(el) => addToRefs(el)} className="reveal">
            <div className="rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&q=80"
                alt="Agricultural field with sunlight"
                className="w-full h-[400px] object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          <div ref={(el) => addToRefs(el)} className="space-y-6 reveal">
            <h3 className="text-2xl font-semibold text-[var(--fertile-green-800)]">
              Our Story
            </h3>
            <p className="text-gray-700">
              Established in Kenya, Monarky Concepts Ltd has been at the forefront of
              agricultural innovation over the years. We specialize in premium fertilizers that are specifically formulated to
              meet the unique needs of your soil and climate conditions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="flex-shrink-0 p-1 rounded-full bg-[var(--fertile-green-100)] text-[var(--fertile-green-600)] mr-3">
                  <CheckIcon className="w-4" />
                </span>
                <p className="text-gray-700">
                  <span className="font-medium text-gray-900">
                    Premium Expertise:
                  </span>{" "}
                  Our products are developed by well known agricultural scientists
                  who understand farming needs.
                </p>
              </div>

              <div className="flex items-start">
                <span className="flex-shrink-0 p-1 rounded-full bg-[var(--fertile-green-100)] text-[var(--fertile-green-600)] mr-3">
                  <CheckIcon className="w-4" />
                </span>
                <p className="text-gray-700">
                  <span className="font-medium text-gray-900">
                    Sustainable Approach:
                  </span>{" "}
                  We prioritize environmental sustainability in all our
                  fertilizer formulations.
                </p>
              </div>

              <div className="flex items-start">
                <span className="flex-shrink-0 p-1 rounded-full bg-[var(--fertile-green-100)] text-[var(--fertile-green-600)] mr-3">
                  <CheckIcon className="w-4" />
                </span>
                <p className="text-gray-700">
                  <span className="font-medium text-gray-900">
                    Community Focused:
                  </span>{" "}
                  We work closely with local farming communities to provide
                  education and support.
                </p>
              </div>
            </div>

            <a
              href="#products"
              className="items-center justify-center rounded-md bg-[var(--fertile-green-600)] px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[var(--fertile-green-700)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--fertile-green-600)] active:scale-[0.98] inline-block mt-4"
            >
              View Our Products
            </a>
          </div>
        </div>
        <div 
          ref={(el) => addToRefs(el)} 
          className="mt-24 reveal"
        >
          <Separator className="mb-16 bg-[var(--fertile-green-200)]" />
          
          <h3 className="text-2xl font-semibold text-[var(--fertile-green-800)] text-center mb-12">Our Mission & Vision</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/70 backdrop-blur border-[var(--fertile-green-100)] shadow-md hover:shadow-lg transition-shadow duration-300 h-full reveal stagger-delay-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-[var(--fertile-green-700)] flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[var(--fertile-green-100)] mr-3 flex items-center justify-center text-[var(--fertile-green-600)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                      <path d="m12 14 2-2"></path>
                      <path d="m12 10-2 2"></path>
                    </svg>
                  </span>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To revolutionize Kenyan agriculture by providing farmers with high-quality, 
                  environmentally-friendly fertilizers that are specifically tailored to local 
                  soil conditions, while simultaneously offering education and support to empower 
                  farming communities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 backdrop-blur border-[var(--fertile-green-100)] shadow-md hover:shadow-lg transition-shadow duration-300 h-full reveal stagger-delay-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-[var(--fertile-green-700)] flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[var(--fertile-green-100)] mr-3 flex items-center justify-center text-[var(--fertile-green-600)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 16 4-4-4-4"></path>
                      <path d="M8 12h8"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </span>
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To create a future where Kenya leads Africa in sustainable agricultural practices, 
                  where every farmer has access to the resources they need to maximize crop yields 
                  while preserving the environment for future generations, and where food security 
                  is achieved through innovation and community cooperation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
