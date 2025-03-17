import { FC } from "react";
import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  text: string;
}

const InfoCard: FC<InfoCardProps> = ({ title, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-8 mt-8 mb-3 max-w-md p-8 bg-gradient-to-r from-[#28813b4b] to-[#28813b10] dark:from-[#28813c] dark:to-[#0f1610c4] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{text}</p>
    </motion.div>
  );
};

export default InfoCard;