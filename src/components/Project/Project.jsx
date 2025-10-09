import React from "react";

function Project({ title, description, link, image }) {
  return (
    <div className="flex flex-col md:flex-row items-center cursor-pointer border border-gray-800 rounded-2xl p-6 mb-6 backdrop-blur-3xl hover:bg-[#11224031] transition-colors">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/3 h-35 object-cover rounded-lg mb-4 md:mb-0 mx-auto"
        />
      )}
      <div className="w-full md:w-2/3 md:pl-12 text-center md:text-left">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-4 mb-4">{description}</p>
      <a
        href={link}
        className="text-[#64ffda] text-sm font-medium hover:underline"
      >
        Voir le projet →
      </a>
      </div>
      
    </div>
  );
}

export default Project;
