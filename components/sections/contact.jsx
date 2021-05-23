import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <section className="section contact-section">

        <div className="contact-info">
          <ul>
            <li>
              <div className="contact-item">
                <i className="icon"><img src="/images/icons/icon-mail-active.png" alt="icon mail zurikate" width="48" /></i>
                <a href="mailto:zurikatewheels@gmail.com">zurikatewheels@gmail.com</a>
              </div>
            </li>
            <li>
              <div className="contact-item">
                <i className="icon"><img src="/images/icons/icon-pin.png" alt="icon location zurikate" width="36" /></i>
                <span>USA</span>
              </div>
            </li>
            <li>
              <div className="contact-item">
                <i className="icon"><img src="/images/icons/icon-phone.png" alt="icon phone zurikate" width="48" /></i>
                <a href="tel:+13057679095">(305) 767-9095</a>
              </div>
            </li>
            <li>
              <div className="contact-item">
                <a href="https://instagram.com/twotonewheels" target="_blank"><i className="icon"><img src="/images/icons/icon-instagram.png" alt="icon instagram zurikate" width="48" height="48" /></i></a>
                <a href="https://www.facebook.com/twotonewheels" target="_blank"><i className="icon"><img src="/images/icons/icon-facebook.png" alt="icon facebook zurikate" width="48" height="48" /></i></a>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact-bg">
					<img src="/images/backgrounds/bg-bottom.png" alt="decorative sticker" width="737" height="476" loading="lazy" />
				</div>
      </section>
    </div>
  )
}

export default Contact
