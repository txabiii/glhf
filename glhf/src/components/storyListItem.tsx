import Image from "next/image"
import styles from '@component/styles/StoryListItem.module.scss'
import useStoriesContext from '@component/context/StoriesContext';
import Link from 'next/link'

interface StoryListProps {
  id: number
}

export default function StoryListItem(props: StoryListProps) {
  const { stories } = useStoriesContext();

  const story = stories.find(item => item.id === props.id)

  return(
    <div className={styles.wrapper}>
      <div className={styles.storyImage}>
        <Image src={story ? story.storyImg : ''} alt="" fill={true} sizes={'auto, auto, auto'} />
      </div>
      <div className={styles.storyText}>
        <div className={styles.storyTitlePreview}>
          <Link href={"/stories/" + story?.id}>
            <h2 className={styles.articleTitle}>{story?.title}</h2>
          </Link>
          <p style={{textAlign:'justify'}}>{story?.preview}</p>
        </div>
        <p style={{marginTop:'25px'}}>{story?.date}</p>
      </div>
    </div>
  )
}