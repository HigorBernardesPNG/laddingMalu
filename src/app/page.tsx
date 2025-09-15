import HeroSection from '@/components/HeroSection';
import AreasSection from '@/components/AreasSection'
import SobreSection from '@/components/SobreSection';
import ContatoSection from '@/components/ContatoSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AreasSection />
      <SobreSection />
      <ContatoSection />
      <Footer />
    </main>
  );
}
