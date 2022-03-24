import Layout from '../components/layout/layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="디스크립션 헤드" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
