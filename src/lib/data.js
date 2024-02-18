// Temporary data
const users = [
  { id: 1, name: "shivam" },
  { id: 2, name: "ram" },
];

const posts = [
  { id: 1, title: "Post 1", body: "..............", userId: 1 },
  { id: 2, title: "Post 2", body: "..............", userId: 2 },
  { id: 3, title: "Post 3", body: "..............", userId: 3 },
  { id: 4, title: "Post 4", body: "..............", userId: 4 },
  { id: 5, title: "Post 5", body: "..............", userId: 5 },
  { id: 6, title: "Post 6", body: "..............", userId: 6 },
];
export const getPosts = async () => {
  return posts;
};
export const getPost = async (id) => {
  const post = posts.find((post) => post.id === parseInt(id));
  return post;
};
export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
};
