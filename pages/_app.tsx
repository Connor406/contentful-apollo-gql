import { client } from '@/services';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import '@/styles/globals.scss';
import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <Navbar />
    </ApolloProvider>
  );
}

export default MyApp;
