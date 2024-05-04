'use client'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";

const About = () => {
  useGSAP(() => {
    gsap.from("#aboutAnimate", {
      scrollTrigger: {
        trigger: "#aboutAnimate",
        start: "top center",
      },
      opacity: 0,
      y: -40,
      duration: 1,
    });

    gsap.to("#aboutAnimate", {
      scrollTrigger: {
        trigger: "#aboutAnimate",
        start: "top center",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div id="about" className="md:pt-[1rem] lg:pt-[1.5rem]">
      <div className="py-12 2xl:px-10 container w-full mx-auto h-auto">
        <div
          id="aboutAnimate"
          className="flex flex-col-reverse gap-20 lg:gap-0 lg:flex-row lg:items-center lg:justify-center lg:px-8"
        >
          {/* left */}
          <div className="w-full lg:w-1/2">
            <h2
              className="mb-6 flex items-center text-slate-300 text-3xl font-semibold after:relative 
            after:bg-[#233554] after:block after:h-[2px] 
            after:ml-4 after:w-full after:max-w-[100px] lg:after:max-w-[200px] xl:after:max-w-[400px]"
            >
              About Me
            </h2>
            <h2 className="mb-6 text-white text-4xl font-bold">
              Front-end{" "}
              <span className="text-transparent bg-clip-text gradient-color">
                Web Developer
              </span>
            </h2>
            <p className="text-slate-400 text-lg w-full font-normal lg:w-[90%]">
              Hi! My name is Ho Quoc Thang and I have graduated from Cao Thang
              Technical College in Vietnam. I really like designing and
              programming websites. My desire is to become a Senior Frontend
              Developer or Senior Web Developer. Currently, I am studying and
              improving my knowledge of morden tech stacks for frontend such as
              ReactJS, NextJS...
            </p>
            <div className="mt-6 flex items-center gap-6">
              <span className="text-slate-400 text-lg font-normal">
                Tech Stack
              </span>
              <span className="border-2 border-slate-200 h-5"></span>
              <Image src='/t-stack.svg' width={500} height={500} className="w-52 h-auto" alt="stack" />
            </div>
          </div>
          {/* right */}
          <div className="w-full lg:w-2/6">
            <Image src='/avt.jpg' width={500} height={500} alt="stack" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
