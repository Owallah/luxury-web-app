import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef } from "react";

const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("Section is intersecting");
            
            entry.target.classList.add('active');
          }
        },
        {
          root: null,
          threshold: 0.1,
        }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
  
    return (
      <section 
        id="home" 
        ref={sectionRef}
        className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url(https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[var(--fertile-green-100)] text-[var(--fertile-green-700)] text-xs font-medium tracking-wider reveal stagger-delay-1">
              PREMIUM AGRICULTURAL SOLUTIONS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--fertile-green-700)] to-[var(--fertile-green-500)] reveal stagger-delay-2">
              Nurture Your Soil,<br />Grow Your Future
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto reveal stagger-delay-3">
              Monarky provides premium fertilizers designed to enhance soil health and maximize crop yields for Kenyan farmers and beyond.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 reveal stagger-delay-4">
              <a href="#products" className="btn-primary">
                Explore Our Products
              </a>
              <a href="#about" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
  
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-fertile-green-600 hover:bg-fertile-green-50 transition-colors">
            <ArrowDownIcon className="w-5" />
          </a>
        </div>
  
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-fertile-green-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-soil-brown-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>
    );
  };
  
  export default HeroSection;