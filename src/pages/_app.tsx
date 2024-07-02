import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';

import AuthenticationContext from '@/hooks/use-authentication/authentication-context';
import ToastContextProvider from '@/hooks/use-toast/toast-context';

import '@/styles/reset.scss';
import '@/styles/typography.scss';
import '@/styles/global-styles.scss';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticationContext>
        <ToastContextProvider>
          <Component {...pageProps} />
        </ToastContextProvider>
      </AuthenticationContext>
    </QueryClientProvider>
  );
}
