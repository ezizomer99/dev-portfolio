import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </div>
  )
}
