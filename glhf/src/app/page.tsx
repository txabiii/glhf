/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"

import Image from 'next/image'
import styles from '@component/styles/Home.module.scss'
import Footer from '@component/components/footer'
import Story from '@component/components/story'
import useStoriesContext from '@component/context/StoriesContext';
import { useEffect, useState, useRef } from 'react'
import Gallery from '@component/components/gallery'
import cn from 'classnames';
import DownArrow from '@component/components/downArrow'

export default function Home() {  
  const { stories, fetchStories } = useStoriesContext();
  useEffect(() => {
    fetchStories();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [index, setIndex] = useState(0);

  const introPicsWrapperRef = useRef(null);
  const introPicsRef = useRef(null);

  useEffect(()=>{
    if(window.innerWidth < 400){
      if(introPicsRef.current && introPicsWrapperRef.current){
        (introPicsWrapperRef.current as HTMLDivElement).scrollLeft += ((introPicsRef.current as HTMLDivElement).offsetWidth - (introPicsWrapperRef.current as HTMLDivElement).offsetWidth) / 4;
      }
    }
  },[])

  const contentRef = useRef(null);

  const scrollToContent = () => {
    const content = contentRef.current;
    if(content) {
      const position = (content as HTMLDivElement).offsetTop - 78;
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <Gallery index={index} setIndex={setIndex} show={show} handleClose={handleClose} />
      <div className={styles.hero}>
        <Image src="/assets/hero.png" alt="Image of a church" fill={true} style={{objectFit:"cover"}}></Image>
        <div className={styles.titleText}>
          <img src="/assets/get.png" alt="text of the word 'get'" width={'50%'}/>
          <img src="/assets/lost.png" alt="text of the word 'lost'" width={'100%'}/>
          <img src="/assets/have-fun.png" alt="text of the words 'have fun'" width={'60%'}/>
        </div>
        <DownArrow contentRef={contentRef} scrollToContent={scrollToContent}/>
      </div>
      <div className={styles.content} ref={contentRef}>
        <div className={cn(styles.introduction, 'slideInElement')}>
          <div className={styles.introText}>
            <h1>Manila Mania</h1>
            <p>&emsp;&emsp;&emsp;Get Lost Have Fun is a Travel blog showcasing exciting places around the metro. Here, we present the best places we think you would love to visit. From parks, museums to the best places to eat, you can browse through our articles to get the gist of what the city can offer so you can plan your next trip.</p>
            <button type="button" onClick={handleShow}>
              <h3>View Gallery</h3>
            </button>
          </div>
          <div className={styles.introPicsWrapper} ref={introPicsWrapperRef}>
            <div className={styles.introPics} ref={introPicsRef}>
              <div className={styles.introPicsImgWrapper}>
                <div onClick={()=>{setIndex(0);handleShow();}}  className={styles.introPicsExpand} ><h4>Expand</h4></div>
                <Image src="/assets/gallery/gallery-1.jpg" alt="text of the word 'get'" fill={true} sizes="auto, auto, auto"/>
              </div>
              <div className={styles.introPicsImgWrapper}>
                <div onClick={()=>{setIndex(1);handleShow();}} className={styles.introPicsExpand} ><h4>Expand</h4></div>
                <Image src="/assets/gallery/gallery-2.jpg" alt="text of the word 'lost'" fill={true} sizes="auto, auto, auto"/>
              </div>
              <div className={styles.introPicsImgWrapper}>
                <div onClick={()=>{setIndex(2);handleShow();}} className={styles.introPicsExpand} ><h4>Expand</h4></div>
                <Image src="/assets/gallery/gallery-3.jpg" alt="text of the words 'have fun'" fill={true} sizes="auto, auto, auto"/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.storiesSection}>
          <h1>Stories</h1>
          <p>Our writings on different places in the city. Read all about it!</p>
          <div className={styles.storiesWrapper}>
            <div className={styles.stories}>
              {stories.map(story => (
                <Story key={story.id} id={story.id}/>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}