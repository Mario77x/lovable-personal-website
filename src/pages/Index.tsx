
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </MainLayout>
  );
};

export default Index;
