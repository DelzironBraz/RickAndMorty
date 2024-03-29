import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App.tsx'
import store from './utils/redux/store.ts';

import './index.css'
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
