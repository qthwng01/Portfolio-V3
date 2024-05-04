import { IoArrowUpCircleOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div id="footer" className="md:pt-[1rem] lg:pt-[1.5rem]">
      <div className="pt-[12rem] pb-6 2xl:px-10 container w-full mx-auto h-auto relative">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <a href="#header" title="Back to top">
            <IoArrowUpCircleOutline
              fill="none"
              className="text-white size-16 animate-bounce"
            />
          </a>
        </div>
        <div className="mt-[2rem] lg:mt-0 text-white flex flex-col justify-center text-center lg:flex-row items-center lg:justify-between gap-5 lg:gap-0">
          <p>
            &copy; Design and dev by{" "}
            <strong className="text-transparent bg-clip-text gradient-color">
              qthwngg_
            </strong>
          </p>
          <p>
            Built with{" "}
            <strong className="text-transparent bg-clip-text gradient-color">
              NextJS,{" "}
            </strong>
            <strong className="text-transparent bg-clip-text gradient-color">
              TailwindCSS,{" "}
            </strong>
            <strong className="text-transparent bg-clip-text gradient-color">
              Sanity.{" "}
            </strong>
            Deloyed with{" "}
            <strong className="text-transparent bg-clip-text gradient-color">
              Vercel
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
