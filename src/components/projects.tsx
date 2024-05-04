'use client'

import { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/sanity-portfolio-v3/queries";
import TechStack from "@/components/tech-stack";
import { FaGithub } from "react-icons/fa";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import Link from "next/link";
import { IProject } from "@/types";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjects();
      if (data) {
        setProjects(data);
      } else {
        setProjects([]);
      }
    };
    fetchData();
  }, []);

  useGSAP(() => {
    gsap.from("#projectAnimate", {
      scrollTrigger: {
        trigger: "#projectAnimate",
        start: "top center",
      },
      opacity: 0,
      y: -40,
      duration: 1,
    });

    gsap.to("#projectAnimate", {
      scrollTrigger: {
        trigger: "#projectAnimate",

        start: "top center",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div id="projects" className="md:pt-[1rem] lg:pt-[1.5rem]">
      <div className="pt-[8rem] pb-6 2xl:px-10 container w-full mx-auto h-auto">
        <h4
          className="flex items-center text-slate-300 text-3xl font-semibold 
        after:relative after:bg-[#233554] after:block 
        after:h-[2px] after:ml-4 after:w-full after:max-w-[50px] lg:after:max-w-[600px] xl:after:max-w-[500px]"
        >
          Some Projects I’ve Built
        </h4>
        <div className="mt-[4rem]">
          <div className="grid grid-cols-1 w-full">
            <div
              id="projectAnimate"
              className="flex flex-col lg:flex-row w-full flex-wrap gap-24"
            >
              {projects?.map((item, index) => (
                <div
                  className={`w-full lg:inline-flex items-center ${index % 2 === 0 ? "xl:flex-row-reverse xl:justify-between" : ""}`}
                  key={index}
                >
                  <div className="w-full xl:w-2/5">
                    <Image
                      alt="project"
                      className="w-full h-auto rounded-xl object-cover hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300"
                      src={item?.imageURL}
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </div>
                  <div
                    className={`w-full xl:w-1/2 mt-[2rem] lg:ml-[2rem] xl:ml-0 lg:mt-0 flex gap-10 ${index % 2 === 0 ? "" : ""} items-center`}
                  >
                    <div
                      className={`flex-1 flex flex-col xl:max-w-[650px] ${index % 2 === 0 ? "" : "xl:ml-8"}`}
                    >
                      <h4 className="font-bold lg:text-[42px] text-[26px] text-white">
                        {item?.name}
                      </h4>
                      <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-slate-400">
                        {item?.description}
                      </p>
                      <TechStack technologies={item?.tech} />
                      <div className="text-white flex flex-row gap-4 mt-6">
                        <Link
                          title="github"
                          href={item?.github}
                          target="_blank"
                          className="hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                          <FaGithub className="text-2xl" />
                        </Link>
                        <Link
                          title="link"
                          href={item?.link}
                          target="_blank"
                          className="hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                          <LuArrowUpRightFromCircle className="text-2xl" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
