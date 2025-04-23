import '../app/globals.css';

import { AppProps } from 'next/app';

const PortfolioWebsite = ({ Component, pageProps }: AppProps) => {
  return (
    <>

      <Component {...pageProps} />
    </>
  );
};

export default PortfolioWebsite;