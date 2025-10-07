import React from "react";

function Project() {
  return (
    <div className="border border-gray-800 rounded-2xl p-6 mb-6 hover:bg-[#112240] transition-colors">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-2 mb-4">{description}</p>
      <a
        href={link}
        className="text-[#64ffda] text-sm font-medium hover:underline"
      >
        Voir le projet →
      </a>
    </div>
  );
}

export default Project;
