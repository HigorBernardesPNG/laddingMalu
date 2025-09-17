'use client';
import styles from './AreasSection.module.scss';
import IconButton from "../../assets/icons/iconButton.svg";
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
                    alt="Uma imagem representando o Direito Civil"
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
                    alt="Uma imagem representando o Direito da Familia"
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
                    alt="Uma imagem representando o Direito do Consumidor"
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
                    alt="Uma imagem representando o Direito Trabalhista"
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
                    alt="Uma imagem representando o Direito Digital"
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
                    alt="Uma imagem representando outras areas do direito"
                    width={88}
                    height={40}
                    priority
                />
                <p className={styles.title}>Outras Áreas</p>
                <p className={styles.paragraph}>Atuação em outras áreas do Direito. Consulte para avaliar seu caso.</p>
            </div> 
        </section>
        <button className={styles.ctaButton}>
            <IconButton alt="Um icone de um balão de bate-papo" className={styles.iconButton} />
            Saiba mais
        </button>
        
      </div>
    </section>
  );
};

export default AreasSection;
