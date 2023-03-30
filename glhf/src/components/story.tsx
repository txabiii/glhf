import styles from '@component/styles/Story.module.scss'
import Image from 'next/image'
import useStoriesContext from '../context/StoriesContext'
import Link from 'next/link'

interface StoryProps {
  key: number;
  id: number;
}

export default function Story(props: StoryProps) {
  const { stories } = useStoriesContext();

  const story = stories.find((item: { id: number; }) => item.id === props.id)

  return (
    <div className={styles.story}>
      <div className={styles.exploreWrapper}>
        <Link href={"/stories/" + story?.id}>
          <button className={styles.explore}>
            <h4>Read</h4>
          </button>
        </Link>
      </div>
      <Image 
        src={story ? story.storyImg : ''} // put default no-image link here
        alt="" 
        fill={true} 
        sizes="auto, auto, auto"
        style={{objectFit:"cover"}} 
      />
      <div className={styles.storyDetails}>
        <div className={styles.storyTitle}>
          <h2>{story?.place}</h2>
        </div>
        <div className={styles.location}>
          <div className={styles.locationIcon}>
            <Image src="/assets/location-svg.svg" alt="location icon" fill={true}/>
          </div>
          <h4>{story?.address}</h4>
        </div>
      </div>
    </div>
  );
}