import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import AboutMe from "./About";
import Skills from "../components/Skills";
export default function Home(){
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills/>
      <Portfolio />
      <Contact />
    </>
  );
}
