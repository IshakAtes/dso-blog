import Layout from '@theme/Layout';
import { JSX } from 'react';
import { Nav } from '@site/src/components/Navbar/navbar';
import Hero from '@site/src/components/Hero/hero';
import Skills from '@site/src/components/Skills/skills';
import Projects from '@site/src/components/Projects/projects';
import Contact from '@site/src/components/Contact/contact';
import Footer from '@site/src/components/Footer/footer';

export default function Home(): JSX.Element {
  return (
      <main>
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
  );
}
