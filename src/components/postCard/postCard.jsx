import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const PostCard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image src="/contact.png" alt="postImg" fill />
          </div>
          <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptas.</p>
          <Link href="/blog" className={styles.link}>Read More </Link>
        </div>
      </div>
    </>
  );
};
export default PostCard;
