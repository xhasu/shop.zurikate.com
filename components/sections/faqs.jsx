import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Faqs = () => {

  useEffect(() => {
    gsap.from('.faqs', {
      scrollTrigger: {
        trigger: '.faqs-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
        // markers: true,
      },
      y: '+5%',
      opacity: 0
    })
  }, [])

  return (
    <div className="faqs">
      <section className="section faqs-section">
        <h2 className="page-title"><span>Frequent</span> Questions:</h2>

        <div className="faqs-box">
          <div className="faqs-body">
            <p><strong>When will I get my items?</strong> Once order and payment is received the delivery time will depend on the following:</p>
            <p>1. <span>If your vehicle is a newer model</span> or we do not have the template of your wheels we will need  1-3 business days to take exact measurements.(Our SKINS are made with specific steps to fit perfectly on your wheels). After measurements, production and installation time will be between 1 to 4 businness days.</p>
            <p>2. <span>If the template of your wheels is available</span>, we will ship your order within 3-5 business days. If installation is required, we will reach out to set up a date.</p>
            <p><strong>How do I change my order?</strong></p>
            <p>1. <span>If you want to change the color or your order</span> feel free to contact us within 24 hours  after order is placed at no charge. Our customer service number is <a href="tel:3057679095"><span>(305)767-9095</span></a>. We are available Monday- Friday 9am-5pm Eastern time</p>
            <p className="lead">If you need more information contact us through any of these channels:</p>
          </div>
          <div className="faqs-media">
            <img src="/images/faqs-media.png" alt="Zurikate skins for wheels" width="501" height="497" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faqs
