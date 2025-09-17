'use client';
import styles from './ContatoSection.module.scss';
import IconButton from "../../assets/icons/iconButton.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import Image from 'next/image';

const ContatoSection = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.containerAreasGlobal}> 
            <div className={styles.containerAreaSolicitarAtendimento}>

                <p> Para dúvidas iniciais, agendamento de consultas ou início do atendimento jurídico, entre em contato diretamente pelo WhatsApp. O primeiro passo para a solução do seu caso pode começar com uma conversa segura e orientada. </p>
                <button className={styles.ctaButton}>
                    <IconButton alt="Um icone de um balão de bate-papo" className={styles.iconButton} />
                    Solicitar atendimento
                </button>

            </div>
            <div className={styles.containerAreaContatos}>
                <Image
                    src="/images/logoComEscritaPretos.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={240}
                    height={180}
                    priority
                />

                <div className={styles.containerAreaContatosEmails}>
                    <p> (67) 98118-2850 </p>
                    <p> marialuizamunhoz@hotmail.com </p>
                </div>

                <div className={styles.containerButtonsRedesSociais}>
                        <LinkedinIcon alt="Logo do Linkedin" className={styles.iconSociais} />
                        <InstagramIcon alt="Logo do Instagram" className={styles.iconSociais} />
                </div>

            </div>
        </div>
    </section>
  );
};

export default ContatoSection;
