"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdoor, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dolores, eaque hic exercitationem maiores quibusdam",
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
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "tharindu991",
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
      fieldName: "Landuages",
      fieldValue: "English, Sinhala",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dolores, eaque hic exercitationem maiores quibusdam",
  items: [
    {
      company: "BotCircuits",
      position: "Frontend Developer",
      duration: "2024",
    },
    {
      company: "Softwentures Pvt Ltd",
      position: "Senior Software Engineer",
      duration: "2021 - 2022",
    },
    {
      company: "Mitra Innovation Ltd",
      position: "Senior Software Engineer",
      duration: "2018 - 2021",
    },
    {
      company: "LOLC Technologies Ltd",
      position: "Associate Software Engineer",
      duration: "2015 - 2018",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dolores, eaque hic exercitationem maiores quibusdam",
  items: [
    {
      institution: "Meta",
      degree: "Professional Certificate in Meta Front-End Developer",
      duration: "2024",
    },
    {
      institution: "Northumbria University",
      degree: "M.Sc. International Project Management",
      duration: "2022 - 2024",
    },
    {
      institution: "University of Westminster",
      degree: "M.Sc. in Advanced Software Engineering ",
      duration: "2017 - 2019",
    },
    {
      institution: "Sri Lanka Institute of Information Technology",
      degree: "B.Sc. Special (Hons) in Information Technology ",
      duration: "2011 - 2015",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dolores, eaque hic exercitationem maiores quibusdam",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "node.js",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "eastIn" },
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
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
