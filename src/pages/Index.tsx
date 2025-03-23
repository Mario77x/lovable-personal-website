
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <MainLayout>
      <Helmet>
        <meta property="og:title" content="Mario Savi | Lead Product Manager" />
        <meta property="og:description" content="Passionate about product" />
      </Helmet>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </MainLayout>
  );
};

export default Index;
