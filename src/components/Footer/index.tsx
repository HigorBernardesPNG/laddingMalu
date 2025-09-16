'use client';
import styles from './Footer.module.scss';
import Image from 'next/image';  

const Footer = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.containerHero}>
            <p>
                © 2025 Maria Luiza Munhoz — Todos os direitos reservados.
            </p>
            <div className={styles.containerParagrafoImagem}>
                <Image
                    src="/images/logoComEscritaFooter.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={240}
                    height={40}
                    priority
                />
                    <p>
                        Este site tem caráter exclusivamente informativo e não configura publicidade ou promessa de resultado, conforme o Código de Ética da OAB.
                    </p>
            </div>
        </div>
    </section>
  );
};

export default Footer;
