import '../styles/globals.css';
import '../public/static/css/prism.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  const description = 'Dane Williams is a software engineer in New York City.';
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <DefaultSeo
          titleTemplate="%s | Dane Williams"
          defaultTitle="Dane Williams"
          description={description}
          themeColor="#151718"
          canonical="https://danewilliams.com"
          openGraph={{
            title: 'Dane Williams',
            type: 'website',
            locale: 'en_US',
            url: 'https://danewilliams.com',
            siteName: 'Dane Williams',
            description,
          }}
          twitter={{
            handle: '@danerwilliams',
            cardType: 'summary_large_image',
          }}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/favicon.svg',
              type: 'image/svg+xml',
              sizes: 'any',
            },
          ]}
        />
        <SocialProfileJsonLd
          type="Person"
          name="Dane Williams"
          url="https://danewilliams.com"
          sameAs={[
            'https://linkedin.com/in/danerwilliams',
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
