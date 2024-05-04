'use client'

import { useEffect, useState } from "react";
import { fetchSocial } from "@/lib/sanity-portfolio-v3/queries";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { IContact } from "@/types";

const Contact = () => {
  const [social, setSocial] = useState({
    email: "",
    linkedin: "",
    github: "",
    zalo: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSocial();
      if (data) {
        data.forEach((item: IContact) => {
          setSocial((prevState) => ({
            ...prevState,
            email: item.email,
            linkedin: item.linkedin,
            github: item.github,
            zalo: item.zalo,
          }));
        });
      } else {
        setSocial({
          email: "",
          linkedin: "",
          github: "",
          zalo: "",
        });
      }
    };
    fetchData();
  }, []);

  useGSAP(() => {
    gsap.from("#animate", {
      scrollTrigger: {
        trigger: "#animate",
        toggleActions: "restart reverse restart reverse",
        start: "10% top",
      },
      opacity: 0,
      y: -20,
      duration: 1,
    });

    gsap.to("#animate", {
      scrollTrigger: {
        trigger: "#animate",
        toggleActions: "restart reverse restart reverse",
        start: "10% top",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div id="contact" className="md:pt-[1rem] lg:pt-[1.5rem]">
      <div className="pt-[8rem] xl:pt-[12rem] pb-6 2xl:px-10 container w-full mx-auto h-auto">
        <h2
          className="flex items-center justify-center text-slate-300 text-3xl font-semibold
             before:relative before:bg-[#233554]
             before:block before:h-[2px] before:mr-4
             before:w-[100px] before:max-w-[120px]
             after:relative after:bg-[#233554]
             after:block after:h-[2px] after:ml-4
             after:w-[100px] after:max-w-[120px]"
        >
          Contacts
        </h2>
        <div className="text-white flex md:flex-row items-center flex-wrap justify-center mt-[4rem] lg:mt-[8rem] gap-16">
          <a
            href={`mailto:${social.email}`}
            className="text-2xl font-semibold xl:text-4xl font-bol hover:scale-105 transition-all duration-300"
          >
            Email
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            className="text-2xl font-semibold xl:text-4xl font-bol hover:scale-105 transition-all duration-300"
          >
            Linkedin
          </a>
          <a
            href={social.github}
            target="_blank"
            className="text-2xl font-semibold xl:text-4xl font-bol hover:scale-105 transition-all duration-300"
          >
            Github
          </a>
          <a
            href={social.zalo}
            target="_blank"
            className="text-2xl font-semibold xl:text-4xl font-bol hover:scale-105 transition-all duration-300"
          >
            Zalo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
