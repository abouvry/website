import React from "react";
import { motion } from "framer-motion";

function Section({ id, title, subtitle, children }) {
  return (
    <motion.section
      id={id}
      className="max-w-3xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold text-[#64ffda] mb-4">{title}</h2>
      <div className="text-gray-400 leading-relaxed">{children}</div>
      <div className="my-8">
        <a className="font-bold">{subtitle}</a>
      </div>
    </motion.section>
  );
}

export default Section;
