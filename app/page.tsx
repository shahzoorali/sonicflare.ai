import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StakeholderStrip from "@/components/StakeholderStrip";
import About from "@/components/About";
import ScrollStatement from "@/components/ScrollStatement";
import Capabilities from "@/components/Capabilities";
import EcosystemDiagram from "@/components/EcosystemDiagram";
import Timeline from "@/components/Timeline";
import Stats from "@/components/Stats";
import CtaBlock from "@/components/CtaBlock";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { capabilitiesAI, capabilitiesITParks } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StakeholderStrip />
        <About />
        <ScrollStatement />
        <Capabilities {...capabilitiesAI} />
        <Capabilities {...capabilitiesITParks} />
        <EcosystemDiagram />
        <Timeline />
        <Stats />
        <CtaBlock />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
