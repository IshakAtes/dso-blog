import { useEffect, useRef, useState } from 'react';
import styles from './selfDestruct.module.css';

const REDIRECT_URL = 'https://ishakates.com';
const MATRIX_CHARS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789';

type BreachStage = 'backdoor' | 'matrix' | 'access' | 'connecting';

// This page owns the redirect itself (same-tab navigation), so there's no
// popup-blocker timing constraint here, just pacing for the effect.
const STAGE_DURATIONS: Record<BreachStage, number> = {
  backdoor: 1100,
  matrix: 1500,
  access: 800,
  connecting: 800,
};

const STAGE_ORDER: BreachStage[] = ['backdoor', 'matrix', 'access', 'connecting'];

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const fontSize = 18;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.ceil(canvas.width / fontSize);
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

const SelfDestructSequence = () => {
  const [stage, setStage] = useState<BreachStage>('backdoor');

  useEffect(() => {
    if (stage === 'connecting') {
      const timer = window.setTimeout(() => {
        window.location.href = REDIRECT_URL;
      }, STAGE_DURATIONS.connecting);
      return () => window.clearTimeout(timer);
    }

    const nextStage = STAGE_ORDER[STAGE_ORDER.indexOf(stage) + 1];
    const timer = window.setTimeout(() => setStage(nextStage), STAGE_DURATIONS[stage]);
    return () => window.clearTimeout(timer);
  }, [stage]);

  return (
    <div className={styles.overlay} role="presentation">
      {stage === 'backdoor' && (
        <span className={`${styles.stageText} ${styles.alertColor}`}>BACKDOOR ACTIVATED</span>
      )}
      {stage === 'matrix' && <MatrixRain />}
      {stage === 'access' && (
        <span className={`${styles.stageText} ${styles.grantedColor}`}>ACCESS GRANTED</span>
      )}
      {stage === 'connecting' && (
        <span className={`${styles.stageText} ${styles.grantedColor}`}>ESTABLISHING CONNECTION...</span>
      )}
    </div>
  );
};

export default SelfDestructSequence;
