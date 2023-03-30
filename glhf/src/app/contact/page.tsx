'use client';

import Image from "next/image"
import styles from '@component/styles/Contact.module.scss'
import Footer from "@component/components/footer"
import { useState } from "react"
import Alert from 'react-bootstrap/Alert'
import cx from 'classnames'

export default function Contact() {
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState<null | Boolean>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/messages/add', {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({ name, emailAddress, message}),
      });

      const data = await response.json();
      if(data.status === 'success'){
        setAlert(true);
        setName('');
        setEmailAddress('');
        setMessage('');
      } else {
        setAlert(false);
      }
    } catch (error) {
      console.log(error);
      setAlert(false);
    }
  }

  return (
    <>
      <div className={styles.contactImage}>
        <div className={styles.imgWrapper}>
          <Image src="/assets/contact-img.jpg" alt="A shopping mall" fill={true} style={{objectFit:"cover"}} sizes={'auto, auto, auto'}/>
        </div>
        <div className={styles.contactTitle}>
          <Image src="/assets/contact-title.png" alt="A text that says" fill={true} style={{objectFit:"contain"}} sizes={'auto, auto, auto'}/>
        </div>
      </div>
      <div className={styles.content}>
        <section className={styles.contactMain}>
          <div className={styles.contactForm}>
            <h1>Get in touch</h1>
            <h4><b>Send a Message</b></h4>
            <p>Feel free to let us know your thoughts and feedbacks. We&apos;re happy to listen to our valued readers. We&apos;ll get back to you as soon as we can.</p>
            <Alert className={cx(styles.alert, {[styles.hidden] : alert === null})} variant={alert ? 'success' : 'danger'}>
              {alert ? 'Message successfully sent' : 'An error occured. Please try again.'}
              <button onClick={() => setAlert(null)}>✕</button>
            </Alert>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className={styles.nameEmail}>
                <div>
                  <label htmlFor='name'>Name</label>
                  <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" name="name"></input>
                </div>
                <div>
                  <label htmlFor='email'>Email Address</label>
                  <input  onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} type="text" id="email" name="email"></input>
                </div>
              </div>
              <div className={styles.message}>
                <label htmlFor='message'>Message</label>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} rows={5} cols={60} name = "message">
                </textarea>
              </div>
              <button type="submit"><h3>Submit</h3></button>
            </form>
          </div>
          <div className={styles.contactDetails}>
            <div>
              <h3>Email us</h3>
              <p>txabiguerrero2000@gmail.com</p>
            </div>
            <div>
              <h3>Call us</h3>
              <p>+63 966 990 1844</p>
            </div>
            <div>
              <h3>Follow us</h3>
              <div className={styles.socialIcons}>
                <Image src="/assets/socials/instagram-logo.svg" alt="instamgram icon" width={22} height={22}/>
                <Image src="/assets/socials/twitter-logo.svg" alt="instamgram icon" width={22} height={22}/>
                <Image src="/assets/socials/facebook-logo.svg" alt="instamgram icon" width={22} height={22}/>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}