'use client';
import { useState, useRef } from 'react';
import styles from './AreasSection.module.scss';
import IconButton from '../../assets/icons/iconButton.svg';
import Image from 'next/image';
import Link from 'next/link';


type Item = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

const items: Item[] = [
  {
    src: '/images/direitoCivil.svg',
    alt: 'Uma imagem representando o Direito Civil',
    title: 'Direito Civil',
    text: 'Contratos, cobranças, indenizações e outras demandas patrimoniais.',
  },
  {
    src: '/images/direitoDaFamilia.svg',
    alt: 'Uma imagem representando o Direito da Família',
    title: 'Direito de Família',
    text: 'Divórcios, guarda, pensão, união estável e regulamentação de visitas.',
  },
  {
    src: '/images/direitoDoConsumidor.svg',
    alt: 'Uma imagem representando o Direito do Consumidor',
    title: 'Direito do Consumidor',
    text: 'Defesa em compras com defeito, cobranças indevidas e serviços mal prestados.',
  },
  {
    src: '/images/direitoTrabalhista.svg',
    alt: 'Uma imagem representando o Direito Trabalhista',
    title: 'Direito Trabalhista',
    text: 'Ações de vínculo, verbas rescisórias, horas extras e acidentes de trabalho.',
  },
  {
    src: '/images/direitoDigitalELGPD.svg',
    alt: 'Uma imagem representando o Direito Digital e LGPD',
    title: 'Direito Digital e LGPD',
    text: 'Proteção de dados e consultoria sobre privacidade digital.',
  },
  {
    src: '/images/outrasAreas.svg',
    alt: 'Uma imagem representando outras áreas do Direito',
    title: 'Outras Áreas',
    text: 'Atuação em outras áreas do Direito. Consulte para avaliar seu caso.',
  },
];

export default function AreasSection() {
  const [active, setActive] = useState(0);

  // navegação por clique
  const prev = () => setActive((i) => (i - 1 + items.length) % items.length);
  const next = () => setActive((i) => (i + 1) % items.length);

  // ===== Swipe (touch) =====
  const startXY = useRef<{ x: number; y: number } | null>(null);
  const isSwiping = useRef(false);
  const deltaX = useRef(0);
  const SWIPE_START_TOL = 10;   // px para decidir que é swipe e não tap
  const SWIPE_TRIGGER = 40;     // px para trocar o slide

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    startXY.current = { x: t.clientX, y: t.clientY };
    isSwiping.current = false;
    deltaX.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!startXY.current) return;
    const t = e.touches[0];
    const dx = t.clientX - startXY.current.x;
    const dy = t.clientY - startXY.current.y;

    // decide quando é swipe horizontal
    if (!isSwiping.current && Math.abs(dx) > SWIPE_START_TOL && Math.abs(dx) > Math.abs(dy)) {
      isSwiping.current = true;
    }

    if (isSwiping.current) {
      // evitar scroll da página durante o swipe horizontal
      e.preventDefault();
      deltaX.current = dx;
      // (opcional) você pode aplicar uma leve animação arrastando o card ativo com translateX
      // deixei sem para manter simples e estável
    }
  };

  const onTouchEnd = () => {
    if (isSwiping.current) {
      if (deltaX.current <= -SWIPE_TRIGGER) {
        // arrastou para a esquerda -> próximo
        next();
      } else if (deltaX.current >= SWIPE_TRIGGER) {
        // arrastou para a direita -> anterior
        prev();
      }
    }
    // reset
    startXY.current = null;
    isSwiping.current = false;
    deltaX.current = 0;
  };

  return (
    <section id="areasSection" className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.titleSection}>Áreas de Atuação</h1>

        {/* Mobile: 1 card ativo; Desktop: grade 3x2 com todos */}
        <div
          className={styles.cardsWrap}
          role="region"
          aria-label="Carrossel de áreas (mobile)"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {items.map((it, idx) => (
            <article
              key={it.title}
              className={`${styles.containerAreas} ${idx === active ? styles.isActive : styles.isInactive}`}
              aria-hidden={idx !== active}
              aria-label={it.title}
            >
              <Image src={it.src} alt={it.alt} width={88} height={40} priority />
              <p className={styles.title}>{it.title}</p>
              <p className={styles.paragraph}>{it.text}</p>
            </article>
          ))}
        </div>

        {/* Controles — apenas no mobile */}
        <div className={styles.controls} aria-hidden="true">
          <button
            className={`${styles.navBtn} ${styles.navBtnLeft}`}
            onClick={prev}
            type="button"
            aria-label="Anterior"
          >
            <svg viewBox="0 0 24 24" className={styles.navIcon} aria-hidden="true">
              <path d="M15.5 4.5L8 12l7.5 7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.dots}>
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Ir para ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={`${styles.navBtn} ${styles.navBtnRight}`}
            onClick={next}
            type="button"
            aria-label="Próximo"
          >
            <svg viewBox="0 0 24 24" className={styles.navIcon} aria-hidden="true">
              <path d="M8.5 4.5L16 12l-7.5 7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <Link href="#contatoSection">
          <button className={styles.ctaButton}>
            <IconButton alt="Um ícone de um balão de bate-papo" className={styles.iconButton} />
            Saiba mais
          </button>
        </Link>
      </div>
    </section>
  );
}
