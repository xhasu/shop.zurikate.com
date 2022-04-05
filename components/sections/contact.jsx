import React, { useEffect, useState, useRef } from 'react'
import Snackbar from 'node-snackbar'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [address, setAddress] = useState('');

  const [imgVehicle, setImgVehicle] = useState('');
  const [imgWheel, setImgWheel] = useState('');
  const [kitType, setKitType] = useState('Kit Only');
  const [color, setColor] = useState('');

  useEffect(() => {
    gsap.from('.contact-info', {
      scrollTrigger: {
        trigger: '.contact-info',
        start: 'top bottom',
        toggleActions: 'play none none reverse',
        // markers: true,
      },
      y: '+120%',
      opacity: 0
    })
  }, [])

  useEffect(() => {

    function validateForm(event) {
      event.preventDefault();
      event.target.classList.add('was-validated');

      if (event.target.checkValidity() == false) {
        event.target.classList.add('custom-validation');
        return false;
      }

      submitLoginForm();

      return true;
    }

    formRef.current.addEventListener('submit', validateForm);

    return () => {
      formRef.current && formRef.current.removeEventListener('submit', validateForm);
    }

  }, [email, details, address, imgVehicle, imgWheel, kitType, color]);

  const submitLoginForm = async () => {

    setLoading(true);

    let file_vehicle = document.querySelector('#file_vehicle').files[0];
    let file_wheel = document.querySelector('#file_wheel').files[0];

    const formData = new FormData();
    formData.append('email', email);
    formData.append('car', details);
    formData.append('city', address);
    formData.append('file_vehicle', file_vehicle);
    formData.append('file_wheel', file_wheel);
    formData.append('opt', kitType);
    formData.append('color', color);

    try {

      const response = await fetch('/contact.php', {
        method: 'POST',
        body: formData,
      });

      const json = await response.json();

      setLoading(false);

      if (json.success) {
        showSnackbar('Thank you for contacting us');
        document.querySelector('#contact .contact-form').classList.add('hidden');
        resetForm();
      }
      if (json.error) {
        showSnackbar('Email is not valid');
      }

    } catch (error) {
      showSnackbar(error.message);
      setLoading(false);
    }

    return false;
  }

  const resetForm = () => {
    setEmail('');
    setDetails('');
    setAddress('');
    setImgVehicle('');
    setImgWheel('');
    setKitType('Kit Only');
    setColor('');
  }

  const showSnackbar = (message) => {
    Snackbar.show({
      pos: 'bottom-right',
      showAction: false,
      text: message,
      textColor: '#000',
      backgroundColor: '#CBFF00',
    });
  }

  return (
    <div className="contact" id="contact">
      <section className="section contact-section">

        <div className="contact-form hidden">
          <form ref={formRef} id="contactForm" name="order" className="info-content" method="POST">
            <div className="content-item">
              <i><img src="/images/icons/icon-mail.png" alt="icon mail" width="48" /></i>
              <p className="lead">
                <i>
                  Send us an e-mail to: <br />
                  <a href="mailto:zurikatewheels@gmail.com" title="zurikatewheels@gmail.com"><span>zurikatewheels@gmail.com</span></a> <br />
                  with the following information:
                </i>
              </p>
            </div>
            <div className="content-item">
              <i className="icon">
                <img src="/images/icons/icon-mail.png" alt="icon mail" width="45" />
                <img src="/images/icons/bullet-active.png" alt="icon bullet" width="18" height="18" />
              </i>
              <div>
                <p>
                  <i> <span>Your Mail</span> </i>
                </p>
                <input type="email" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required={true} />
              </div>
            </div>
            <div className="content-item">
              <i className="icon">
                <img src="/images/icons/icon-car.png" alt="icon car" />
                <img src="/images/icons/bullet-active.png" alt="icon bullet" width="18" height="18" />
              </i>
              <div>
                <p>
                  <i> <span>Year</span>, <span>brand</span> and <span>make</span> of your vehicle </i>
                </p>
                <input type="text" name="car" id="car" value={details} onChange={(event) => setDetails(event.target.value)} required={true} />
              </div>
            </div>
            <div className="content-item">
              <i className="icon">
                <img src="/images/icons/icon-car.png" alt="icon car" />
                <img src="/images/icons/bullet-active.png" alt="icon bullet" width="18" height="18" />
              </i>
              <div>
                <p>
                  <i> <span>City</span> and <span>Zip code</span> </i>
                </p>
                <input type="text" name="city" id="city" value={address} onChange={(event) => setAddress(event.target.value)} required={true} />
              </div>
            </div>
            <div className="content-item">
              <i className="icon">
                <img src="/images/icons/icon-camera.png" alt="icon camera" width="42" />
                <img src="/images/icons/bullet-active.png" alt="icon bullet" width="18" height="18" />
              </i>
              <div>
                <p>
                  <i> <span>One</span> image of your <span>vehicle</span> </i>
                </p>
                <label htmlFor="file_vehicle">
                  <input type="file" name="file_vehicle" id="file_vehicle" className="hidden" accept="image/*" value={imgVehicle} onChange={(event) => setImgVehicle(event.target.value)} required={true} />
                  <div className="input-file">
                    <img src="/images/icons/icon-camera-black.png" alt="icon camera" width="30" />
                    <span>Upload image</span>
                    <span>Change image</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="content-item">
              <i className="icon">
                <img src="/images/icons/icon-camera.png" alt="icon camera" width="42" />
                <img src="/images/icons/bullet-active.png" alt="icon bullet" width="18" height="18" />
              </i>
              <div>
                <p>
                  <i> <span>One</span> image of your <span>wheel</span> </i>
                </p>
                <label htmlFor="file_wheel">
                  <input type="file" name="file_wheel" id="file_wheel" className="hidden" accept="image/*" value={imgWheel} onChange={(event) => setImgWheel(event.target.value)} required={true} />
                  <div className="input-file">
                    <img src="/images/icons/icon-camera-black.png" alt="icon camera" width="30" />
                    <span>Upload image</span>
                    <span>Change image</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="content-item">
              <i className="icon">
                <img src="/images/icons/icon-car.png" alt="icon car" className="hidden-visibility" />
                <img src="/images/icons/bullet-active.png" alt="icon bullet" width="18" height="18" />
              </i>
              <div>
                <p>
                  <i> <span>Choose</span> one option: </i>
                </p>
                <label className="opt-label">
                  Kit Only
                  <input className="hidden" type="radio" name="opt" defaultValue="Kit Only" onClick={(event) => setKitType('Kit Only')} defaultChecked={true} />
                  <div className="opt-box">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </label>
                <label className="opt-label">
                  Kit with installation
                  <input className="hidden" type="radio" name="opt" defaultValue="Kit with installation" onClick={(event) => setKitType('Kit with installation')} />
                  <div className="opt-box">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </label>
              </div>
            </div>
            <div className="content-item">
              <i className="icon">
                <img src="/images/icons/icon-picker.png" alt="icon picker" width="45" />
                <img src="/images/icons/bullet-active.png" alt="icon bullet" width="18" height="18" />
              </i>
              <div>
                <p>
                  <i> Send the <span>color</span> you choose for your <span>wheel.</span> </i>
                </p>
                <select name="color" id="color" value={color} onChange={(event) => setColor(event.target.value)} required={true} >
                  <option value="" className="hidden"></option>
                  <optgroup label="Gloss">
                    <option value="Gloss luxury black">
                      Gloss luxury black
                    </option>
                    <option value="Gloss fire red">
                      Gloss fire red
                    </option>
                    <option value="Gloss golden beach">
                      Gloss golden beach
                    </option>
                    <option value="Satin azure">
                      Satin azure
                    </option>
                  </optgroup>
                  <optgroup label="Matte">
                    <option value="Matte brown">
                      Matte brown
                    </option>
                    <option value="Matte gun metal">
                      Matte gun metal
                    </option>
                    <option value="Matte hard black">
                      Matte hard black
                    </option>
                  </optgroup>
                  <optgroup label="Reflective">
                    <option value="Reflective zurikate black">
                      Reflective zurikate black
                    </option>
                  </optgroup>
                </select>
                <br />
                <small>Please allow 24 hours <br /> for our response</small>
                <div className="small-msj"><span>Estimated delivery</span> 3-10 days</div>
              </div>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>

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

      {loading && <Loading />}

    </div>
  )
}

export default Contact

export const Loading = () => {
  return (
    <div className="loading active">
      <div className="loading-box">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}