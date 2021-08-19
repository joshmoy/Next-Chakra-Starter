import { Providers } from '../providers';

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
