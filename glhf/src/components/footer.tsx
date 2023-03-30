import Image from 'next/image'
import styles from '@component/styles/Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socials}>
          <Image src="/glhf-white.png" alt="glfh logo" width={103} height={103} />
          <p>Take a journey to Metro Manila. Read stories on our website.</p>
          <div className={styles.socialIcons}>
            <Image src="/assets/socials/instagram-logo.svg" alt="instamgram icon" width={22} height={22}/>
            <Image src="/assets/socials/twitter-logo.svg" alt="instamgram icon" width={22} height={22}/>
            <Image src="/assets/socials/facebook-logo.svg" alt="instamgram icon" width={22} height={22}/>
          </div>
        </div>
        <div className={styles.sitemap}>
          <p><b>Sitemap</b></p>
          <Link href='/' scroll={true}><p>Home</p></Link>
          <Link href='/about' scroll={true}><p>About</p></Link>
          <Link href='/contact' scroll={true}><p>Contact</p></Link>
          <Link href='/stories'><p>Stories</p></Link>
        </div>
        <div className={styles.contact}>
          <p><b>Reach Us</b></p>
          <p>txabiguerrero2000@gmail.com</p>
          <p>Quezon City, NCR, Philippines</p>
          <p>+63 966 990 1844</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Images are from unsplash.com</p>
        <div className={styles.divider}></div>
        <p>Website © 2023 Txabi Guerrero</p>
      </div>
    </div>
  )
}