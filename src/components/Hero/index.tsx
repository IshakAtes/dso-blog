import type { CSSProperties, MouseEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './hero.module.css';
import './../../css/custom.css';

const PIXELATE_RESOLUTION = { width: 44, height: 60 };
const REDIRECT_URL = 'https://ishakates.com';
const MATRIX_CHARS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789';

type DestructStage = 'idle' | 'destruct' | 'matrix' | 'reboot';

const STAGE_DURATIONS: Record<Exclude<DestructStage, 'idle'>, number> = {
  destruct: 1300,
  matrix: 2200,
  reboot: 1500,
};

const GlitchStreaks = () => (
  <span className={styles.glitchStreaks} aria-hidden="true">
    <span className={`${styles.streak} ${styles.streak1}`} />
    <span className={`${styles.streak} ${styles.streak2}`} />
    <span className={`${styles.streak} ${styles.streak3}`} />
    <span className={`${styles.streak} ${styles.streak4}`} />
    <span className={`${styles.streak} ${styles.streak5}`} />
    <span className={`${styles.streak} ${styles.streak6}`} />
  </span>
);

const GlitchTear = ({ style }: { style: CSSProperties }) => (
  <span className={styles.glitchTear} style={style} aria-hidden="true">
    <span className={`${styles.tearSlice} ${styles.tearSlice1}`} />
    <span className={`${styles.tearSlice} ${styles.tearSlice2}`} />
    <span className={`${styles.tearSlice} ${styles.tearSlice3}`} />
    <span className={`${styles.tearSlice} ${styles.tearSlice4}`} />
    <span className={`${styles.tearSlice} ${styles.tearSlice5}`} />
  </span>
);

const GlitchPixelate = ({ imgUrl }: { imgUrl: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = imgUrl;
  }, [imgUrl]);

  return (
    <span className={styles.glitchPixelate} aria-hidden="true">
      <canvas
        ref={canvasRef}
        width={PIXELATE_RESOLUTION.width}
        height={PIXELATE_RESOLUTION.height}
        className={styles.pixelateCanvas}
      />
    </span>
  );
};

const GlitchBlackout = () => <span className={styles.glitchBlackout} aria-hidden="true" />;

const GlitchWarningLabel = () => (
  <span className={styles.glitchWarning} aria-hidden="true">
    <span className={styles.warningAlert}>⚠ WARNING ⚠</span>
    <span className={styles.glitchWarningText} data-text="DON'T CLICK">
      DON&apos;T CLICK
    </span>
  </span>
);

const GlitchBackdoorTag = () => (
  <span className={styles.backdoorTag} aria-hidden="true">
    BACKDOOR → ishakates.com
  </span>
);

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const fontSize = 18;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.ceil(canvas.width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -50);
    };
    resize();
    window.addEventListener('resize', resize);

    let frameId: number;
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      drops.forEach((y, i) => {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        ctx.fillStyle = Math.random() > 0.95 ? '#c8ffe0' : '#00ff6a';
        ctx.fillText(char, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i] = y + 1;
        }
      });
      frameId = requestAnimationFrame(draw);
    };
    frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.matrixCanvas} />;
};

const SelfDestructOverlay = ({ stage }: { stage: DestructStage }) => {
  if (stage === 'idle') return null;

  return (
    <div className={styles.selfDestructOverlay} role="presentation">
      {stage === 'destruct' && (
        <span className={styles.selfDestructText}>SELF-DESTRUCT</span>
      )}
      {stage === 'matrix' && <MatrixRain />}
      {stage === 'reboot' && <span className={styles.rebootText}>SERVER REBOOT</span>}
    </div>
  );
};

const GlitchErrorText = () => (
  <span className={styles.glitchErrorText} aria-hidden="true">
    <span className={`${styles.errorLabel} ${styles.errorLabelBig}`}>404</span>
    <span className={`${styles.errorLabel} ${styles.errorLabel1}`}>ERROR</span>
    <span className={`${styles.errorLabel} ${styles.errorLabel3}`}>ERROR</span>
    <span className={`${styles.errorLabel} ${styles.errorLabel4}`}>ERROR</span>
    <span className={`${styles.errorLabel} ${styles.errorLabel5}`}>ERROR</span>
  </span>
);

const Hero = () => {
  const heroImgUrl = useBaseUrl('img/heroIshak.jpg');
  const glitchStyle = { '--glitch-img': `url(${heroImgUrl})` } as CSSProperties;
  const [destructStage, setDestructStage] = useState<DestructStage>('idle');

  useEffect(() => {
    if (destructStage === 'idle') return undefined;

    if (destructStage === 'reboot') {
      const timer = window.setTimeout(() => {
        window.open(REDIRECT_URL, '_blank', 'noopener,noreferrer');
        setDestructStage('idle');
      }, STAGE_DURATIONS.reboot);
      return () => window.clearTimeout(timer);
    }

    const nextStage: DestructStage = destructStage === 'destruct' ? 'matrix' : 'reboot';
    const timer = window.setTimeout(() => setDestructStage(nextStage), STAGE_DURATIONS[destructStage]);
    return () => window.clearTimeout(timer);
  }, [destructStage]);

  const handleGlitchClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setDestructStage((current) => (current === 'idle' ? 'destruct' : current));
  }, []);

  return (
    <section id="hero-section" className={styles.hero}>
      <div className={`${styles.container} globalPadding`}>
        <div className={styles.heroTextContainer}>
            <span className={styles.greetText}>Hey there. <span className={styles.wave}>👋</span> I am</span>
            <h1 className={styles.heroName}>Ishak Ates</h1>
            <span className={styles.role}>DevSecOps Engineer</span>

            {/* Mobile view */}
            <a
              className={styles.glitchWrapper}
              style={glitchStyle}
              href="https://ishakates.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit ishakates.com"
              onClick={handleGlitchClick}
            >
              <GlitchStreaks />
              <GlitchTear style={glitchStyle} />
              <GlitchPixelate imgUrl={heroImgUrl} />
              <GlitchBlackout />
              <GlitchErrorText />
              <GlitchWarningLabel />
              <GlitchBackdoorTag />
              <span className={styles.glitchClip}>
                <img className={styles.heroImageMobile} src={heroImgUrl} alt="hero-image" />
              </span>
            </a>

            <p className={styles.aboutMe}>I am a DevSecOps-focused developer with a strong interest in automation, security, and modern infrastructure. This portfolio documents my projects, technical experiments, and continuous learning journey in software development and operations.</p>

            <a className={styles.btn1} href="#contact-section">Contact me</a>
        </div>
        <div className={styles.heroImageContainer}>
            {/* Desktop view */}
            <a
              className={styles.glitchWrapper}
              style={glitchStyle}
              href="https://ishakates.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit ishakates.com"
              onClick={handleGlitchClick}
            >
              <GlitchStreaks />
              <GlitchTear style={glitchStyle} />
              <GlitchPixelate imgUrl={heroImgUrl} />
              <GlitchBlackout />
              <GlitchErrorText />
              <GlitchWarningLabel />
              <GlitchBackdoorTag />
              <span className={styles.glitchClip}>
                <img className={styles.heroImage} src={heroImgUrl} alt="hero-image" />
              </span>
            </a>
        </div>

      </div>
      <SelfDestructOverlay stage={destructStage} />
    </section>
  );
};

export default Hero;
