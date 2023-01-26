import '../styles/globals.css';
import '../public/static/css/prism.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
