import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

import reportWebVitals from 'reportWebVitals';
import App from 'components/App';
import { store } from './redux/configureStore';
import 'index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);
// 806989947220-inmoo1livtl9a34j7opikdqsb106a50h.apps.googleusercontent.com  //google client Id
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="806989947220-inmoo1livtl9a34j7opikdqsb106a50h.apps.googleusercontent.com">
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
