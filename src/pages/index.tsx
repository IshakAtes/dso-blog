import Layout from '@theme/Layout';
import { JSX } from 'react';
import { Nav } from '@site/src/components/Navbar';
import Hero from '@site/src/components/Hero';
import Skills from '@site/src/components/Skills';
import Projects from '@site/src/components/Projects';
import Contact from '@site/src/components/Contact';
import Footer from '@site/src/components/Footer';

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
