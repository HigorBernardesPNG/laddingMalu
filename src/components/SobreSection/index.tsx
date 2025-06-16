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
                    src="/images/iconButton.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={24}
                    height={24}
                    priority
                />
                <div>
                    <Image 
                    src="/images/iconButton.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={24}
                    height={24}
                    priority
                    />
                    <Image 
                    src="/images/iconButton.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={24}
                    height={24}
                    priority
                    />
                </div>
                <Image 
                    src="/images/iconButton.svg"
                    alt="Logo da advogada Maria Luiza Munhoz"
                    width={24}
                    height={24}
                    priority
                />
            </div>
        </section>
        <section>

        </section>
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
  );
};

export default SobreSection;
