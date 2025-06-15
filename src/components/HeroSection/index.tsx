'use client'; // Necessário para usar interações no App Router
import styles from './HeroSection.module.scss';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <Image
          src="/images/logoHeroSection.svg"
          alt="Logo da advogada Maria Luiza Munhoz"
          width={288}
          height={200}
          priority
        />
        <div>
          <p className={styles.title}>
            Advocacia objetiva, personalizada e eficiente
          </p>
          <p className={styles.subtitle}>
            Atendimento jurídico em diversas áreas, com foco na solução e no rigor técnico
          </p>
        </div>
        <button className={styles.ctaButton}>
          <Image 
          src="/images/iconButton.svg"
          alt="Logo da advogada Maria Luiza Munhoz"
          width={24}
          height={24}
          priority/> Solicitar consulta
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
