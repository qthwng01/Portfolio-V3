import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Preview from "@/components/preview";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-dark-bg relative w-full h-auto">
      <Header />
      <Preview />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
