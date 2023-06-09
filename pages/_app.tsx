import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { BigLeaderboard } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <BigLeaderboard />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
