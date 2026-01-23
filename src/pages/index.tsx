import Layout from '@theme/Layout';
import { JSX } from 'react';
import Hero from '@site/src/components/Hero/hero';
import Skills from '@site/src/components/Skills/skills';
import Projects from '@site/src/components/Projects/projects';
import Contact from '@site/src/components/Contact/contact';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Portfolio"
      description="DevSecOps · Backend · Cloud · Documentation"
    >
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </Layout>
  );
}
