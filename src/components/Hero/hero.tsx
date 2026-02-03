import styles from './Hero.module.css';
import './../../css/custom.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} globalPadding`}>
      <div className={styles.container}>
        <div className={styles.heroTextContainer}>
            <span className={styles.greetText}>Hey there. 👋 I am</span>
            <h1 className={styles.heroName}>Ishak Ates</h1>
            <span className={styles.role}>DevSecOps Engineer</span>

            {/* Mobile view */}
            <img className={styles.heroImageMobile} src="img/heroIshak.jpg" alt="hero-image" />

            <p className={styles.aboutMe}>I am a DevSecOps-focused developer with a strong interest in automation, security, and modern infrastructure. This portfolio documents my projects, technical experiments, and continuous learning journey in software development and operations.</p>

            <button className={styles.btn1}>Contact me</button>
        </div>
        <div className={styles.heroImageContainer}>
            {/* Desktop view */}
            <img className={styles.heroImage} src="img/heroIshak.jpg" alt="hero-image" />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
