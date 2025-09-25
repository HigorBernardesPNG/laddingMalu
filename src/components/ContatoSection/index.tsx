'use client';
import styles from './ContatoSection.module.scss';
import IconButton from "../../assets/icons/iconButton.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import Image from 'next/image';

// -------------------WHATSAPP------------------------
const message = "Olá, encontrei seu site e gostaria de mais informações sobre o atendimento jurídico.";
const phone = "556781182850";

const urlWhatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
// ---------------------------------------------------

// -------------------INSTAGRAM/LINKEDIN------------------------

const urlInstagram = `https://www.instagram.com/marialumunhoz?igsh=a3ZjZDhzZ3ZhZHht`;
const urlLinkedin = `https://www.linkedin.com/in/marialumunhoz?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`;

// -------------------------------------------------------------

const ContatoSection = () => {
  return (
    <section id='contatoSection' className={styles.hero}>
        <div className={styles.containerAreasGlobal}> 
            <div className={styles.containerAreaSolicitarAtendimento}>

                <p> Para dúvidas iniciais, agendamento de consultas ou início do atendimento jurídico, entre em contato diretamente pelo WhatsApp. O primeiro passo para a solução do seu caso pode começar com uma conversa segura e orientada. </p>
                <a
                    href= {urlWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className={styles.ctaButton}>
                        <IconButton alt="Um icone de um balão de bate-papo" className={styles.iconButton} />
                        Solicitar atendimento
                    </button>
                </a>

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
                    <a
                        href= {urlLinkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedinIcon alt="Logo do Linkedin" className={styles.iconSociais} />
                    </a>
                    <a
                        href= {urlInstagram}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon alt="Logo do Instagram" className={styles.iconSociais} />
                    </a>
                </div>

            </div>
        </div>
    </section>
  );
};

export default ContatoSection;
