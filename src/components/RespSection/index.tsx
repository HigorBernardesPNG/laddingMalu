'use client'; // Necessário para usar interações no App Router
import styles from './RespSection.module.scss';
// import IconButton from "../../assets/icons/iconButton.svg";
// import LogoHero from "../../assets/icons/logoRespSection.svg";
import Link from 'next/link';

const RespSection = () => {
  return (
    <section id='RespSection' className={styles.hero}>
      <div className={styles.container}>
        {/* <LogoHero alt="Logo da advogada Maria Luiza Munhoz" className={styles.logoHero}/> */}
        <div>
          <h1 className={styles.title}>
            Soluções jurídicas para você
          </h1>
          <h2 className={styles.subtitle}>
            Especializada em oferecer suporte juridico com compromisso e excelência.
          </h2>
        </div>
        <Link href="#contatoSection">
          <button className={styles.ctaButton}>
            {/* <IconButton alt="Um icone de um balão de bate-papo" className={styles.iconButton} /> */}
            Solicitar consulta
          </button>
        </Link>
      </div>
    </section>
  );
};

export default RespSection;
