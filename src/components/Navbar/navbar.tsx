import { JSX } from 'react';
import styles from './navbar.module.css'
import './../../css/custom.css';

export function Nav(): JSX.Element {
  return (
    <section className={`${styles.navbar} globalPadding`}>
        <a href="./" className={styles.logo}>
            <img src="img/ishak_logo.png" alt="" />
            <span>AI</span>
        </a>
        <ul className={styles.navItems}>
            <li>
                <a href="docs/projects/overview">Docs</a>
            </li>
            {/* <li>
                <a href="blog">Blog</a>
            </li> */}
            <li>
                <a href="#contact-section">Contact</a>
            </li>
            <li>
                <a target='blank' href="https://github.com/IshakAtes/dso-blog.git">GitHub</a>
            </li>
        </ul>
    </section>
  );
}
