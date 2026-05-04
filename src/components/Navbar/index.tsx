import { JSX } from 'react';
import styles from './navbar.module.css'
import './../../css/custom.css';
import { useState, useEffect } from 'react';

export function Nav(): JSX.Element {
    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (Math.abs(window.scrollY - lastScrollY) < 160) return;

            if (window.scrollY > lastScrollY) {
                // scroll down
                setIsVisible(false);
            } else {
                // scroll up
                setIsVisible(true);
            }

            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <section className={styles.sectionBackground}>
        <div className={`${styles.navbar} globalPadding ${!isVisible ? styles.hide : ''}`}>
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

        <div className={`${styles.mobileNav} ${!isVisible ? styles.hide : ''}`}>
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
                <li><a href="#hero-section" onClick={() => setIsOpen(false)}>About me</a></li>
                <li><a href="#skills-section" onClick={() => setIsOpen(false)}>My skills</a></li>
                <li><a href="#projects-section" onClick={() => setIsOpen(false)}>My projects</a></li>
                <li><a href="#contact-section" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </div>
    </section>
  );
}
