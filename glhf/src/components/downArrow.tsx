import styles from '../styles/DownArrow.module.scss'

export default function DownArrow({contentRef, scrollToContent}: any) {
  return (
    <div className={styles.downArrowWrapper}>
      <div onClick={scrollToContent} className={styles.downArrow}>↓</div>
    </div>
  )
}