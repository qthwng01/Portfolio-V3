'use client'

import { useEffect, useState } from "react";
import { fetchResume } from "@/lib/sanity-portfolio-v3/queries";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Preview = () => {
  const [resume, setResume] = useState("");

  useGSAP(() => {
    gsap.fromTo(
      "#techImg",
      {
        opacity: 0,
        x: 50,
        duration: 1,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "back.in",
      }
    );
    gsap.fromTo(
      "#leftAnimate",
      {
        opacity: 0,
        y: -50,
        duration: 1,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.in",
      }
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const stringFile = await fetchResume();
      if (stringFile) {
        setResume(stringFile);
      } else {
        setResume("");
      }
    };
    fetchData();
  }, []);

  const openPDF = (pdfUrl: any) => {
    window.open(pdfUrl[0].file, "_blank");
  };

  return (
    <div id="preview" className="md:pt-[1rem] lg:pt-[1.5rem]">
      <div className="pt-10 xl:pt-16 pb-6 2xl:px-10 container w-full mx-auto h-auto">
        <div className="flex flex-col justify-center lg:flex-row gap-8">
          {/* left */}
          <div id="leftAnimate" className="text-white w-full lg:w-3/5">
            <h4 className="text-lg font-medium mb-6 text-transparent bg-clip-text gradient-color">
              Hi, my name is
            </h4>
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              Ho Quoc Thang
            </h2>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-400 mb-10">
              I build things for the web.
            </h2>
            <div className="w-full xl:w-[500px] mb-14">
              <p className="text-lg font-normal text-slate-400">
                Currently i&#10076;m learning advanced and in-depth knowledge
                about frontend and a bit about UI/UX. I&#10076;m focused on
                building a website that is fast in addition to having a
                beautiful, eye-catching layout.
              </p>
            </div>
            <button
              onClick={() => openPDF(resume)}
              type="button"
              className="gradient-color text-xl rounded-2xl px-6 py-4 font-medium hover:scale-105 transition-all duration-300"
            >
              Check out my resume.
            </button>
          </div>
          {/* right */}
          <div id="techImg" className="hidden lg:block lg:w-2/5">
            <Image
              src='/tech.svg'
              width={500}
              height={500}
              className="w-full h-auto"
              alt="tech stack"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
