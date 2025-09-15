'use client';
import styles from './ContatoSection.module.scss';
import Image from 'next/image';

const ContatoSection = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.containerAreasGlobal}> 
            <div className={styles.containerAreaSolicitarAtendimento}>

                <p> Para dúvidas iniciais, agendamento de consultas ou início do atendimento jurídico, entre em contato diretamente pelo WhatsApp. O primeiro passo para a solução do seu caso pode começar com uma conversa segura e orientada. </p>
                <button className={styles.ctaButton}>
                <Image 
                    src="/images/iconButton.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={24}
                    height={24}
                    priority/> Saiba mais
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

                <p> jlmvendas@hotmail.com </p>
                <p> marialuizamunhoz@hotmail.com </p>

                <div>
                    <button>
                        <Image
                            src="/images/botoesLinkedinAreaContato.svg"
                            alt="Logo da advogada Maria Luiza Munhoz"
                            width={40}
                            height={40}
                            priority
                        />
                    </button>
                    <button>
                        <Image
                            src="/images/botoesInstagramAreaContato.svg"
                            alt="Logo da advogada Maria Luiza Munhoz"
                            width={40}
                            height={40}
                            priority
                        />
                    </button>
                </div>

            </div>
        </div>
    </section>
  );
};

export default ContatoSection;
