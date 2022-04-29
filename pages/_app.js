import Head from 'next/head'
import Main from 'components/layouts/main'

import 'react-modal-video/scss/modal-video.scss'
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss'
import 'styles/main.scss'
import 'node-snackbar/dist/snackbar.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp
