"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Cellcard - Selfcare Application",
    description:
      "The Cellcard Selfcare Application was designed to improve user interaction and service management capabilities for Cellcard customers.",
    stack: [
      { name: "React Native" },
      { name: "MobX" },
      { name: "AWS Serverless" },
    ],
    image: "/assets/work/cellcard.png",
    live: "https://apps.apple.com/kh/app/cellcard/id977888051?platform=iphone",
    github:
      "https://apps.apple.com/kh/app/cellcard/id977888051?platform=iphone",
  },
  {
    num: "02",
    category: "frontend",
    title: "Botcircuits",
    description:
      "Botcircuits is a No-Code Conversational AI platform that allows to create intelligent chatbots that answer questions by calling Actions - Functions, APIs, Document Search, and more.",
    stack: [{ name: "React.js" }, { name: "Tailwind CSS" }, { name: "Redux" }],
    image: "/assets/work/botcircuits.png",
    live: "https://www.botcircuits.com/",
    github: "https://www.botcircuits.com/",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Leap in! NDIS Planning",
    description:
      "An application facilitating access to care services for differently abled individuals under the National Disability Insurance Scheme (NDIS) in Australia.",
    stack: [
      { name: "React Native" },
      { name: "React Native Web" },
      { name: "AWS Serverless" },
    ],
    image: "/assets/work/leap-in.png",
    live: "https://apps.apple.com/au/app/leap-in-ndis-planning/id1399430949?platform=iphone",
    github:
      "https://apps.apple.com/au/app/leap-in-ndis-planning/id1399430949?platform=iphone",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "LOLC Vehicle Valuation",
    description:
      "A native Android app for LOLC field officers to streamline asset valuations. Features include offline support, real-time API sync, and portable thermal printing. Improved field efficiency, reduced paperwork, and ensured secure data handling.",
    stack: [
      { name: "Native Android (Java)" },
      { name: "Retrofit" },
      { name: "Room" },
    ],
    image: "/assets/work/lolc-valuation.png",
    live: "https://play.google.com/store/apps/details?id=com.loits.lomovaluation.valuationproject",
    github:
      "https://play.google.com/store/apps/details?id=com.loits.lomovaluation.valuationproject",
  },
  {
    num: "05",
    category: "Fullstack",
    title: "UKCeylon",
    description:
      "A Fully-featured E-Commerce Webapp with PWA technology for UK's leading supermarket store.",
    stack: [{ name: "Wordpress" }, { name: "Woocommerce" }, { name: "PWA" }],
    image: "/assets/work/ukceylon.png",
    live: "https://www.ukceylon.com/",
    github: "https://www.ukceylon.com/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github repository </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                }
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
