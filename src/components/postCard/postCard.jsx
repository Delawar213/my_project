import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"


const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
            <Image src="https://images.pexels.com/photos/3978855/pexels-photo-3978855.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}></Image>
        </div>
        <span className={styles.date} >01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.title}>{post.title}</div>
        <p className={styles.desc}>{post.body}c</p>
    <Link href={`/blog/${post.id}`}>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard
