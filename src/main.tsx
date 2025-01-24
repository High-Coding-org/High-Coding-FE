import './index.css';

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AxiosError } from 'axios';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ToastProvider from './components/common/ToastProvider/ToastProvider';
import { useGlobalErrorStore } from './store/globalErrorStore';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: AxiosError) => {
      useGlobalErrorStore.getState().globalErrorOccur();

      switch (error.message) {
        case 'Network Error':
          useGlobalErrorStore
            .getState()
            .setGlobalErrorMsg('네트워크 에러가 발생했습니다');
          break;
        default:
          useGlobalErrorStore
            .getState()
            .setGlobalErrorMsg('정보를 불러오는데 실패했습니다');
          break;
      }
    },
  }),
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastProvider />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
