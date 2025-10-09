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
        {subtitle && typeof subtitle === "object" && subtitle.url ? (
          <a
            href={subtitle.url}
            className="font-bold text-[#64ffda] inline-flex items-center group"
            target="_blank"
            rel="noopener noreferrer"
          >
            {subtitle.text}
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        ) : (
          <span className="font-bold">{subtitle}</span>
        )}
      </div>
    </motion.section>
  );
}

export default Section;
