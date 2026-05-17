"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+44) 7405 659 803",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tharindu@realupglobal.co.uk",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "London, United Kingdom",
  },
];

const Contact = () => {
  const [result, setResult] = useState("Start a conversation");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Done ✓");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const handleChange = () => {
    setResult("Start a conversation");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={onSubmit}
            >
              <h3 className="text-3xl sm:text-4xl text-accent">
                Have a project, product idea or digital growth challenge?
              </h3>
              <p className="text-white/60">
                I’m open to conversations around websites, e-commerce, SaaS
                products, technical delivery and digital marketing projects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="hidden"
                  name="access_key"
                  value="9ac94e51-c46e-4de5-bbf4-920ac0659d13"
                  onChange={handleChange}
                />
                <Input
                  type="firstname"
                  placeholder="First name"
                  name="firstname"
                  required
                  onChange={handleChange}
                />
                <Input
                  type="lastname"
                  placeholder="Last name"
                  name="lastname"
                  required
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  required
                  onChange={handleChange}
                />
                <Input
                  type="phone"
                  placeholder="Phone number"
                  name="phone"
                  required
                  onChange={handleChange}
                />
              </div>
              <Select name="service" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-ecommerce-app">
                      Web, App & E-commerce Development
                    </SelectItem>
                    <SelectItem value="saas-product">
                      SaaS & Product Development
                    </SelectItem>
                    <SelectItem value="brand-digital-growth">
                      Brand & Digital Growth
                    </SelectItem>
                    <SelectItem value="technical-leadership">
                      Technical Leadership
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                type="message"
                className="h-[200px]"
                placeholder="Type your message here"
                required
                onChange={handleChange}
                name="message"
              />
              <Button className="w-fit px-6" type="submit">
                {result}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
