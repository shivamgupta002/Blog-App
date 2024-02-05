import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h2>Not-found</h2>
      <p>Sorry we cannot find your page</p>
      <Link href="/">Return</Link>
    </>
  );
};

export default NotFound;
