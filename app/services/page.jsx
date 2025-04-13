"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building scalable and high-performance web applications using React.js, Next.js, Wordpress, TypeScript, Redux, MobX and AWS serverless technologies. Experienced in SEO-friendly, responsive design and Progressive Web Apps (PWAs).",
    href: "",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "Expert in React Native (Android, iOS) and native Android development (Java, Kotlin), crafting seamless cross-platform and native mobile applications. Integrated deep linking, authentication, and cloud services for enhanced user experiences.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Creating intuitive and user-friendly interfaces with HTML5, CSS3, Tailwind CSS, Storybook, Atomic Design principles and WCAG-compliant accessibility standards. Collaborating closely with designers to enhance UX.",
    href: "",
  },
  {
    num: "04",
    title: "Cloud & DevOps",
    description:
      "Experienced in deploying and managing cloud-based applications using AWS Serverless (Lambda), Google Cloud Platform (Firebase), and Spring MVC. Proficient in automating deployments through CI/CD pipelines and optimising cloud infrastructure for scalability, performance, and reliability.",
    href: "",
  },
  {
    num: "05",
    title: "SEO",
    description:
      "Enhancing website visibility with SEO best practices, including technical SEO, keyword optimisation, schema markup, and performance improvements for better search rankings and organic traffic growth.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {service.num}
                  </div>

                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
