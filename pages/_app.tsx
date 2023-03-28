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
          title="Dane Williams"
          description={description}
          canonical="https://danewilliams.dev"
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://danewilliams.dev',
            siteName: 'Dane Williams',
            description,
          }}
          twitter={{
            handle: '@danerwilliams',
          }}
          additionalLinkTags={[
            { rel: 'manifest', href: '/favicon/site.webmanifest' },
            {
              rel: 'apple-touch-icon',
              type: 'image/png',
              sizes: '180x180',
              href: '/favicon/apple-touch-icon.png',
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: '/favicon/favicon-32x32.png',
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: '/favicon/favicon-16x16.png',
            },
          ]}
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
