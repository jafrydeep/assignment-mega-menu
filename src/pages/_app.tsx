import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '@/store/configureStore';
import './dropdown.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `https://devapiv2.walcart.com/graphql`,
  cache: new InMemoryCache(),
});

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default wrapper.withRedux(WrappedApp);
