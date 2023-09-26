import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>BlogsPage</h1>
    </div>
  );
};

export default Blog;
