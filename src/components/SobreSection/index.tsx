'use client';
import styles from './Sobre.module.scss';
import IconButton from "../../assets/icons/iconButton.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import Image from 'next/image';
import Link from 'next/link';

// -------------------INSTAGRAM/LINKEDIN------------------------

const urlInstagram = `https://www.instagram.com/marialumunhoz?igsh=a3ZjZDhzZ3ZhZHht`;
const urlLinkedin = `https://www.linkedin.com/in/marialumunhoz?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`;

// -------------------------------------------------------------

const SobreSection = () => {
  return (
    <section id='sobreSection' className={styles.hero}>
        <div className={styles.container}>
            <section className={styles.containerSobreCaixa}>
                <div className={styles.containerSobre}>
                    <div className={styles.containerLogoERedesSociais}>                      <Image 
                            src="/images/logoComEscrita.svg"
                            alt="Logo da advogada Maria Luiza Munhoz"
                            width={240}
                            height={72}
                            priority
                        />
                        <div className={styles.containerRedesSocias}>
                            <a
                                href= {urlInstagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstagramIcon alt="Logo do Instagram" className={styles.iconSociais}/> 
                            </a>
                            <a
                                href= {urlLinkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                 <LinkedinIcon alt="Logo do Linkedin" className={styles.iconSociais}/> 
                            </a>
                        </div>
                    </div>
                    <Image 
                        src="/images/escritaAdvogadaOAB.svg"
                        alt="OAB da advogada Maria Luiza Munhoz"
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
                    <Link href="#contatoSection">
                        <button className={styles.ctaButton}>
                            <IconButton alt="Um icone de um balão de bate-papo" className={styles.iconButton} />
                            Agendar atendimento
                        </button>
                    </Link>
                </div>
            </section>
            <section>
                <Image className={styles.imagemMariaLuzia}
                        src="/images/fotoDaProfissional.svg"
                        alt="Foto da advogada Maria Luiza Munhoz em pé em um fundo cinza minimalista. Ela está sorrindo, com cabelos solto e roupas escuras."
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
