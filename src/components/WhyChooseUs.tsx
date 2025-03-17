import { useState } from "react";
import { motion } from "framer-motion";
import Spinach from "../assets/image/spinach.png";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Premium Quality",
      info: "Our fertilizers are made from the finest ingredients, ensuring maximum effectiveness for your crops.",
      icon: Spinach,
    },
    {
      title: "Sustainability Focused",
      info: "We prioritize eco-friendly practices to protect the environment while boosting your farm's productivity.",
      icon: Spinach,
    },
    {
      title: "Farmer-Centered Support",
      info: "We provide personalized support and guidance to help farmers achieve their goals.",
      icon: Spinach,
    },
    {
      title: "Affordable & Accessible",
      info: "Our products are priced competitively to ensure they are accessible to all farmers.",
      icon: Spinach,
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#28813b] to-[#28813b10] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Why Choose Us?
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  At Monarky Concepts Limited, we are committed to providing
                  high-quality, sustainable fertilizers that enhance soil health
                  and maximize crop yield. <br /> Our innovative solutions
                  ensure that farmers achieve long-term success while preserving
                  the environment.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {accordionItems.map((feature, index) => (
                    <div
                      key={index}
                      className="relative pl-9"
                      onClick={() => toggleAccordion(index)}
                    >
                      <dt className="flex items-center gap-4 font-semibold text-gray-900">
                        {/* <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" /> */}
                        <ChevronRightIcon
                          className={`w-8 text-[#28813c] transform transition-transform duration-300 ${
                            activeIndex === index ? "rotate-90" : ""
                          }`}
                        />
                        {feature.title}
                        <img src={feature.icon} alt="" className="w-6 h-6" />
                      </dt>{" "}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: activeIndex === index ? 1 : 0,
                          height: activeIndex === index ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <dd className="inline">{feature.info}</dd>
                      </motion.div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </motion.div>
          <img
            alt="Product screenshot"
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D"
            width={2432}
            height={1442}
            className="w-[80dvw] sm:max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[48rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
