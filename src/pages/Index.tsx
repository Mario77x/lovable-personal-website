
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title to match meta tags
    document.title = "Mario Savi | Product leadership";
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Mario Savi | Product leadership</title>
        <meta name="description" content="Passionate about product" />
        <meta property="og:title" content="Mario Savi | Product Leader" />
        <meta property="og:description" content="Passionate about product" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mario Savi | Product Leader" />
        <meta name="twitter:description" content="Passionate about product" />
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
