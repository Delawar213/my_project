import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("plaease check your code something eroor")

  }
  return res.json();
}

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);


  return (
    <div className={styles.container}>
      
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3978855/pexels-photo-3978855.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
        fill className={styles.img} />
      </div>

      
       
      <div className={styles.textContainer}>
      <h1 className={styles.title}>{post.title}</h1>
      <Suspense fallback={<div>loading</div>}>
        <PostUser userId={post.userId}/>
        </Suspense>
        <div className={styles.detail}>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              11.06.2024
            </span>
          </div>
        </div>Lorem
        <div className={styles.content}> {post.body} </div>
      </div>
    </div>
  );
};
export default SinglePage