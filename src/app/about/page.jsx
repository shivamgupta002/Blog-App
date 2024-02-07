import Image from "next/image";
import styles from './about.module.css';
const About = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="aboutImage" fill />
      </div>
    </>
  );
};
export default About;
