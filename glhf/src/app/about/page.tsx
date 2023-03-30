import localFont from 'next/font/local'
import Image from 'next/image'
import styles from '@component/styles/About.module.scss'
import Footer from "@component/components/footer"

const quoteFont = localFont({ src: '../../fonts/Thesignature.ttf'});

export default function About() {
  return (
    <>
      <div className={styles.aboutImage}>
        <div className={styles.imgWrapper}>
          <Image src="/assets/about-img.jpg" alt="A shopping mall" fill={true} style={{objectFit:"cover"}} sizes={'auto, auto, auto'}/>
        </div>
        <div className={styles.aboutTitle}>
          <Image src="/assets/about-title.png" alt="A text that says" fill={true} style={{objectFit:"contain"}} sizes={'auto, auto, auto'}/>
        </div>
      </div>
      <div className={styles.content}>
        <section className={styles.statements}>
          <div className={styles.aboutUs}>
            <h2>About us</h2>
            <p>Get Lost Have fun is an online platform that provides readers with valuable information and insights on different travel destinations in Metro Manila. The content is curated by a team of experienced travel writers and bloggers who are passionate about exploring new destinations and sharing their experiences with others.</p>
          </div>
          <Image src="/assets/team.jpg" alt="" width={3600} height={2400}/>
          <div className={styles.missionVision}>
            <div>
              <h2>Mission</h2>
              <p>Our mission is to provide travelers with the resources and inspiration they need to plan and embark on unforgettable journeys to Manila. We believe that travel is a powerful tool for personal growth, cultural exchange, and creating positive change in the world. Get Lost Have Fun is dedicated to sharing authentic and engaging content that reflects the diverse interests and experiences of travelers.</p>
            </div>
            <div>
              <h2>Vision</h2>
              <p>Our vision is to inspire and empower travelers around the world to explore new destinations and cultures, to connect with locals and  to create unforgettable memories that last a lifetime. Through our travel blog website, we strive to provide valuable insights, practical tips, and authentic stories that inspire and inform our readers. </p>
            </div>
          </div>
        </section>
        <section className={styles.quote}>
          <h1 className={quoteFont.className}>&quot;People don&apos;t take trips, trips take people.&quot;</h1>
          <h4>- John Steinback</h4>
        </section>
        <Footer/>
      </div>
    </>
  )
}