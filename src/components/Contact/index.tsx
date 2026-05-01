import styles from './contact.module.css';
import './../../css/custom.css';

export default function Contact() {
    return (

        <section id="contact-section" className={styles.contactSection}>

            <div className={`${styles.contactContainer} globalPadding`}>
                <div className={styles.firstRow}>
                    <h2 className={styles.contactTitle}>Contact me</h2>
                    <span>Looking forward to hearing from you!</span>
                </div>
                <div className={styles.secondRow}>
                    <div className={styles.contactDescription}>
                        <p>I’m a Junior DevSecOps engineer focused on containers, automation, and secure systems.
                            I’m continuously learning and applying best practices to build reliable and secure workflows.</p>
                        <p>I am open to full-time on-site, hybrid, or remote positions within international or EU-based teams. Feel free to reach out to discuss potential collaboration.</p>
                    </div>
                    <div className={styles.contactMethods}>
                        <span>Looking forward to hearing from you!</span>
                        <a href="mailto:contact@ishakates.com">
                            <img src="img/mailIcon.png" alt="mail Icon" />
                            <span>contact@ishakates.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/ishak-ates/" target="_blank" rel="noopener noreferrer">
                            <img src="img/linkedInIcon.png" alt="linkedIn Icon" />
                            <span>My LinkedIn</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
