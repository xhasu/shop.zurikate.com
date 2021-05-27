import Head from 'next/head'
import Main from 'components/layouts/main'

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss'
import 'styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
	      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="stylesheet" href="/css/fonts.css"/>
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp
