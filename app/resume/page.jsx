"use client";

import {
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAws,
  FaAndroid,
  FaSearch,
  FaShareAlt,
  FaNetworkWired,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiVercel,
  SiFirebase,
  SiWordpress,
  SiShopify,
  SiMysql,
  SiJira,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About",
  description: [
    "I’m Tharindu, a founder and technical lead with a background in full-stack software engineering, product delivery and digital growth.",
    "Over the past 10+ years, I’ve worked across fintech, healthcare, telecom, hospitality, e-commerce and AI-enabled software, building web platforms, mobile apps, APIs, e-commerce systems and SaaS-style products.",
    "Today, I lead Realup, a UK-based software and digital marketing company helping businesses improve their online presence through websites, e-commerce, SEO, branding, social media and practical digital solutions. I also work on Realup Pulse, a SaaS product initiative focused on helping hospitality businesses improve marketing consistency and visibility.",
    "I enjoy working where business, product and technology meet — understanding the real problem, shaping the right solution and seeing it through from idea to launch.",
  ],
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tharindu Bandara",
    },
    {
      fieldName: "Experience",
      fieldValue: "10+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
    {
      fieldName: "Phone",
      fieldValue: "+44 7405 659 803",
    },
    {
      fieldName: "Email",
      fieldValue: "tharindu@realupglobal.co.uk",
    },
    {
      fieldName: "Location",
      fieldValue: "London, United Kingdom",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description:
    "A practical background across founder-led business delivery, product development, technical leadership and full-stack software engineering.",
  items: [
    {
      company: "Realup Global Limited",
      position: "Founder & Managing Director",
      duration: "2025 – Present",
    },
    {
      company: "BotCircuits",
      position: "Full-Stack Engineer",
      duration: "2024",
    },
    {
      company: "Softwentures Digital Solutions Pvt Ltd",
      position: "Co-Founder & Technical Lead",
      duration: "2021 – 2022",
    },
    {
      company: "Mitra Innovation Limited",
      position: "Senior Software Engineer / Software Engineer",
      duration: "2018 – 2021",
    },
    {
      company: "LOLC Technologies Limited",
      position: "Associate Software Engineer",
      duration: "2015 – 2018",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "Academic background in project management, software engineering and information technology, supported by continued professional development across software, product and digital delivery.",
  items: [
    {
      institution: "Meta / Coursera",
      degree: "Professional Certificate in Meta Front-End Development",
      duration: "2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/RFXH2S35PBEB",
    },
    {
      institution: "Northumbria University, UK",
      degree: "MSc International Project Management",
      duration: "2022 – 2024",
    },
    {
      institution: "University of Westminster, UK",
      degree: "MSc Advanced Software Engineering",
      duration: "2017 – 2019",
    },
    {
      institution: "Sri Lanka Institute of Information Technology",
      degree: "BSc (Hons) Information Technology",
      duration: "2011 – 2015",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "A practical mix of product leadership, full-stack engineering, mobile development, cloud services and digital growth tools.",
  skillList: [
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React Native",
    },
    {
      icon: <FaAndroid />,
      name: "Android",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiVercel />,
      name: "Vercel",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiWordpress />,
      name: "WordPress",
    },
    {
      icon: <SiShopify />,
      name: "Shopify",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <FaNetworkWired />,
      name: "REST APIs",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <FaSearch />,
      name: "SEO",
    },
    {
      icon: <FaShareAlt />,
      name: "Social Media Management",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiJira />,
      name: "Jira",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] min-h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg sm:text-xl max-w-[280px] min-h-[60px] text-center lg:text-left leading-snug">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-center lg:text-left">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] min-h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg sm:text-xl max-w-[280px] min-h-[60px] text-center lg:text-left leading-snug">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-center lg:text-left">
                              {item.institution}
                            </p>
                          </div>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent underline"
                            >
                              View Certificate
                            </a>
                          )}
                        </li>
                      );
                    })}
                    <div
                      data-iframe-width="150"
                      data-iframe-height="270"
                      data-share-badge-id="ce6de931-f4e6-4ebb-bdec-33abf0810f6e"
                      data-share-badge-host="https://www.credly.com"
                    ></div>
                    <script
                      type="text/javascript"
                      async
                      src="//cdn.credly.com/assets/utilities/embed.js"
                    ></script>
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-6xl hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <div className="max-w-[700px] text-white/60 mx-auto xl:mx-0 space-y-4">
                  {about.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
