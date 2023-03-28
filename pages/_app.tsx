import '../styles/globals.css';
import '../public/static/css/prism.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <DefaultSeo
          title="Dane Williams"
          titleTemplate="Dane Williams"
          description="Dane Williams is a software engineer in New York City."
          canonical="https://danewilliams.dev/"
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://danewilliams.dev/',
            siteName: 'Dane Williams',
          }}
          twitter={{
            handle: '@danerwilliams',
          }}
          additionalLinkTags={[]}
        />
        <SocialProfileJsonLd
          type="Person"
          name="Dane Williams"
          url="https://danewilliams.dev"
          sameAs={[
            'https://www.linkedin.com/in/danerwilliams',
            'https://twitter.com/danerwilliams',
            'https://github.com/danerwilliams',
            'https://instagram.com/_dane_williams',
          ]}
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
