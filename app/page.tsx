import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhySection from "@/components/WhySection";
import EcosystemDiagram from "@/components/EcosystemDiagram";
import Capabilities from "@/components/Capabilities";
import Timeline from "@/components/Timeline";
import Stats from "@/components/Stats";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { capabilitiesAI, capabilitiesITParks } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhySection />
        <EcosystemDiagram />
        <Capabilities {...capabilitiesAI} />
        <Capabilities {...capabilitiesITParks} />
        <Timeline />
        <Stats />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
