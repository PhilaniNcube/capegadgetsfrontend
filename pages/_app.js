import { Fragment } from 'react';
import { NavProvider } from '../context/NavContext';
import Navbar from '../components/layout/Navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
