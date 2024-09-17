import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import {Provider} from 'react-redux';

import {configureStore} from '@reduxjs/toolkit';

import burger from '../reducers/burger';

const store = configureStore({
  reducer:{burger},
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>React-Project</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
