import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import { FooterBoxes } from '@/components/FooterBoxes';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection/ProjectSection';
import SkilsSection from '@/components/Skills/SkilsSection';
import { NavbarComponents } from '@/components/elements/Navbar/NavbarComponents';

export default function Home() {
  return (
    <main>
      <NavbarComponents />
      <HeroSection />
      {/* <HeroParallaxDe /> */}
      <div className="space-y-20 md:space-y-44">
        <AboutSection />
        <ProjectSection />
        <SkilsSection />
        <ContactSection />
        {/* <Footer /> */}
        <FooterBoxes />
      </div>
    </main>
  );
}
