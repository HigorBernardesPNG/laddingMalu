'use client';
import styles from './Sobre.module.scss';
import Image from 'next/image';

const SobreSection = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.container}>
            <section>
                <div className={styles.containerSobre}>
                    <div className={styles.containerLogoERedesSociais}>
                        <Image 
                            src="/images/logoComEscrita.svg"
                            alt="Logo da advogada Maria Luiza Munhoz"
                            width={240}
                            height={72}
                            priority
                        />
                        <div className={styles.containerRedesSocias}>
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
                    </div>
                    <Image 
                        src="/images/escritaAdvogadaOAB.svg"
                        alt="Logo da advogada Maria Luiza Munhoz"
                        width={240}
                        height={18}
                        priority
                    />
                </div>
                <div className={styles.containerSobreTexto}>
                    <p className={styles.paragraph}>
                        Maria Luiza Munhoz é graduada em Direito pela Universidade Estadual de Mato Grosso do Sul (UEMS).
                        Possui formação complementar em Processo Civil pela Fundação Getulio Vargas (FGV), bem como em Direito Digital
                        e Lei Geral de Proteção de Dados (LGPD) pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS).
                        Inscrita na OAB/SP sob o nº 508.008, atua em todo o Brasil com responsabilidade e comprometimento na condução
                        de demandas jurídicas diversas, oferecendo soluções objetivas, seguras e alinhadas à ética profissional.
                    </p>
                </div>
                <div className={styles.containerButton}>
                    <button className={styles.ctaButton}>
                        <Image 
                        src="/images/iconButton.svg"
                        alt="Logo da advogada Maria Luiza Munhoz"
                        width={24}
                        height={24}
                        priority
                        /> Saiba mais
                    </button>
                </div>
            </section>
            <section>
                <Image className={styles.imagemMariaLuzia}
                        src="/images/fotoDaProfissional.svg"
                        alt="Logo da advogada Maria Luiza Munhoz"
                        width={380}
                        height={480}
                        priority
                    />
            </section>
        </div>
    </section>
  );
};

export default SobreSection;
