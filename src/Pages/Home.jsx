import About from "@/component/About";
import Contact from "@/component/Contact";

import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Skills from "@/component/Skills";
import Work from "@/component/Work";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default Home;
