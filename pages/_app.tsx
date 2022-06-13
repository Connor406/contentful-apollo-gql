import { client } from '@/services';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import '@/styles/globals.scss';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Contenful Example</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
      <Navbar />
    </ApolloProvider>
  );
}

export default MyApp;
