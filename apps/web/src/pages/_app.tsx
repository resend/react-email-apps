import '../styles/globals.css';
import 'design-system/styles.css';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Head>
        <title>
          React Email — A collection of high-quality, unstyled components for
          creating beautiful emails.
        </title>
        <link rel="icon" href="/static/favicon.ico" sizes="any" />
        <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
