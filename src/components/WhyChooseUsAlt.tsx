import { useEffect, useRef } from "react";
import { Leaf, Droplets, Sun, Shield, Users, LineChart } from 'lucide-react';

const features = [
    {
      name: 'Nutrient-Rich Formulas',
      description: 'Our fertilizers contain balanced nutrients that promote healthy plant growth and increase crop yields.',
      icon: Leaf,
    },
    {
      name: 'Soil Enrichment',
      description: 'Improve soil structure and fertility for long-term sustainability and productivity.',
      icon: Droplets,
    },
    {
      name: 'Climate-Adapted',
      description: 'Specially formulated for Kenyan climate conditions to ensure optimal performance.',
      icon: Sun,
    },
    {
      name: 'Quality Assurance',
      description: 'Rigorous testing ensures consistent quality and effectiveness for every product.',
      icon: Shield,
    },
    {
      name: 'Expert Support',
      description: 'Our team of agricultural experts provides guidance on optimal fertilizer application.',
      icon: Users,
    },
    {
      name: 'Proven Results',
      description: 'Documented evidence of yield improvements across various crop types in Kenya.',
      icon: LineChart,
    },
  ];
  
  const WhyChooseUs = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
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
      <section id="why-choose-us" ref={sectionRef} className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-[var(--fertile-green-800)] reveal">Why Choose Us</h2>
            <p className="section-subtitle reveal">
              Our products are designed to deliver exceptional results while promoting sustainable farming practices.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                ref={(el) => addToRefs(el)}
                className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] reveal"
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <div className="inline-flex items-center justify-center p-3 mb-4 rounded-lg bg-[var(--fertile-green-100)] text-[var(--fertile-green-600)]">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;