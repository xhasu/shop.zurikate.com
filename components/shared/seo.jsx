import React from 'react'
import Head from 'next/head'

const Seo = () => {

  const schema = ``;

  return (
    <Head>
      <title>Zurikate - Wheel Skins</title>

      <meta name="author" content="Zurikate" />
	    <meta name="description" content="Transform and Protect Your Vehicle's Wheels with Premium Adhesive Vinyl Wraps Upgrade your ride with our high-quality adhesive vinyl wheel skins, available in 8 stunning colors! Each wrap is precision-crafted to fit your wheels perfectly, ensuring a sleek and customized look. Enhance the style and durability of your wheels today!" />
      <meta name="keywords" content="Wheels" />

      <meta property="og:title" content="Wheel Skins" />
      <meta property="og:description" content="Transform and Protect Your Vehicle's Wheels with Premium Adhesive Vinyl Wraps Upgrade your ride with our high-quality adhesive vinyl wheel skins, available in 8 stunning colors! Each wrap is precision-crafted to fit your wheels perfectly, ensuring a sleek and customized look. Enhance the style and durability of your wheels today!" />
      <meta property="og:image" content="https://zurikate.com/images/share.png" />
      <meta property="og:url" content="https://zurikate.com/" />

      <script type="application/ld+json" dangerouslySetInnerHTML={
        { __html: schema }
      }></script>
    </Head>
  )
}

export default Seo
