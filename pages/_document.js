import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-M3X677F');`}} />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10964336005"></script>
          <script src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"></script>
	        <link rel="icon" href="favicon.ico?v=zurikate#1.0.0" />
          <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
	        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
          <link rel="stylesheet" href="/css/fonts.css"/>

          <meta property="og:image" content="/images/share.png" />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.goo\admingletagmanager.com/ns.html?id=GTM-M3X677F" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument