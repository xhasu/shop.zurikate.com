import React from 'react'
import Head from 'next/head'

const Seo = () => {

  const schema = ``;

  return (
    <Head>
      <title>Zurikate – Two Tone Wheels</title>

      <meta name="author" content="Zurikate" />
	    <meta name="description" content="Zurikate Two Tone Wheels" />
      <meta name="keywords" content="Wheels" />

      <meta property="og:title" content="Zurikate" />
      <meta property="og:description" content="Zurikate – Two Tone Wheels" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />

      <script type="application/ld+json" dangerouslySetInnerHTML={
        { __html: schema }
      }></script>
    </Head>
  )
}

export default Seo
