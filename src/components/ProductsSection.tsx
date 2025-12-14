import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef, useState } from 'react';
import Nutrifert from "../assets/image/Nutrifert.png"
// import Benefert from "../assets/image/benesol.png"
import Fertiken from "../assets/image/fertiken.png"

const products = [
  {
    id: 1,
    name: 'Nutrifert NPK 4-3-3',
    description: 'Our flagship product, perfectly balanced for most Kenyan crops. Enhances soil structure while providing essential nutrients for robust plant growth.',
    features: [
      'Balanced NPK ratio for general purpose use',
      'Contains essential micronutrients',
      'Improves soil structure',
      'Slow-release formula for sustained feeding',
      '100% Natural',
      'The pellets have a high water retaining capacity up to three times its own weight.',
    ],
    image: Nutrifert,
    color: 'bg-[var(--fertile-green-600)]',
    main: true,
  },
  // {
  //   id: 2,
  //   name: 'Benesol 4-3-3',
  //   description: 'Premium organic blend ideal for vegetable and fruit crops, enriched with natural minerals for superior taste and yield.',
  //   features: [
  //     'Organic certified ingredients',
  //     'Enhanced with natural minerals',
  //     'Perfect for vegetable and fruit crops',
  //     'Improves produce taste and quality',
  //   ],
  //   image: Benefert,
  //   color: 'bg-[var(--soil-brown-600)]',
  //   main: false,
  // },
  {
    id: 1,
    name: 'Fertiken',
    description: 'Locally produced, affordable fertilizer designed specifically for Kenyan small-scale farmers, with region-specific formulations.',
    features: [
      'Affordable for small-scale farmers',
      'Region-specific formulations',
      'Easy application methods',
      'Compatible with local farming practices',
    ],
    image: Fertiken,
    color: 'bg-[var(--soil-brown-500)]',
    main: false,
  },
];

const ProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextProduct = () => {
    setActiveProduct((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevProduct = () => {
    setActiveProduct((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-[-10%] w-80 h-80 bg-[var(--fertile-green-100)] rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-[-10%] w-96 h-96 bg-[var(--soil-brown-100)] rounded-full opacity-20"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-[var(--fertile-green-800)] reveal">Our Products</h2>
          <p className="section-subtitle reveal">
            Discover our range of premium fertilizers designed to maximize your crop yield and soil health.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[var(--fertile-green-100)] text-[var(--fertile-green-700)] text-xs font-semibold">
                PREMIUM QUALITY
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                {products[activeProduct].name}
              </h3>
              <p className="text-gray-600 mb-6">
                {products[activeProduct].description}
              </p>
              <ul className="space-y-3 mb-8">
                {products[activeProduct].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`flex-shrink-0 w-2 h-2 ${products[activeProduct].color} rounded-full mt-2 mr-3`}></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-3">
                <button
                  className="btn-primary"
                  onClick={() => window.location.href = '#contact'}
                >
                  Request Information
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={products[activeProduct].image}
                  alt={products[activeProduct].name}
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-110"
                />
                {/* Product label */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full ${products[activeProduct].color} text-white text-sm font-medium`}>
                  {products[activeProduct].main ? 'Flagship Product' : 'Premium'}
                </div>
              </div>
            </div>
          </div>

          {/* Product navigation */}
          <div className="flex justify-center items-center space-x-4 mt-12 reveal">
            <button 
              onClick={prevProduct}
              className="p-2 rounded-full bg-[var(--fertile-green-100)] text-[var(--fertile-green-700)] hover:bg-[var(--fertile-green-200)] transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeftIcon className='w-6' />
            </button>
            
            <div className="flex space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProduct(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeProduct === index ? 'bg-[var(--fertile-green-600)]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextProduct}
              className="p-2 rounded-full bg-[var(--fertile-green-100)] text-[var(--fertile-green-700)] hover:bg-[var(--fertile-green-200)] transition-colors"
              aria-label="Next product"
            >
              <ChevronRightIcon className='w-6' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;