import Image from "next/image";
import styles from "./singlePost.module.css";
const SinglePostPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/about.png" alt="singlePost" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.details}>
            <Image
              className={styles.avatar}
              src="/about.png"
              alt="singlePost"
              height={50}
              width={50}
            />
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>Shivam Gupta</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid deserunt quia similique minima nisi? Quisquam eius itaque velit rem.</div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
