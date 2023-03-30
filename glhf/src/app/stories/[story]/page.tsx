'use client';

import styles from '@component/styles/StoryPage.module.scss'
import Image from 'next/image'
import Footer from '@component/components/footer'
import localFont from 'next/font/local'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import { Remarkable } from 'remarkable'
import useStoriesContext from '@component/context/StoriesContext';
import Link from 'next/link'
import DownArrow from '@component/components/downArrow';
import cx from 'classnames'

const placeFont = localFont({ src: '../../../fonts/Nestor.ttf'});

export default function Page({params}: {params: {story: string}}) {
  const { stories } = useStoriesContext();

  const router = useRouter();
  const storyId = parseInt(params.story);  
  const story = stories.find(item => item.id === storyId)

  const [markdown, setMarkdown] = useState('');
  useEffect(() => {  
    if (story) {
      fetch(story.md)
        .then(response => response.text())
        .then(text => setMarkdown(text))
        .catch(error => console.log(error));
    }
  }, [story]);

  const md = new Remarkable();
  const html = md.render(markdown);  

  const contentRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if(contentRef.current)
        setIsVisible((contentRef.current as HTMLDivElement).getBoundingClientRect().top < 77);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

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

  if (isNaN(storyId)) {
    router.push('/stories');
    return null;
  }

  return (
    <div>
      <div onClick={scrollToContent} className={cx(styles.upArrow, {[styles.show] : isVisible})}>↑</div>
      <div className={styles.storyImage}>
        <div className={styles.imgWrapper}>
          <Image src={story ? story.locationImg : ''} alt="" fill={true} style={{objectFit:"cover"}}/>
        </div>
        <div className={styles.storyTitle}>
          <h1 className={placeFont.className}>{story?.city}</h1>
        </div>
        <DownArrow contentRef={contentRef} scrollToContent={scrollToContent} />
      </div>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.blog}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div className={styles.relatedStoriesLabel}>
            <div className={styles.line}></div>
              <h3>Related Stories</h3>
            <div className={styles.line}></div>
          </div>
          <div className={styles.relaredStoriesWrapper}>
            {
              stories.map(item => { if(item.id !== story?.id) return item})
              .filter(item => item !== undefined)
              .slice(0,3)
              .map(item => {
                if(item) return (
                  <div key={item.id} className={styles.relatedStory}>
                    <div className={styles.relatedStoryImgWrapper}>
                      <Image src={item.storyImg} alt="recommended article image" fill={true} sizes={"auto, auto, auto"}/>
                    </div>
                    <Link href={"/stories/" + item.id} scroll={true}>
                      <h4><b>{item.title}</b></h4>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}