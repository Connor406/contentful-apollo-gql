import { ApolloProvider } from '@apollo/client';
import client from '@/services/apollo';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;