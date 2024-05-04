import { navItems } from "@/constants";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div
      id="header"
      className="bg-dark-bg py-10 2xl:px-10 container w-full mx-auto"
    >
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-white font-bold text-2xl">qthwngg_</h2>
        <div className="inline-flex items-center">
          <nav className="hidden lg:block text-white mr-4">
            {navItems.map((item) => (
              <Link
                className="px-8 font-medium text-xl"
                href={item.path}
                rel="nopeener"
                key={item.id}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden text-white lg:flex items-center gap-8">
            <Link href="#" target="_blank" className="text-xl hover:scale-105">
              <FaGithub />
            </Link>
            <Link href="#" target="_blank" className="text-xl hover:scale-105">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
