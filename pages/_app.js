import { Fragment } from 'react';
import Navbar from '../components/layout/Navbar';
import { AuthProvider } from '../context/AuthContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthProvider>
    </Fragment>
  );
}

export default MyApp;
