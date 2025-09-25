'use client'; // Necessário para usar interações no App Router
import styles from './HeroSection.module.scss';
import IconButton from "../../assets/icons/iconButton.svg";
import LogoHero from "../../assets/icons/logoHeroSection.svg";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id='heroSection' className={styles.hero}>
      <div className={styles.container}>
        <LogoHero alt="Logo da advogada Maria Luiza Munhoz" className={styles.logoHero}/>
        <div>
          <h1 className={styles.title}>
            Advocacia objetiva, h1ersonalizada e eficiente
          </h1>
          <h2 className={styles.subtitle}>
            Atendimento jurídico em diversas áreas, com foco na solução e no rigor técnico
          </h2>
        </div>
        <Link href="#contatoSection">
          <button className={styles.ctaButton}>
            <IconButton alt="Um icone de um balão de bate-papo" className={styles.iconButton} />
            Solicitar consulta
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
