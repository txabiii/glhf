'use client';

import Image from "next/image"
import styles from '@component/styles/Stories.module.scss'
import Footer from "@component/components/footer"
import Story from "@component/components/storyListItem"
import useStoriesContext from '@component/context/StoriesContext';

export default function Stories(){
  const { stories } = useStoriesContext();  
  return(
    <>
      <div className={styles.storiesImage}>
        <div className={styles.imgWrapper}>
          <Image src="/assets/stories-img.jpg" alt="A shopping mall" priority={true} fill={true} sizes={'auto, auto, auto'} style={{objectFit:"cover"}}/>
        </div>
        <div className={styles.storiesTitle}>
          <Image src="/assets/stories-title.png" alt="A text that says" fill={true} sizes={'auto, auto, auto'} style={{objectFit:"contain"}}/>
        </div>
      </div>
      <div className={styles.content}>
        <section className={styles.storiesList}>
          <h4 style={{marginBottom:'22px'}}>Explore our stories</h4>
            {stories.map((story, index) => (
              <div key={index}>
                <Story id={story.id}/>
                <div className={styles.divider}></div>
              </div>
            ))}
        </section>
        <Footer />
      </div>
    </>
  )
}