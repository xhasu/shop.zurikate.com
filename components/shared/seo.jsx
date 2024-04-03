import React from 'react'
import Head from 'next/head'

const Seo = () => {

  const schema = ``;

  return (
    <Head>
      <title>Zurikate - Skins for wheels</title>

      <meta name="author" content="Zurikate" />
	    <meta name="description" content="Zurikate skins for wheels" />
      <meta name="keywords" content="Wheels" />

      <meta property="og:title" content="Zurikate" />
      <meta property="og:description" content="Zurikate - Skins for wheels" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />

      <script type="application/ld+json" dangerouslySetInnerHTML={
        { __html: schema }
      }></script>
    </Head>
  )
}

export default Seo
