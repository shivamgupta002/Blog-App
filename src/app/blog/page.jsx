import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";

// const getData = async (slug) => {
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}});
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };
const Blog = async () => {
  // FETCH DATA WITH API
  // const posts = await getData();

  // FETCH DATA WITHOUT API
  const posts = await getPosts();

  return (
    <>
      <div className={styles.container}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Blog;
