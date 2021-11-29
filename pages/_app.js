import '../styles/globals.css';
import { CacheProvider } from '@emotion/react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { SnackbarProvider } from 'notistack';
import createEmotionCache from '../utils/createEmotionCache';
import { StoreProvider } from '../utils/Store';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  // disabling the material ui style reset reset on refresh
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <StoreProvider>
          <PayPalScriptProvider deferLoading={true}>
            <Component {...pageProps} />
          </PayPalScriptProvider>
        </StoreProvider>
      </SnackbarProvider>
    </CacheProvider>
  );
}

export default MyApp;
