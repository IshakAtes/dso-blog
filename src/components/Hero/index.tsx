import type { CSSProperties } from 'react';
import { useEffect, useRef } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './hero.module.css';
import './../../css/custom.css';

const PIXELATE_RESOLUTION = { width: 44, height: 60 };

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
            >
              <GlitchStreaks />
              <GlitchTear style={glitchStyle} />
              <GlitchPixelate imgUrl={heroImgUrl} />
              <GlitchBlackout />
              <GlitchErrorText />
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
            >
              <GlitchStreaks />
              <GlitchTear style={glitchStyle} />
              <GlitchPixelate imgUrl={heroImgUrl} />
              <GlitchBlackout />
              <GlitchErrorText />
              <span className={styles.glitchClip}>
                <img className={styles.heroImage} src={heroImgUrl} alt="hero-image" />
              </span>
            </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
