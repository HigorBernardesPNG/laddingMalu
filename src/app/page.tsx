import HeroSection from '@/components/HeroSection';
import AreasSection from '@/components/AreasSection'
import SobreSection from '@/components/SobreSection';
import ContatoSection from '@/components/ContatoSection';
import Footer from '@/components/Footer';
import Script from 'next/script';

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Maria Luiza Munhoz - Advocacia",
    "url": "https://ladding-malu-project.vercel.app",
    "logo": "https://ladding-malu-project.vercel.app/banner.jpg",
    "telephone": "+55-67-981182850",
    "email": "marialuizamunhoz@hotmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Três Lagoas",
      "addressRegion": "MS",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://www.instagram.com/marialumunhoz/?igsh=a3ZjZDhzZ3ZhZHht#",
      "https://www.linkedin.com/in/marialumunhoz?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    ],
    "areaServed": "Brasil",
    "description": "Atendimento jurídico em direito civil, família e consultoria preventiva."
  };

  return (
    <>
      <Script
        id="ld-legal-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {<main>
        <HeroSection/>
        <AreasSection />
        <SobreSection />
        <ContatoSection />
        <Footer />
      </main>}
    </>
  );
}

// export default function Home() {
//   return (
//     <main>
//       <HeroSection/>
//       <AreasSection />
//       <SobreSection />
//       <ContatoSection />
//       <Footer />
//     </main>
//   );
// }
