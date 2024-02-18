import { Suspense } from "react";
import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/page";
const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong in slug Page");
  }
  return res.json();
};
const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/about.png"
            alt="singlePost"
            fill
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.details}>
            <Image
              className={styles.avatar}
              src="/about.png"
              alt="singlePost"
              height={50}
              width={50}
            />
            {/* Suspense react component */}
            <Suspense fallback={<div>Loading...</div>}>
              {/* Post User */}
              <PostUser userId={post.userId} />
            </Suspense>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>{post.body}</div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
