import Layout from '@theme/Layout';
import Hero from '@site/src/components/Hero/hero';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Portfolio"
      description="DevSecOps · Backend · Cloud · Documentation"
    >
      <main>
        <Hero />
        {/* Weitere Portfolio-Sektionen kommen hier rein */}
        {/* <Projects /> */}
        {/* <Skills /> */}
        {/* <Contact /> */}
      </main>
    </Layout>
  );
}
