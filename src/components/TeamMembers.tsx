import { teamMembers } from "../assets/data/teamData";
import Fertikal from "../assets/image/fertikal.png";
import BeneSOL from "../assets/image/benesol.png";
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const TeamMembers = ({ autoplay = true }: { autoplay?: boolean }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <section className="bg-gray-50">
      <div className="max-w-[80dvw] sm:max-w-sm md:max-w-4xl mx-4 sm:mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-10 sm:py-20 ">
        <div className="flex justify-center items-center flex-col mb-8 gap-4">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#28813c] sm:text-5xl">
            Meet our Team
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 text-center">
            The team behind your Agricultural Success
          </p>
        </div>
      
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="relative mx-auto h-80 w-[80dvw] sm:w-full">
              <AnimatePresence>
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.image}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 999
                        : teamMembers.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          <div className="flex justify-between flex-col py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold text-black">
                {teamMembers[active].name}
              </h3>
              <p className="text-sm text-gray-500">
                {teamMembers[active].position}
              </p>
              <motion.p className="text sm:text-lg text-gray-500 mt-4">
                {teamMembers[active].email.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                   {/* <p> <span className="text-black">Email:</span> {word}&nbsp;</p>   */}
                   {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
              <motion.p className="text-lg text-gray-500 mt-4">
                {teamMembers[active].phone.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>

              <div className="flex gap-4 items-center ">
                <img src={Fertikal} alt="Fertikal" className="w-8" />
                <img src={BeneSOL} alt="BeneSOL" className="w-8" />
              </div>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <ArrowLeftIcon className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <ArrowRightIcon className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
};

export default TeamMembers;
