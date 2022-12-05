import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Recipes</title>
        <meta name="description" content="AI generated recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
