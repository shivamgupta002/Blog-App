import Image from "next/image";
import styles from "./about.module.css";
const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>
            {" "}
            We create digital ideas that are bigger,bolder,braver,and better.
          </h1>
          <p className={styles.desc}>
            We create digital ideas that are bigger,bolder,braver,and better. we
            believe in good ideas flexibility and precision. wide range of web
            and software development services.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10K</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10K</h1>
              <p>Year of experience</p>
            </div>
             
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="about img" fill />
        </div>
      </div>
    </>
  );
};
export default About;
