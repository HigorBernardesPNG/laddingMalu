'use client';
import styles from './AreasSection.module.scss';
import Image from 'next/image';

const AreasSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.titleSection}>
        Áreas de Atuação
        </h1>
        <section className={styles.containerAreasGlobal}>
            <div className={styles.containerAreas}>
                <Image
                    src="/images/direitoCivil.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={88}
                    height={40}
                    priority
                />
                <p className={styles.title}>Direito Civil</p>
                <p className={styles.paragraph}>Contratos, cobranças, indenizações e outras demandas patrimoniais.</p>
            </div>
            <div className={styles.containerAreas}>
                <Image
                    src="/images/direitoDaFamilia.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={88}
                    height={40}
                    priority
                />
                <p className={styles.title}>Direito de Família</p>
                <p className={styles.paragraph}>Divórcios, guarda, pensão, união estável e regulamentação de visitas.</p>
            </div>
            <div className={styles.containerAreas}>
                <Image
                    src="/images/direitoDoConsumidor.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={88}
                    height={40}
                    priority
                />
                <p className={styles.title}>Direito do Consumidor</p>
                <p className={styles.paragraph}>Defesa em compras com defeito, cobranças indevidas e serviços mal prestados.</p>
            </div>
            </section>
            <section className={styles.containerAreasGlobal}>
            <div className={styles.containerAreas}>
                <Image
                    src="/images/direitoTrabalhista.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={88}
                    height={40}
                    priority
                />
                <p className={styles.title}>Direito Trabalhista</p>
                <p className={styles.paragraph}>Ações de vínculo, verbas rescisórias, horas extras e acidentes de trabalho.</p>
            </div>
            <div className={styles.containerAreas}>
                <Image
                    src="/images/direitoDigitalELGPD.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={88}
                    height={40}
                    priority
                />
                <p className={styles.title}>Direito Digital e LGPD</p>
                <p className={styles.paragraph}>Proteção de dados e consultoria sobre privacidade digital.</p>
            </div>
            <div className={styles.containerAreas}>
                <Image
                    src="/images/outrasAreas.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={88}
                    height={40}
                    priority
                />
                <p className={styles.title}>Outras Áreas</p>
                <p className={styles.paragraph}>Atuação em outras áreas do Direito. Consulte para avaliar seu caso.</p>
            </div> 
        </section>
        <button className={styles.ctaButton}>
        <Image 
        src="/images/iconButton.svg"
        alt="Logo da advogada Maria Luiza Munhoz"
        width={24}
        height={24}
        priority/> Saiba mais
        </button>
        
      </div>
    </section>
  );
};

export default AreasSection;
