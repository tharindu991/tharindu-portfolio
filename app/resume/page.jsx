"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaAndroid,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdoor,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiExpress,
  SiJest,
  SiBitbucket,
  SiDocker,
  SiMobx,
  SiStoryblok,
  SiStorybook,
  SiAntdesign,
  SiShadcnui,
  SiIos,
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
  title: "About me",
  description:
    "I am a Senior Software Engineer based in the UK with 7+ years of experience in developing high-performance web and mobile applications. I specialise in React.js, React Native, TypeScript, Android, AWS serverless, and modern frontend technologies, crafting scalable and user-centric digital solutions. Passionate about UI/UX, performance optimisation, and cloud-based architectures, I excel at building intuitive and efficient applications that drive engagement and business growth.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tharindu Bandara",
    },
    {
      fieldName: "Phone",
      fieldValue: "+44 740 565 9803",
    },
    {
      fieldName: "Experience",
      fieldValue: "7+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "tharindu991",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "Email",
      fieldValue: "tharindu991@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "With over seven years of experience in software engineering, I have contributed to innovative web and mobile applications across AI, fintech, healthcare, e-commerce and telecommunication domains. My expertise spans front-end and full-stack development, cloud computing, and scalable architectures.",
  items: [
    {
      company: "BotCircuits",
      position: "Frontend Developer (Freelance)",
      duration: "2023 - 2024",
    },
    {
      company: "Softwentures Pvt Ltd",
      position: "Senior Software Engineer",
      duration: "2021 - 2022",
      location: "Colombo, Sri Lanka",
    },
    {
      company: "Mitra Innovation Ltd",
      position: "Senior Software Engineer",
      duration: "2018 - 2021",
      location: "Colombo, Sri Lanka",
    },
    {
      company: "Mitra Innovation Ltd",
      position: "Software Engineer",
      duration: "2017 - 2018",
      location: "Colombo, Sri Lanka",
    },
    {
      company: "LOLC Technologies Ltd",
      position: "Associate Software Engineer",
      duration: "2016 - 2017",
      location: "Colombo, Sri Lanka",
    },
    {
      company: "LOLC Technologies Ltd",
      position: "Trainee Software Engineer",
      duration: "2015 - 2016",
      location: "Colombo, Sri Lanka",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have pursued a strong academic foundation in software engineering and project management, complemented by professional certifications in software development. My education has equipped me with the technical expertise and leadership skills to deliver high-quality software solutions.",
  items: [
    {
      institution: "Meta",
      degree: "Professional Certificate in Meta Front-End Development",
      duration: "2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/RFXH2S35PBEB",
    },
    {
      institution: "Northumbria University, UK",
      degree: "M.Sc. in International Project Management",
      duration: "2022 - 2024",
    },
    {
      institution: "University of Westminster, UK",
      degree: "M.Sc. in Advanced Software Engineering",
      duration: "2017 - 2019",
    },
    {
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      degree: "B.Sc. Special (Hons) in Information Technology",
      duration: "2011 - 2015",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I specialise in building scalable and high-performance web and mobile applications using modern technologies. My expertise spans frontend, backend, cloud computing, and DevOps, enabling me to create seamless digital experiences.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
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
      icon: <SiIos />,
      name: "iOS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiAntdesign />,
      name: "Ant Design",
    },
    {
      icon: <SiShadcnui />,
      name: "Shadcn UI",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiMobx />,
      name: "MobX",
    },

    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <FaAws />,
      name: "AWS (Lambda, Amplify, S3)",
    },
    {
      icon: <FaDatabase />,
      name: "MySQL, Oracle & NoSQL",
    },
    {
      icon: <SiJest />,
      name: "Jest & React Testing Library",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiStorybook />,
      name: "Storybook",
    },
    {
      icon: <SiBitbucket />,
      name: "Git & Bitbucket",
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
            <TabsTrigger value="about">About Me</TabsTrigger>
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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg-items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px text-center lg-text-left]">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg-items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.degree}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px text-center lg-text-left]">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
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
                <p className="max-w-[600] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
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
