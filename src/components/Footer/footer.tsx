import Link from '@docusaurus/Link';
import styles from './footer.module.css';

export default function Footer() {

    const scrollToTop = () => {
            window.scrollTo({
            top: 0,
            behavior: 'smooth',
            });
        };

    return (
        <section className={styles.footerSection}>
            <div
                className={styles.goUp}
                onClick={scrollToTop}
                role="button"
                aria-label="Scroll to top"
            ></div>
            <div className={styles.footerContent}>
                <span>© 2025 Ishak Ates. All rights reserved.</span>
                <Link to="/legal">Legal notice</Link>
            </div>

        </section>
    );
}