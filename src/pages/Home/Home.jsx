import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import LiquidEther from "../../components/LiquidEther/LiquidEther";
import Project from "../../components/Project/Project";
import Section from "../../components/Section/Section";
import Data from "../../data/data.json";

function Home() {
  const navItems = Data.navItems;
  const experiences = Data.experiences;
  const projects = Data.projects;
  const socialLinks = Data.socialLinks.map((link) => {
    let icon;
    switch (link.icon) {
      case "Github":
        icon = <Github size={20} />;
        break;
      case "Linkedin":
        icon = <Linkedin size={20} />;
        break;
      case "Mail":
        icon = <Mail size={20} />;
        break;
      default:
        icon = <FileText size={20} />;
    }
    return {
      icon: icon,
      url: link.url,
    };
  });
  return (
    <div className="relative min-h-screen text-gray-200 bg-[#060010]">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <LiquidEther
          colors={["#5227ff", "#ff9ffc", "#b19eef"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={0}
          autoRampDuration={0.6}
        />
      </div>
      {/* Sidebar */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        <aside className="lg:pl-20 md:fixed pt-8 md:w-1/2 w-full md:h-screen flex flex-col p-6">
          <header className="ml-[50px]">
            <h1 className="text-5xl font-extrabold text-slate-200 mb-2 m-50px">
              Alexis Bouvry
            </h1>
            <h2 className="md:text-2xl font-bold text-slate-200 mb-10 lg:mb-20">
              Front End Developer
            </h2>
            <nav className="hidden md:flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center text-gray-400 hover:text-[#64ffda] transition-colors"
                >
                  <span className="inline-block mr-3 h-px w-4 bg-[#64ffda] transition-all duration-200 ease-in-out group-hover:w-16"></span>
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

          {/* Socials */}
          <div className="md:flex flex gap-6 ml-[50px] lg:mt-20">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#64ffda] transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main className="md:ml-[50%] flex-1 p-8 space-y-32">
          <Section id="about" title="About Me">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Section>

          <Section id="experience" title="Experience">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="mb-10 flex flex-col md:flex-row md:items-start"
              >
                <div className="md:w-1/7 md:text-left mb-2 pt-1 md:mb-0 flex-shrink-0">
                  <span className="text-[#64ffda] text-sm md:block">
                    {exp.date}
                  </span>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-xl text-[#ffffff]">
                    <strong>{exp.title}</strong> — {exp.company}
                  </h3>
                  <p className="mt-2 text-gray-400">{exp.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-1 text-xs font-medium bg-[#0f2520] rounded-full text-[#64ffda]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Section>

          <Section id="work" title="Projects">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
              />
            ))}
          </Section>

          <Section id="contact" title="Contact">
            <p>
              Intéressé par une collaboration ? Écris-moi à{" "}
              <a
                href="mailto:bouvryalexis@email.com"
                className="text-[#64ffda] hover:underline"
              >
                bouvryalexis@email.com
              </a>
              .
            </p>
          </Section>
        </main>
      </div>
    </div>
  );
}

export default Home;
