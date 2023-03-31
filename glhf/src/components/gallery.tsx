/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'react-bootstrap'
import { useState, useRef, useEffect } from 'react'
import styles from '../styles/Gallery.module.scss'
import cx from 'classnames'

export default function Gallery({ show, handleClose, index, setIndex }: any) {
  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  const [fullScreen, setFullscreen] = useState(false);

  const [images,setImages] = useState([
    { src:"/assets/gallery/gallery-1.jpg" },
    { src:"/assets/gallery/gallery-2.jpg" },
    { src:"/assets/gallery/gallery-3.jpg" },
    { src:"/assets/locations/manila.jpg" },
    { src:"/assets/locations/pasay.jpg" },
    { src:"/assets/locations/quezon-city.jpg" },
    { src:"/assets/locations/taguig.jpg" },
    { src:"/assets/stories/stories-1.jpg" },
    { src:"/assets/stories/stories-2.jpg" },
    { src:"/assets/stories/stories-3.jpg" },
    { src:"/assets/stories/stories-4.jpg" },
    { src:"/assets/stories/stories-5.jpg" },
  ]);

  const selectedRef = useRef(null);
  const smallCarouselRef = useRef(null);

  useEffect(()=>{
    const selectedElement = selectedRef.current;
    const container = smallCarouselRef.current;
    
    if (container && selectedElement) {
      if((container as HTMLDivElement).scrollLeft > (selectedElement as HTMLDivElement).offsetLeft){
        (container as HTMLDivElement).scrollLeft = (selectedElement as HTMLDivElement).offsetLeft; 
      }

      if((selectedElement as HTMLDivElement).offsetLeft - (container as HTMLDivElement).scrollLeft > (container as HTMLDivElement).offsetWidth - (selectedElement as HTMLDivElement).offsetWidth){
        (container as HTMLDivElement).scrollLeft = (selectedElement as HTMLDivElement).offsetLeft - ((container as HTMLDivElement).offsetWidth - (selectedElement as HTMLDivElement).offsetWidth) + 1;
      }
    }
  },[index])
  return (
    <>
      <div className={cx(styles.popUp, {[styles.show] : show}, {[styles.hidden] : !show})}>
        <div className={styles.popUpDialog}>
          <button className={styles.popUpClose} onClick={handleClose}>╳</button>
          <h2>Gallery</h2>
          <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
            {images.map((image, imgIndex)=>(
              <Carousel.Item key={imgIndex}>
                  <img
                    src={image.src} 
                    alt=''
                    className={cx(styles.carouselImg, {[styles.fullScreen] : fullScreen}, {'' : !fullScreen})}
                    onClick={() => setFullscreen(!fullScreen)}
                  />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className={styles.smallCarousel} ref={smallCarouselRef}>
            {images.map((image, imgIndex)=>(
              <div key={imgIndex} className={cx({[styles.selected] : index === imgIndex}, {[styles.notSelected] : index !== imgIndex})} onClick={() => handleSelect(imgIndex)} ref={index === imgIndex ? selectedRef : null}>
                <img src={image.src} alt="" className={styles.smallCarouselImg}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}