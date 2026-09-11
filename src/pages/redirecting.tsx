import Head from '@docusaurus/Head';
import { JSX } from 'react';
import SelfDestructSequence from '@site/src/components/SelfDestructSequence';

export default function Redirecting(): JSX.Element {
  return (
    <>
      <Head>
        <title>Connecting...</title>
        <meta name="robots" content="noindex, nofollow" />
        <style>{'html, body { background: #000; margin: 0; }'}</style>
      </Head>
      <SelfDestructSequence />
    </>
  );
}
