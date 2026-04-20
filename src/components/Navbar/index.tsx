import { JSX } from 'react';
import styles from './navbar.module.css'
import './../../css/custom.css';
import { useState } from 'react';

export function Nav(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <section className={`${styles.sectionBackground} globalPadding`}>
        <div className={styles.navbar}>
            <a href="./" className={styles.logo}>
                <img src="img/ishak_logo.png" alt="" />
                <span>AI</span>
            </a>
            <ul className={styles.navItems}>
                <li>
                    <a href="#hero-section">About me</a>
                </li>
                {/* <li>
                    <a href="docs/projects/overview">Docs</a>
                </li> */}
                {/* <li>
                    <a href="blog">Blog</a>
                </li> */}
                <li>
                    <a href="#skills-section">My Skills</a>
                </li>
                <li>
                    <a href="#projects-section">My projects</a>
                </li>
                <li>
                    <a href="#contact-section">Contact</a>
                </li>
                {/* <li>
                    <a target='blank' href="https://github.com/IshakAtes/dso-blog.git">GitHub</a>
                </li> */}
            </ul>
        </div>

        <div className={styles.mobileNav}>
            <a href="./" className={styles.logo}>
                <img src="img/ishak_logo.png" alt="" />
                <span>AI</span>
            </a>

            {/* Der Burger-Button */}
            <div 
                className={`${styles.burger} ${isOpen ? styles.active : ''}`} 
                onClick={toggleMenu}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>

            {/* Die eigentliche Navigationsliste */}
            <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                <li><a href="/dso-blog/" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="#skills-section" onClick={() => setIsOpen(false)}>Skills</a></li>
                <li><a href="#contact-section" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </div>
    </section>
  );
}
