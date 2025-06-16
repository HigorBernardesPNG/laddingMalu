'use client';
import styles from './Sobre.module.scss';
import Image from 'next/image';

const SobreSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <section>
            <div>
                <Image 
                    src="/images/logoComEscrita.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={240}
                    height={72}
                    priority
                />
                <div>
                    <Image 
                    src="/images/instagram.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={24}
                    height={24}
                    priority
                    />
                    <Image 
                    src="/images/linkedin.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={24}
                    height={24}
                    priority
                    />
                </div>
                <Image 
                    src="/images/escritaAdvogadaOAB.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={240}
                    height={18}
                    priority
                />
            </div>
            <div>
                <p className={styles.paragraph}>
                    Maria Luiza Munhoz é graduada em Direito pela Universidade Estadual de Mato Grosso do Sul (UEMS).
                    Possui formação complementar em Processo Civil pela Fundação Getulio Vargas (FGV), bem como em Direito Digital
                    e Lei Geral de Proteção de Dados (LGPD) pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS).
                    Inscrita na OAB/SP sob o nº 508.008, atua em todo o Brasil com responsabilidade e comprometimento na condução
                    de demandas jurídicas diversas, oferecendo soluções objetivas, seguras e alinhadas à ética profissional.
                </p>
            </div>
        </section>
        <section>
            <Image 
                    src="/images/fotoDaProfissional.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={240}
                    height={440}
                    priority
                />
        </section>
        
        
      </div>
      <button className={styles.ctaButton}>
        <Image 
        src="/images/iconButton.svg"
        alt="Logo da advogada Maria Luiza Munhoz"
        width={24}
        height={24}
        priority
        /> Saiba mais
        </button>
    </section>
  );
};

export default SobreSection;
