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
      <div className="relative z-20 flex flex-col md:flex-row min-h-screen pointer-events-auto">
        <aside className="lg:pl-30 md:fixed md:pt-25 pt-8 md:w-1/2 w-full md:h-screen flex flex-col p-6 items-center md:items-start text-center md:text-left">
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
        <main className="md:ml-[50%] flex-1 p-8 space-y-32 md:pt-25">
          <Section id="about" title="About Me">
            <p className="mb-4">
              Creative Front-End Developer with a focus on{" "}
              <span className="font-bold">React</span>,
              <span className="font-bold">TypeScript</span>, and{" "}
              <span className="font-bold">modern UI/UX design</span>.
              Experienced in building responsive, accessible, and visually
              appealing interfaces through freelance projects.
            </p>
            <p className="mb-4">
              In the past, I have worked as a{" "}
              <span className="font-bold">Graphic Designer</span>, which has
              given me a strong foundation in visual communication and user
              experience.
            </p>
            <p className="mb-4">
              Combines technical expertise with my background in graphic design
              to deliver user-centered web experiences.
            </p>
            <p>
              In my spare time, I enjoy working on side projects like developing
              bots and applications that integrate popular APIs. I’m also
              passionate about traveling, photo editing, and drawing.
            </p>
          </Section>

          <Section
            id="experience"
            title="Experiences"
            subtitle={{
              text: "View my full résumé",
              url: "https://github.com/abouvry",
            }}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="mb-10 flex flex-col md:flex-row md:items-start"
              >
                <div className="md:w-1/6 md:text-left mb-2 pt-1 md:mb-0 flex-shrink-0">
                  <span className="text-[#64ffda] text-sm md:block">
                    {exp.date}
                  </span>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-xl text-[#ffffff]">
                    <strong>{exp.title}</strong> — {exp.company}
                  </h3>
                  <p className="mt-3 text-gray-400">{exp.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-1 text-xs font-medium bg-[#0f2520de] rounded-full text-[#64ffda]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Section>

          <Section
            id="work"
            title="Projects"
            subtitle={{
              text: "View more on my GitHub",
              url: "https://github.com/abouvry",
            }}
          >
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </Section>

          <Section id="contact">
            <p>
              Built with <span className="text-[#64ffda]">React</span>,
              <span className="text-[#64ffda]">TailwindCSS</span> and
              <span className="text-[#64ffda]"> ThreeJS</span>
            </p>
          </Section>
        </main>
      </div>
    </div>
  );
}

export default Home;
