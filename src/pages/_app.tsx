import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { CacheProvider } from '@emotion/react';
import theme from '../lib/mui/theme';
import '../style/index.css';
import createEmotionCache from '../lib/mui/createEmotionCache';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';
import { StyledEngineProvider } from '@mui/material';
import gauNeedHelp from '../assets/img/gau-need-help.png';
import Image from 'next/image';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
type AppPropsWithCache = AppProps & {
  Component: NextPage;
  emotionCache?: EmotionCache;
};

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}: AppPropsWithCache) => {
  return (
    <StyledEngineProvider injectFirst>
      {/* <CacheProvider value={emotionCache}> */}
      {/* <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head> */}
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <Component {...pageProps} />
        <div className="need-help-box-home">
          <div className="need-help-image-home">
            <Image src={gauNeedHelp} />
          </div>
          <div className="need-help-text-home body">
            Precisa de <br />
            ajuda ?
          </div>
        </div>
      </ThemeProvider>
      {/* </CacheProvider> */}
    </StyledEngineProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
};
