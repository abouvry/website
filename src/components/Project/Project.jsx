import React from "react";

function Project({ title, description, link, image, tags }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
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
      <p className="text-gray-400 mt-2 mb-2">{description}</p>
      
      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-4 py-1 text-xs font-medium bg-[#0f2520de] rounded-full text-[#64ffda]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}    
      </div>
    </div>
    </a>
  );
}

export default Project;
