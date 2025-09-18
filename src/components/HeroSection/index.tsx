'use client'; // Necessário para usar interações no App Router
import styles from './HeroSection.module.scss';
import IconButton from "../../assets/icons/iconButton.svg";
import LogoHero from "../../assets/icons/logoHeroSection.svg";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <LogoHero alt="Logo da advogada Maria Luiza Munhoz" className={styles.logoHero}/>
        <div>
          <p className={styles.title}>
            Advocacia objetiva, personalizada e eficiente
          </p>
          <p className={styles.subtitle}>
            Atendimento jurídico em diversas áreas, com foco na solução e no rigor técnico
          </p>
        </div>
        <button className={styles.ctaButton}>
          <IconButton alt="Um icone de um balão de bate-papo" className={styles.iconButton} />
          Solicitar consulta
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
